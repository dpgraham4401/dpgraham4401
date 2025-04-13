---
title: Syn-coding tests
description: Writing tests as you code will save you later.
tags: [ "code", "tests" ]
time: 4
timestamp: 2025-12-18T02:39:03+00:00
filename: testing
published: false
---

# Syn-coding tests

We all have that coworker, (lets call them Joe). During standup, Joe often says
**"I'm almost done with this feature, I just need to write the tests"**.
Every time I hear this, I know pain is headed my way.
It's inevitable, like Thanos, except instead of a snap, it's a PR.

A few days later, the PR comes. I can see the entire lifespan of the code in their PR.

1. Joe wrote the code, got it working, but didn't write any tests as they were going.
2. Joe decide to submit the PR, but they know it'll be rejected without tests.
3. Joe started to write tests, but they realize that they can't easily test the new code.
4. Instead of refactoring the new code's API, Joe throws what tests they easily can and moves on.

## What's wrong with this?

This is a common pattern in software development, but it can lead to a lot of problems.
Joe's tests usually have at least one of the following attributes:

- They are slow and unfocused
- They test private methods and implementation details
- They are hard to read
- They are brittle (
  e.g.,[monkey-patching](https://docs.python.org/3/library/unittest.mock.html#patch))

## When did things go wrong?

Take a look at point 4 in the list above.
If Joe had written test as they coded, they test would have become the first client of their
new code's API. This would have forced Joe to think about the API they were creating.

Testing while you write the production code improves:

- The APi of the class.
- The I/O of the functions/method parameters.
- The name of the functions/methods.
- the dependencies of the class.

