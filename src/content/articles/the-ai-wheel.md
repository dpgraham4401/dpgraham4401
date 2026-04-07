---
title: The AI Death spiral
description: Unbridled AI is a one way ticket to requiring AI
tags: [ "code", "AI" ]
readTime: 4
timestamp: 2026-04-6
filename: The AI Wheel
published: true
isFeatured: true
---

# The AI Death Spiral

It's so easy to let AI write your code for you these days.
A few months ago, this wasn't the case, but now, you just prompt it and it'll happily
run `rm -rf /` for you. Motivation problem solved.

At some point, whether it was curiosity or laziness, you decided it was OK to let AI write your code for you.
Tha't step 1.

### Step 1: You Decide to Let AI Write for You

This is the high that everyone rides when they start vibe coding.
With just a few prompts, Claude is more than happy to write that entire
service for you. Who needs to use the dependency, who's even heard of `react-hook-form`?!
All you gotta do to write it from scratch is just ask Codex.


### Step 2: You Accept the AI changes

So it spits out, and what do you know, it kinda works!

You run it, the UI looks okay, it the network call's succeed, the file's been updated.
You feel like a god. Quick, you must be off to show everyone your pièce de résistance.

### Step 3: Someone Asks for a Change


Two weeks later, something breaks. A network call fails, or the feature works on one page but not the other.
You open the file and... it's a mess.

The code is there, it technically works, but it's not fun to look at.
There are 1000 line long function, import statements in every function, try-catch blocks nested three levels deep.
Gemini also copied and pasted a function for parsing ISO dates three times for some reason,
and when you started Claude with the `--dangerously-skip-permissions` flag, it installed
some package that hasn't been updated on GitHub for 7 years.

You asked AI to include unit tests, (because you're a professional, of course!) but
the tests are importing functions by opening files and reading the contents.
The Python is using `MagicMock` objects so much that it's basically just testing
that `MagicMock` works.

### Step 4: You

You paste the error into Claude with the relevant code snippet and say "fix this."

And it does. It always does. It doesn't ask questions, it doesn't make you think—it just writes the solution.
The patch is applied, the bug is gone, and you move on.

But something has shifted. You've crossed a threshold.

### Step 4: The Spiral Tightens

Now every time something doesn't work, you reach for AI. A cryptic error? AI fixes it. Need to refactor? AI does it. Want to add a feature? AI builds it.

But with each generated fix, the codebase becomes *more* complex and *less* understandable.
AI tends to patch problems rather than solve them. It layers abstractions. It adds utility functions for single-use cases.

Your codebase is now a baroque monument to technical debt, written in a language you don't speak.

### Step 5: The Point of No Return

Eventually, you reach a point where you can't maintain the code *without* AI.

You've become reliant on it not just for writing, but for *understanding* your own code.
Onboarding a new team member? Good luck explaining the architecture when even you don't fully understand it.
Need to migrate frameworks or update dependencies? You need AI for that too.

The death spiral is complete. You're not coding anymore—you're prompting.

---

## How to Avoid It

The solution isn't to never use AI. It's to use it as a tool, not a crutch:

- **Understand what you're accepting.** If AI generates code, spend time reading and understanding it before committing.
- **Keep complexity in check.** Question suggestions that feel over-engineered.
- **Write some code yourself.** Especially the hard parts. That's where you learn.
- **Maintain domain knowledge.** Know your tools, your framework, your patterns.

AI is phenomenal at acceleration. But like all acceleration, you need to keep your hands on the wheel.
