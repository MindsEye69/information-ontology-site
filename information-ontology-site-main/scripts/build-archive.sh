#!/usr/bin/env bash
set -euo pipefail

# Build a static archive snapshot from /archive-src and copy it into /site/public/archive
# Requirements: Node.js + npm installed locally.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ARCHIVE_SRC="$ROOT_DIR/archive-src"
TARGET_DIR="$ROOT_DIR/site/public/archive"

echo "==> Building archive snapshot from: $ARCHIVE_SRC"
echo "==> Target output directory:        $TARGET_DIR"

if [ ! -d "$ARCHIVE_SRC" ]; then
  echo "ERROR: archive-src not found at $ARCHIVE_SRC"
  exit 1
fi

pushd "$ARCHIVE_SRC" >/dev/null

# Install deps (choose one)
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# Build with Next export output (writes to ./out when output:'export' is set)
npm run build

# Clean target (but keep folder)
rm -rf "$TARGET_DIR"/*
mkdir -p "$TARGET_DIR"

# Copy export output
cp -R ./out/* "$TARGET_DIR"/

popd >/dev/null

echo "==> Done. Archive is now served at /archive on the main site deployment."
