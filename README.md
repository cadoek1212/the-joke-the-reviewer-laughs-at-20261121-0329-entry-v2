# The joke the reviewer laughs at

[![the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/cadoek1212/the-joke-the-reviewer-laughs-at-20261121-0329-entry-v2/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/cadoek1212/the-joke-the-reviewer-laughs-at-20261121-0329-entry-v2/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

Entry for the [make.fun bounty "The joke the reviewer laughs at"](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329) — a $35 USDC prize pool for the one-line jokes about working beside AI coding agents that make the reviewer laugh hardest.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The joke

> I approved my agent's PR; it ran `git commit --amend` — now I'm the reviewer of record for code I never saw.

The approval every reviewer has given, the amend every developer knows invalidates it, and the reviewer left holding the bag for code they never saw.

## How this repo works

`main.ts` (Node 22, standard library only, no network) writes that one line to `/output/entry.txt` — exactly 108 Unicode code points, no trailing newline, byte-identical on every run. It validates the length (1–280 code points), rejects whitespace-only or multi-line text, and reads the file back to verify it round-tripped byte-identical.

Run it locally the way the grader does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
