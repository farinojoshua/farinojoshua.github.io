# farino.me

Personal site, built with Next.js as a static export. GitHub Pages serves the
`gh-pages` branch, which holds only the built files; `npm run deploy` rebuilds
and replaces it.

All text lives in `content.ts`. Add entries to `projects` or `experience` and the
matching section appears; an empty list stays hidden.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the static site to out/
npm run deploy  # build and publish to farino.me
```
