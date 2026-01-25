#!/usr/bin/env bash
set -euo pipefail

# Cross-platform note: on Windows, use:
#   node scripts/build-archive.mjs
# or:
#   npm run build-archive

node "$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/scripts/build-archive.mjs"
