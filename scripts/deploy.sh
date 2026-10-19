#!/usr/bin/env bash
# Build the static site and publish out/ to the gh-pages branch,
# which GitHub Pages serves at farino.me.
set -euo pipefail
cd "$(dirname "$0")/.."

remote=$(git remote get-url origin)
rev=$(git rev-parse --short HEAD)

npm run build
# Without this, Pages runs Jekyll and drops the _next/ folder.
touch out/.nojekyll

cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $rev"
git push -q -f "$remote" gh-pages
rm -rf .git
echo "Deployed $rev to gh-pages"
