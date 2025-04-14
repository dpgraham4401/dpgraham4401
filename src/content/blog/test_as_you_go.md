---
title: Test as you go, not after
description: Writing tests as you code will save you later.
tags: [ "code", "tests" ]
time: 4
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
# Since this function does too much, it has a generic name that doesn't really help people understand
# what it does.
def process(data, format, db=False, extra=None, verbose=False):
  """ Process data and save to db."""
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
output = process(retrieved, "json", True, extra={"foo": "bar"}, True)
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

```python

```


