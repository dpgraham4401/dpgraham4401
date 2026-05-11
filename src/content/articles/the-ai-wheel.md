---
title: The AI Wheel
description:
  When AI is the only thing that understands your code, AI is the only thing that can change it
tags: ["code", "AI"]
readTime: 5
timestamp: 2026-04-6
filename: The AI Wheel
published: false
isFeatured: true
---

# The AI Wheel

There's an attitude in software developers these days. It's this idea that _"it doesn't really
matter if we understand it, AI can fix it later."_

They might be right.

## The shortcut that eats your codebase

Every codebase erodes the same way. Not in one dramatic moment, but in a hundred small decisions to
_not look_.

- The PR has a 1000-line function. **Well, the tests pass.**
- Gemini pasted the same ISO date parser into 8 files, and into the unit tests itself. **We'll DRY
  it out later.**
- Claude installed some helper package that hasn't been touched on GitHub in seven years. **Eh, it
  works.**
- The "unit tests" are mostly `MagicMock` objects asserting that `MagicMock` does what
  `MagicMock`does. green check, ship it.

None of these are catastrophic on their own. But the throughline is the same: nobody on the team
actually _understands_ what just got merged. And nobody has to, because if it breaks, you just paste
the error back into the chat and a new diff comes out the other side.

The codebase becomes a black box that only the model can see into. And here's where it gets
uncomfortable.

## If AI is the only thing that understands it, AI is the only thing that can change it

This is the part people don't say out loud.

The moment your codebase passes a certain threshold of "nobody here can read this anymore," you've
handed the keys to the model.

You haven't automated your work. You've outsourced your _comprehension_ of how the system should
behave.

## The bill is coming

Here's where the math gets unfun.

Right now, you're getting Sonnet-tier intelligence for what is, frankly, an absurd price. That's not
because tokens are cheap to produce. It's because the entire industry is in a capex arms race,
burning billions on compute and chips while pulling in a combined revenue projected at something
like $80–120M. Philipp Dubach's
[breakdown of the arms race](https://philippdubach.com/posts/ai-capex-arms-race-who-blinks-first/)
lays out the gap clearly.

That gap closes one of two ways: capacity catches up and prices fall further, or the bill comes due
and prices climb. Anyone betting their architecture entirely on the first outcome is making a pretty
bold call.

Now imagine you've built a system that _requires_ an LLM in the loop to be maintainable. Not as a
productivity boost, as a hard dependency. When per-token pricing doubles, or rate limits tighten, or
your preferred model gets deprecated and the replacement is 3x the cost, that isn't a line item you
can renegotiate. That's your engineering team's ability to ship.

You will have built a codebase that costs money to _read_.
