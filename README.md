# mm24blog-front – haru `elementplus_test`

Komponendiraamistik: **Element Plus** (https://element-plus.org)

Paigaldus (Vuetify näite eeskujul, dokumentatsiooni "Full import" + SSR juhend):

```bash
bun add element-plus
```

- `nuxt.config.ts` – `build.transpile: ['element-plus']`
- `app/plugins/element-plus.ts` – laeb CSS-i, registreerib Element Plusi (`vueApp.use(ElementPlus, { locale: et })`) ja annab SSR-i jaoks `ID_INJECTION_KEY` / `ZINDEX_INJECTION_KEY`
- `app/app.vue` – menüü `ElMenu` + `ElMenuItem` komponentidega, lingid kõigile lehtedele

Käivitamine: `bun install && bun run dev`

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
