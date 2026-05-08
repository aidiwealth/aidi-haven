# Aidi Haven — Nuxt 3

The short-stay rental site for [Aidi Haven LLC](https://aidihaven.com),
converted from a single static HTML file into a Nuxt 3 project.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run generate     # static site → ./.output/public
# or
npm run build        # SSR/Node output → ./.output
```

## Structure

```
.
├── nuxt.config.ts                  Site head, fonts, favicon, global CSS
├── app.vue                         Root: just <NuxtPage />
├── pages/
│   └── index.vue                   Composes the five sections
├── components/                     Auto-imported by Nuxt
│   ├── SiteNav.vue                 Fixed top nav + brand mark
│   ├── HeroSection.vue             Title, stats, autoplay video card
│   ├── PropertiesSection.vue       4 listing cards (data-driven via v-for)
│   ├── ContactStrip.vue            Email / phone / parent link
│   └── SiteFooter.vue              Giant wordmark + disclaimer
├── assets/css/
│   └── main.css                    Design tokens + all original styles
├── plugins/
│   └── intercom.client.ts          Intercom messenger (client-only)
└── public/
    └── favicon.svg                 Decoded from the original data: URI
```

## Adding a property

Edit the `properties` array in
[`components/PropertiesSection.vue`](./components/PropertiesSection.vue).
Each entry needs: `id`, `name`, `href` (Airbnb listing), `badge`, `rating`,
`reviewCount`, `meta`, `metaSub`, and three image URLs.
