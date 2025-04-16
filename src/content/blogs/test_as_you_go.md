---
title: Test as you go, not after
description: Writing tests as you code will save you later.
tags: [ "code", "tests" ]
timeToRead: 5
timestamp: 2025-12-18T02:39:03+00:00
filename: testing
published: true
---

# Test as you go

#### TL;DR

Practicing Test Driven Development (TDD) instead of writing tests after, results in higher
quality code.

## The problem

We've all been there, during standup, somebody says something like:
**"I'm almost done with this ticket, I just need to write the tests"**.
When I hear that, I brace myself a little.
Not because it's wrong, but because I’ve learned what comes next.
It's inevitable, like Thanos, except instead of a snap, it's a PR.

I can usually see how the feature was implemented in the git history.

1. Code gets written and it works—awesome.
2. Now it’s time for tests...
3. But suddenly, testing it isn’t so easy, because the code wasn’t written with testing in mind.
4. So some quick tests are added where possible, and then it’s off to the next task.

## So what's the problem?

The tests usually have at least one of the following attributes, maybe all of them:

- Coverage is low
- The tests are slow and unfocused
- They test private methods and implementation details
- They are hard to read
- They are brittle (
  e.g.,[monkey-patching](https://docs.python.org/3/library/unittest.mock.html#patch))
- **_The API is poorly thought out_**

I’ll focus on just one of these issues, since it tends to have the biggest long-term impact.

### The API is poorly thought out

Writing tests while you code forces you to think about the API of whatever you're working on.

For example, let's say Joe is working on a function that serializes data to JSON,
and saving to the database. Since Joe isn't testing as they go, they don't really stop and
think much about the API of the function, and they end up writing a function that has
all the concerns mixed together.

```python
# lib/process.py

import json

# Since this function does too much, it has a generic name that doesn't really help people understand
# what it does.
def process(data, format, db=False, extra=None, verbose=False):
  """Process data and save to db."""
    # This one function handles logging...
    if verbose:
        print("Starting processing...")

    # serializing data
    if extra:
        data.update(extra)

    # determining the serialization format
    if format == "json":
        # The actual serialization, with all the branches
        output = json.dumps(data)
    elif format == "xml":
        output = "<data>" + str(data) + "</data>"
    else:
        # CSV
        output = ",".join(data.values())

    # And saving to the database
    if db:
        save_to_db(data)

    return output
```

And since the focus was on getting it working, things like type hints or a helpful docstring got
skipped.

Reading this function is not too difficult, but what happens when you try to read the client code?

```python
# main.py

if __name__ == "__main__":
    main()

def main():
    ...
    output = process(retrieved, "json", True, extra={"foo": "bar"}, True)
    ...
```

What do these parameters mean? What is the function processing? What are the boolean flags for?
Is this saying it accepts "json" or outputs "json"?

The only way to figure what this function call means is to read the function's code

Writing tests as you code forces you to stop and think about the API of your new code. Your
tests become the first client of your new code.

## When did things go wrong?

The trouble usually starts when we begin writing code that’s meant for production, but we haven’t
shifted into a “testing mindset” yet.

What would have happened if we had written test as we wrote production code?
TDD would have naturally nudged us to slow down and think more deliberately about the API they
were building.

From Martin
Fowler's [Test Driven Development](https://martinfowler.com/articles/ruby.html#TestDrivenDevelopment):

> When we write a test, we imagine the perfect interface for our operation. We are telling ourselves
> a story about how the operation will look from the outside.
>
> Our story won’t always come true, but
> it’s better to start from the best-possible application program interface (API) and work backward
> than to make things complicated, ugly, and “realistic” from the get-go.

## Let's Refactor and TDD while we go

Let’s revisit the earlier `process()` function and break it down into smaller, testable pieces.
We'll imagine we're building this incrementally, test-first.

### Step 1: Extract the serialization logic

Our original `process()` function is abstracting too much, if we're not careful, we might end up
hitting the database when we just want to serialize some data.

Let's start by extracting the serialization logic into its own public function.

```python
# lib/serialize.py
import json

class OutputFormat:
    JSON = "json"
    XML = "xml"
    CSV = "csv"

def serialize(data: dict, format: OutputFormat, extra: dict | None = None) -> str:
    """Serialize data to the specified format.

    Args:
        ...
    """
    if extra:
        data.update(extra)

    if format == OutputFormat.JSON:
        return json.dumps(data)
    elif format == OutputFormat.XML:
        # Some completely valid XML ;)
        return "<data>" + str(data) + "</data>"
    elif format == OutputFormat.CSV:
        return ",".join(data.values())
    else:
        raise ValueError(f"Unsupported format: {format}")

```

This function becomes part of the module's public API.
Now, testing this function is easy-peasy! feed it data and check the results.
We can easily test our serialization logic without worrying about the database or logging.
We also include types to catch errors early, and a docstring to help our future selves.

```python
# test_serialization.py
import json
from lib.process import serialize, OutputFormat

class TestSerialize:
    def test_returns_json_str():

        data = {"name": "Test"}

        output = serialize(data, OutputFormat.JSON)
        results = json.loads(output)

        assert isinstance(results, dict)

    def test_includes_extra_in_output():
        data = {"name": "Test"}
        extra = {"foo": "bar"}

        output = serialize(data, OutputFormat.JSON, extra=extra)
        results = json.loads(output)

        assert "foo" in results

    def test_my_other_behaviors():
        ...
```

Since we're refactoring, we can plug in this function into our `process()` function,
so any existing test for `process()` will still pass.

```python
# lib/process.py
from lib.serialize import serialize, OutputFormat

def process(data, format, db=False, extra=None, verbose=False):
  """Process data and save to db."""
    if verbose:
        print("Starting processing...")

    # This won't pass type checking yet, format is not of type OutputFormat.
    # But thanks to python progressive typing, we can get away with while we're refactoring.
    output = serialize(data, format, extra=extra)

    # And saving to the database
    if db:
        save_to_db(data)

    return output
```

### Step 2: Breaking up the process function

Now that we have a clean serialization function, let's break up the `process()` function into
smaller, more focused functions.

First, let's centralize the logging configuration and use the standard library logging module.

```python
# lib/process.py
import logging
from lib.serialize import serialize, OutputFormat

# It's time to stop reinventing the wheel. Let's use std lib logging library and
# centralize our logging configuration.

logger = logging.getLogger(__name__)

def process(data, format, db=False, extra=None):
    # no more verbose flag, we can just use the logger
    logger.INFO("Starting processing...")

    output = serialize(data, format)

    # And saving to the database
    if db:
        save_to_db(data)

    return output
```

At this point, This function is just 3 lines of business logic,
we can extract this logic into the client code.

```python
# main.py

if __name__ == "__main__":
main()

def main():
    ...
    output = serialize(data, format, extra={"foo": "bar"})
    if save_to_db:
        db.save(data)
    ...
```

### Results

We've added only 2 lines of code to our main, but now we have two distinct, testable functions.

- `serialize()` is a pure function that takes data and returns a string.
- `db.save()` we can test separately, in a mocked environment, or with a real database.

## Conclusion

The point of all this refactoring was to show how we can break our system down into smaller,
testable pieces. By practicing TDD (or at least writing tests as we go), we can avoid the
un-readable `process()` function and the poorly thought out API.

This is me getting off my soapbox.
