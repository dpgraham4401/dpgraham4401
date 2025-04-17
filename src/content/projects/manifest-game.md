---
title: The Manifest Game
description: An interactive decision tree to help users fill out the electronic hazardous waste manifest.
tags: [ "TypeScript", "React" ]
githubUrl: https://github.com/usepa/the-manifest-game
timestamp: 2024-09-08T00:00:00+00:00
featured: false
filename: manifest-game
published: true
---

## The Details

The Manifest Game is an interactive decision tree to help users fill out the electronic hazardous
waste manifest.
It is built using [TypeScript](https://www.typescriptlang.org/)/[React](https://react.dev/).
The game presents the user with a direct acyclic graph (DAG) of nodes,
boxes with a question (or answer if it is a leaf node).
As the user answers each question, the game traverses the graph and guides the user to the next
question until the user reaches a leaf node, which contains additional information the user may find
helpful.

## The Features

- Global state management
- Direct acyclic graph (DAG) data structure
- accessible
- Type-safe
