---
title: Syn-coding tests
description: Writing tests as you code will save you later.
tags: [ "code", "tests" ]
time: 4
timestamp: 2025-12-18T02:39:03+00:00
filename: testing
published: false
---

# Test as you go

We all have that coworker, (lets call them Joe). During standup, Joe often says
**"I'm almost done with this ticket, I just need to write the tests"**.
Every time I hear this, I know pain is headed my way.
It's inevitable, like Thanos, except instead of a snap, it's a PR.

I can usually see how the feature was implemented in the git history.

1. Joe wrote the code, got it working, but didn't write any tests.
2. Joe decide they were ready to submit, but they knew it would be rejected without tests.
3. When they started to write tests, they realize that they can't easily test the new code.
4. Instead of refactoring the new code's API, Joe throws what tests they easily can and moves on.

## So what's the problem?

The tests usually have at least one of the following attributes, if not more:

- Coverage is low
- They are slow and unfocused
- They test private methods and implementation details
- They are hard to read
- They are brittle (
  e.g.,[monkey-patching](https://docs.python.org/3/library/unittest.mock.html#patch))
- **The API is poorly thought out**

I only want to talk about one, because I think it has the biggest tangible impact on the codebase.

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

And of course, Joe was just concerned with getting it working so they didn't add type annotations
or a helpful docstring.

Reading this function is not too difficult, but what happens when you try to read the client code?

```python
output = process(retrieved, "json", True, extra={"foo": "bar"}, True)
```

What do these parameters mean? What is the function doing? What are the boolean flags for?
Is this saying it accepts "json" or outputs "json"?

The only way to figure what this function call means is to read the function's code

Writing tests as you code forces you to stop and think about the API of your new code. Your
tests become the first client of your new code.

## When did things go wrong?

Take a look at point 4 in the list above.
If Joe had written test as they coded, they test would have become the first client of their
new code's API. This would have forced Joe to think about the API they were creating.

Testing while you write the production code improves:

- The APi of the class.
- The I/O of the functions/method parameters.
- The name of the functions/methods.
- the dependencies of the class.

