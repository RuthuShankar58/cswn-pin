#!/usr/bin/env bash
# Build the static site and publish it to the Purdue CS web space.
#
#   cswnindy.cs.purdue.edu  ->  /p/p24/sites/cswnindy   (editable by group `cswni`)
#
# Usage:
#   ./deploy.sh                 # build + rsync to the remote target below
#   ./deploy.sh --local /path   # build + copy into a locally-mounted path instead
#
# Requires: node 20+, npm, and (for the default path) ssh access to a host
# where /p/p24/sites/cswnindy is mounted.

set -euo pipefail

# ---- edit these two ---------------------------------------------------------
REMOTE_HOST="YOUR_LOGIN@data.cs.purdue.edu"
REMOTE_PATH="/p/p24/sites/cswnindy"
# --------------------------------------------------------------------------- #

cd "$(dirname "$0")"

echo "==> Building static export"
npm run build   # -> ./out  (output: 'export' in next.config.ts)

if [[ "${1:-}" == "--local" ]]; then
  DEST="${2:?pass a path after --local}"
  echo "==> Copying ./out -> $DEST"
  rsync -a --delete --exclude='.htaccess' out/ "$DEST"/
else
  echo "==> Uploading ./out -> $REMOTE_HOST:$REMOTE_PATH"
  # --delete keeps the target an exact mirror of ./out. Drop it on the first
  # run if anything else already lives in that directory.
  rsync -avz --delete --exclude='.htaccess' out/ "$REMOTE_HOST:$REMOTE_PATH"/
  echo "==> Fixing group + permissions"
  ssh "$REMOTE_HOST" "cd '$REMOTE_PATH' && chgrp -R cswni . && chmod -R g+rwX,o+rX . && find . -type d -exec chmod g+s {} +"
fi

echo "==> Done. https://cswnindy.cs.purdue.edu/"
