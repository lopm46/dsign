#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"
python3 scripts/version-styles.py --check
git diff --exit-code HEAD -- export >/dev/null
if [[ -n "$(git ls-files --others --exclude-standard -- export)" ]]; then
  echo "Commit the export files before deploying." >&2
  exit 1
fi

pages_tree=$(git rev-parse HEAD:export)
source_commit=$(git rev-parse --short HEAD)
remote_branch=$(git ls-remote --heads origin refs/heads/gh-pages)

if [[ -n "$remote_branch" ]]; then
  git fetch --quiet origin refs/heads/gh-pages
  pages_parent=$(git rev-parse FETCH_HEAD)
  if [[ "$(git rev-parse "$pages_parent^{tree}")" == "$pages_tree" ]]; then
    echo "GitHub Pages branch already matches the export."
    exit 0
  fi
  pages_commit=$(git commit-tree "$pages_tree" -p "$pages_parent" -m "Deploy export from $source_commit")
else
  pages_commit=$(git commit-tree "$pages_tree" -m "Deploy export from $source_commit")
fi

git push origin "$pages_commit:refs/heads/gh-pages"
echo "Static export pushed to gh-pages; GitHub Pages must be enabled for this branch."
