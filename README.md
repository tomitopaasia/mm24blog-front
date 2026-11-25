# mm24blog-front – haru `nuxtui_test`

Komponendiraamistik: **Nuxt UI v4** (https://ui.nuxt.com), põhineb Tailwind CSS-il ja Reka UI-l

Paigaldus (dokumentatsiooni Nuxt juhend, Vuetify näite eeskujul config + plugin):

```bash
bun add @nuxt/ui tailwindcss
```

- `nuxt.config.ts` – `modules: ['@nuxt/ui']`, `css: ['~/assets/css/main.css']`
- `app/assets/css/main.css` – `@import "tailwindcss"; @import "@nuxt/ui";`
- `app/plugins/nuxt-ui.ts` – blogi teemavärvid (`updateAppConfig` → primary emerald, neutral slate)
- `app/app.vue` – `UApp` + menüü `UNavigationMenu` komponendiga, lingid kõigile lehtedele

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
