# codekata-template-typescript

This is the code kata template for TypeScript created by [Aula de Software Libre de la Universidad de Córdoba](https://www.uco.es/aulasoftwarelibre/)

You can use this repository as a template or open it directly by clicking here:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/aulasoftwarelibre/codekata-template-typescript)

Codespaces installs all dependencies automatically. If you prefer to install locally, follow these steps.

## Local installation

You need Node.js 24 or later. Enable `pnpm` if you don't have it yet:

    corepack enable

Then, in the project folder, run:

    pnpm install

After that you will be ready to code.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm test` | Runs the tests in watch mode |
| `pnpm test:ci` | Runs the tests once |
| `pnpm run check` | Checks format, lint rules and types without changing anything |
| `pnpm run fix` | Fixes format and lint issues automatically |
| `pnpm run all` | Runs `fix` and then the tests once |
| `pnpm run ci` | Runs `check` and then the tests once (what GitHub Actions does) |

## Editor

Install the recommended extensions (VS Code suggests them when you open the project). The [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) shows the test tree and lets you run and debug tests from the editor.

## Editor

Install the recommended extensions (VS Code suggests them when you open the project). The [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) shows the test tree and lets you run and debug tests from the editor.

## Conventions

- Code lives in `src/`. Each test sits next to the code it tests and is named `*.spec.ts`.
- Tests use `it(...)` from [Vitest](https://vitest.dev/).
- Functions are declared with `function`; arrow functions are for callbacks.
- Linting and formatting use [Ultracite](https://www.ultracite.ai/) with [Oxlint](https://oxc.rs/docs/guide/usage/linter) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter), including type checking. A `pre-commit` hook (Lefthook) runs `pnpm run fix` on staged files.
