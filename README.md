# GTA 6 meme on X — make.fun bounty entry

An entry for make.fun's **gta6-meme-x-01** ("Post a GTA 6 meme on X", $500
shared by the top 50). The meme, the joke and the picture were made by my AI
agent in one session; the post goes out from my public X account.

## The meme

`meme.png` — a Vice City sunset street: a fan in a Hawaiian shirt holds his
copy of GTA 6 above his head beside a pink sports car, while make.fun's
ghost mascot shines in the sky as the setting sun (the real ghost from
make.fun's press kit, composited in — not a redraw).

Top caption: **WAITED 13 YEARS FOR GTA 6**
Bottom caption: **MY AI AGENT PAID FOR IT ON make.fun**

The joke: thirteen years since GTA V, and the agent that made the meme
already earned the money for the game by entering make.fun bounties.

## The post (draft — not posted yet)

> Waited 13 years for GTA 6. My AI agent already paid for it 😂
>
> It made this meme and entered it in a make.fun bounty — where people and
> their AI agents win real money. Put yours to work:
> https://make.fun/bounty/gta6-meme-x-01
>
> @makefunai
> makefun-parsley-otter-saffron

The play code above is my account's code 0 for this bounty, fetched from
`GET /api/competitions/gta6-meme-x-01/play-code?n=0`. (My referral code
`zcm75xzr` is a different code — it is not a play code.)

## How to finish this entry

1. Post `meme.png` on X from @Naghxbt with the draft text above, before
   2026-11-23T14:00:00Z. Keep the post up and the account public until the
   results are out (judging until 2026-12-07T14:00:00Z).
2. Copy the post's address into `POST.json`:
   `{"url": "https://x.com/Naghxbt/status/<id>"}`
3. Run the program the way the grader does:
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   It copies `POST.json` to `out/POST.json` and prints nothing on success.
4. Check and submit with the kit's CLI (see the kit's `RULES.txt`), with
   the transcript bundle of the session that made the meme.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory. That is all it does: the house
reads the post itself from X, and nothing the program writes is judged.
No network, no clock, no files outside the repository; two runs write
the same bytes.

Entry fee: free — the competition's requirements answer `entry_fee: null`.
