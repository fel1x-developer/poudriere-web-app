# Poudriere Monitoring App

Poudriere is Port/Package build and test system for FreeBSD.
Poudriere Monitoring App provides useful information for Poudriere,
including past builds, build status, and jail status.

This project follows BSD-2-clause license (or "FreeBSD License").
The full license text can be found in [`LICENSE.md`](/LICENSE.md) file.

## Installation

We use [Bun](https://bun.sh) due to its fast build time and install time.
However, using other package managers such as [npm](https://docs.npmjs.com/cli/v11),
[yarn](https://yarnpkg.com), and [pnpm](https://pnpm.io) should also work.
[Deno](https://deno.com) is not tested yet, and although it might work, we
don't have any plan to officially support it.

To install:
```bash
$ bun install
# or
$ npm install
# or
$ yarn install
# or
$ pnpm install
```

## Developing

This project uses following technologies:
 - [SvelteKit](https://svelte.dev) for routing, building, etc.
 - [Svelte](https://svelte.dev) for components
 - [Tailwind CSS](https://tailwindcss.com) for CSS styling
 - [daisyUI](https://daisyui.com) for user interface
 - [TypeScript](https://www.typescriptlang.org) for type-safe programming
 - [Storybook](https://storybook.js.org) for UI component preview
 - [Vitest](https://vitest.dev) and [Playwright](https://playwright.dev) for testing
 - [EsLint](https://eslint.org) and [Prettier](https://prettier.io) for linting and formatting

Currently, the project is a single-page application (SPA), we are
considering switching to server-side rendering (SSR).

To run a development server:
```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.