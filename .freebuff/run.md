# Preview run instructions

## Reproduce artifacts

- Use the worktree checkout, including `public/wb-logo.png`.
- If a future environment has a separate main checkout, copy any `.env.local` from the main checkout into this worktree; no environment file is currently required.
- Install dependencies with `npm ci` from the worktree root.

## Run the server

From the worktree root, start the development server with:

```powershell
npm.cmd run dev
```

Use the default Next.js port when it is free. If that port is occupied, pass an alternate port:

```powershell
npm.cmd run dev -- -p 3210
```
