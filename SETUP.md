# Setup Project Details

## Enviroment config

- [Install yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Install VSCode](https://code.visualstudio.com/Download)
- Install **ALL** the extensions recommended in `.vscode/extensions.json`
- **If the changes are not applied automatically** add the content of `.vscode/settings.json` in your personal settings.json
- Execute `yarn clone:core`

## Initial config

- [ ] Change the project name on `package.json`
- [ ] Change `title` from `src/web/components/Head`
- [ ] Change `content` of meta og:site_name from `src/web/components/HeadContent`
- [ ] Change `self` of Urls from `src/config/urls.ts`
- [ ] Change `toBe` and `description` of test of meta og:site_name from `src/web/tests/components/HeadContent.spec.tsx`
- [ ] Change `siteUrl` and `additionalSitemaps` from `sitemap-generator.js`
- [ ] Add project to [CodeFactor](https://www.codefactor.io/)
- [ ] Add project to [DeepScan](https://deepscan.io/dashboard/#view=team&tid=13883)
- [ ] Add project to [Coveralls](https://coveralls.io/welcome)
- [ ] Update the `title` and `badges` of `README.md`

## After the first test file be added to the project

- [ ] Remove "Test TypeScript Syntax" step from `.github/workflows/tests.yml`
- [ ] Remove script "temp:test-tsc" from `package.json`
- [ ] Uncomment steps "Run Tests" and "Colect Coverage" from `.github/workflows/tests.yml`
- [ ] Uncomment "coverageThreshold" from `jest.config.ts`

## After all other steps are completed

- [ ] Delete this file
