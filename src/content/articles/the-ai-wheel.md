---
title: The AI Wheel
description: When AI is the only thing that understands your code, AI is the only thing that can change it
tags: ['code', 'AI']
readTime: 5
timestamp: 2026-04-6
filename: The AI Wheel
published: false
isFeatured: true
---

# The AI Wheel

There's a phrase I keep hearing in standups and Slack threads, sometimes out loud and sometimes implied: _"it doesn't really matter if we understand it, AI can fix it later."_

It sounds reasonable. It is, in fact, how a lot of codebases are quietly falling apart right now.

## The shortcut that eats your codebase

Every codebase erodes the same way. Not in one dramatic moment, but in a hundred small decisions to _not look_.

- The PR has a 1000-line function — sure, looks fine, the tests pass.
- Gemini pasted the same ISO date parser into three files — whatever, we'll dedupe it later.
- Claude installed some helper package that hasn't been touched on GitHub in seven years — eh, it works.
- The "unit tests" are mostly `MagicMock` objects asserting that `MagicMock` does what `MagicMock` does — green check, ship it.

None of these are catastrophic on their own. But the throughline is the same: nobody on the team actually _understands_ what just got merged. And nobody has to, because if it breaks, you just paste the error back into the chat and a new diff comes out the other side.

The codebase becomes a black box that only the model can see into. And here's where it gets uncomfortable.

## If AI is the only thing that understands it, AI is the only thing that can change it

This is the part people don't say out loud.

The moment your codebase passes a certain threshold of "nobody here can read this anymore," you've handed the keys to the model. Not in some sci-fi way — in a very boring, very practical way:

- You can't review changes meaningfully, because you can't tell good output from bad.
- You can't onboard new engineers, because there's no mental model to hand them.
- You can't migrate frameworks, because you don't know what depends on what.
- You can't even debug confidently. You can only describe symptoms and hope the model patches the right thing.

You haven't automated your work. You've outsourced your _comprehension_. And comprehension is the thing the job was actually made of.

## The bill is coming

Here's where the math gets unfun.

Right now, you're getting Sonnet-tier intelligence for what is, frankly, an absurd price. That's not because tokens are cheap to produce. It's because the entire industry is in a capex arms race, burning billions on compute and chips while pulling in a combined revenue projected at something like $80–120M. Philipp Dubach's [breakdown of the arms race](https://philippdubach.com/posts/ai-capex-arms-race-who-blinks-first/) lays out the gap clearly — the spend and the revenue are not in the same universe.

That gap closes one of two ways: capacity catches up and prices fall further, or the bill comes due and prices climb. Anyone betting their architecture entirely on the first outcome is making a pretty bold call.

Now imagine you've built a system that _requires_ an LLM in the loop to be maintainable. Not as a productivity boost — as a hard dependency. When per-token pricing doubles, or rate limits tighten, or your preferred model gets deprecated and the replacement is 3x the cost, that isn't a line item you can renegotiate. That's your engineering team's ability to ship.

You will have built a codebase that costs money to _read_.

## What "using AI well" actually looks like

The answer isn't to stop using AI. It's to stop using it as a substitute for understanding:

- **Read what you accept.** If you wouldn't be able to defend the diff in review without the model present, don't merge it.
- **Refuse code you can't explain.** Not "refuse to use AI" — refuse to merge code where, if asked, you couldn't explain _why_ it's structured that way.
- **Push back on over-engineering.** Models love to layer abstractions and add utility functions for single-use cases. That's noise, and it's noise you'll pay to maintain.
- **Keep the load-bearing parts in your head.** The core domain logic, the data model, the gnarly parts of the auth flow — those should live in human brains, not just in context windows.

AI is a phenomenal accelerator. But an accelerator with no driver isn't a car, it's a hazard. And a car you can only afford to drive while the gas is subsidized isn't really yours.

Keep your hands on the wheel.
