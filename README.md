# Victor Falck-Næss — portfolio

Source for [victorfn.com](https://victorfn.com), a static portfolio built with Angular and TypeScript.

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

The check command runs linting, Angular component tests, strict template and TypeScript compilation, and a production build.

## Architecture

- `src/app/content` contains the portfolio's typed content and external links.
- `src/app/layout` contains site-wide layout components.
- `src/app/sections` contains one standalone Angular component per page section.
- `src/app/shared` contains reusable presentation components.
- `src/styles` contains the global design foundation; section styles are colocated with their components.

Every component uses `OnPush` change detection, and the only interactive local state—the ticker control—is represented by an Angular signal.

## Deployment

Pull requests run the full quality suite. Merges to `main` build the Angular application and deploy `dist/victor-portfolio/browser` through GitHub's official Pages actions. Generated build output is not committed.
