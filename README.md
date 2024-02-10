# Astro Minimal Setup

```sh
git clone https://github.com/ersankarimi/astro-minimal-setup.git
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ersankarimi/astro-minimal-setup/tree/main)
[![Open with CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/ersankarimi/astro-minimal-setup/tree/main)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![Example Image](https://example.com)

## 🚀 Project Structure

Inside of your Astro Minimal Setup Project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Seo.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

Astro continues to look for `.astro` or `.md` files in the `src/pages/` directory, with each page being exposed as a route based on its file name. Components, including Astro, React, Vue, Svelte, Preact, etc., can be placed in the `src/components/` directory. Any static assets, like images, can still be placed in the `public/` directory.

The new additions include:

- `Seo.astro` component in the `src/components/` directory, likely for managing SEO-related content.
- `globals.css` file in the `src/styles/` directory, presumably containing global styles for the application.
- Additional configuration files: `astro.config.mjs`, `package-lock.json`, `README.md`, and `tsconfig.json`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Lints source files                               |
| `npm run format`          | Formats source files                             |
| `npm run format:check`    | Checks format of source files                    |
| `npm run fix`             | Fixes linting issues                             |
