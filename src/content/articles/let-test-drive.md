---
title: Unit tests, take the wheel
description: Writing tests as you code will save you later.
tags: [ "code", "tests" ]
readTime: 5
timestamp: 2025-04-18
filename: testing
published: true
---

# Unit tests, take the wheel

#### TL;DR

While [Test Driven Development (TDD)](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
gets some flak these days, writing test as you go, instead
of after the fact can make sure your code's API is well-thought out.

## The problem

We've all been there, during standup, one of your colleagues says something like:
**"I'm almost done with this ticket, I just need to write the tests"**.

I don't know about everyone else,
but I've never been able to convince myself to write quality tests after the fact.
I, invariably, get to a point where I just say to myself **"this is good enough"** and move on.
Usually the after-the-fact tests have the following qualities:

- Coverage is low.
- The tests are unfocused on don't test the behavior in isolation.
- They test implementation details
  - When you know how it works under the hood, the temptation is just too strong.
    These inevitably break when the implementation changes.
- They are brittle
  - [monkey-patching](https://docs.python.org/3/library/unittest.mock.html#patch),
    I've never seen a test that used patching that didn't break when a minor detail changed,
    like the import path changing, or a header for an external API changes.

Last but not least; **when our tests come after the fact, we don't thing about our API as we write
**.

### The real reason we write unit tests

![Dr. Zoidberg meme on how your unit tests are bad](public/img/unit_test_zoidberg.webp)

TDD forces you to think about where you want to end up before you get there.

For example, let's say we're working on a function that serializes data to JSON
and saves to the database. If we're not testing as we go, we usually end up hyper-focusing on
making the code work instead of how our code will be called by the client code.
If we're not careful, we end up with a function that does too much and has a poorly thought-out
API.

```python
# lib/process.py

import json

# A generic function name, with many parameters, is a sign that the function is doing too much.
def process(data, format, db=False, extra=None, verbose=False):
  """Process data and save to db."""
    # Amoung the many things this function does...
    # some amatuer logging
    if verbose:
        print("Starting processing...")

    # Adding extra data to be serialized
    if extra:
        data.update(extra)

    # determining the serialization format
    if format == "json":
        output = json.dumps(data)
    elif format == "xml":
        output = "<data>" + str(data) + "</data>"
    else:
        output = ",".join(data.values())

    # And saving to the database
    if db:
        save_to_db(data)

    return output
```

While reading this function is straightforward, what happens when we try to read the calling code?

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

#### What would have happened if we had written test as we wrote production code?

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
