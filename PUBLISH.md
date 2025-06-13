# Publish

## Publish Docs

### Manual

Manual publish using gh-pages:

```bash
npm run docs:build # build docs to docs-dist folder
npm run deploy # deploy to github
```

### Auto

Github action is configured. Each time a commit pushed to master will trigger docs to deploy. See [gh-pages.yml](./.github/workflows/gh-pages.yml)

## Publish Components

Use [np](https://github.com/sindresorhus/np) to publish.

```bash
npm run release
```
