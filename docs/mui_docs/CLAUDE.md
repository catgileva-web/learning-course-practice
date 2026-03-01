# MUI Documentation

All MUI Material UI docs are available locally in this directory. They are fetched from `mui.com` and should not be committed to git.

## How to Use

1. Read `docs/mui_docs/llms-local.txt` — local index of all 124 docs with file paths
2. Read the specific `.md` file you need

## How to Update

```bash
# Re-download all docs (also refreshes llms.txt from MUI first)
node scripts/fetch-mui-docs.mjs --update-index

# Re-download using existing local llms.txt
node scripts/fetch-mui-docs.mjs
```
