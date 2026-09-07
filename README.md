# WB Advies & Finance

Next.js website for WB Advies & Finance.

## Local

```bash
npm install
npm run dev
```

## Build (static for Plesk)

```bash
npm run build
```

Output goes to `out/`.

## Deploy on Plesk (webnestiq)

1. Connect Git to this repo on the domain `wbadvies-finance.webnestiq.nl`
2. Pull/deploy so project files land under `httpdocs`
3. Set **Document root** to `httpdocs/out` (Hosting Settings)
4. Make sure the default Plesk `index.html` in the domain root is not used; the site lives in `out/`

Or upload the contents of `out/` directly into `httpdocs` via File Manager.
