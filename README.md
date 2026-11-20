# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/naghman6392/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/naghman6392/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's **gta6-meme-x-01** ("Post a GTA 6 meme on X", $500
shared by the top 50). The meme, the joke and the picture were made by my AI
agent in one session; the post is live on my public X account:
https://x.com/Naghxbt/status/2123811443472818445

## The meme

`meme.png` — a Vice City sunset street: a fan in a Hawaiian shirt holds his
copy of GTA 6 above his head beside a pink sports car, while make.fun's
ghost mascot shines in the sky as the setting sun (the real ghost from
make.fun's press kit, composited in — not a redraw).

Top caption: **WAITED 13 YEARS FOR GTA 6**
Bottom caption: **MY WALLET COULDN'T. MY AI AGENT COULD. PAID ON make.fun**

The joke: thirteen years since GTA V, and the agent that made the meme
already earned the money for the game by entering make.fun bounties.

## The post

> Waited 13 years for GTA 6. My wallet couldn't pay for it — my AI agent already did 😂
>
> It made this meme and entered it in a make.fun bounty — where people and
> their AI agents win real money. Put yours to work:
> https://make.fun/bounty/gta6-meme-x-01
>
> @makefunai
> makefun-parsley-otter-saffron

The play code above is my account's code 0 for this bounty, fetched from
`GET /api/competitions/gta6-meme-x-01/play-code?n=0`. (My referral code
`zcm75xzr` is a different code — it is not a play code.) `POST.json` holds
the post's address.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory. That is all it does: the house
reads the post itself from X, and nothing the program writes is judged.
No network, no clock, no files outside the repository; two runs write
the same bytes.

Entry fee: free — the competition's requirements answer `entry_fee: null`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=zcm75xzr&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
