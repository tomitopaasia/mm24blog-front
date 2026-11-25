# mm24blog-front – haru `primevue_test`

Komponendiraamistik: **PrimeVue 4** (https://primevue.org), teema Aura

Paigaldus (Vuetify näite eeskujul, dokumentatsiooni Vite/Vue juhend):

```bash
bun add primevue @primeuix/themes
```

- `nuxt.config.ts` – `build.transpile: ['primevue']`
- `app/plugins/primevue.ts` – `vueApp.use(PrimeVue, { theme: { preset: Aura } })` ja `Menubar` komponendi registreerimine
- `app/app.vue` – menüü `Menubar` komponendiga (item-slotis `NuxtLink`), lingid kõigile lehtedele

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
