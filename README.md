# Victor Falck-Næss — portfolio

Source for [victorfn.com](https://victorfn.com), a static portfolio built with React, TypeScript, and Vite.

## Local development

This project requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run check
```

The check command runs linting, component tests, strict TypeScript compilation, and a production build.

## Architecture

- `src/content` contains the portfolio's typed content and external links.
- `src/components/layout` contains site-wide layout components.
- `src/components/sections` contains one component per page section.
- `src/components/shared` contains reusable presentation primitives.
- `src/styles` contains the global design foundation; section styles are colocated with their components.

## Deployment

Pull requests run the full quality suite. Merges to `main` build `dist` and deploy it through GitHub's official Pages actions. Generated build output is not committed.
