// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Global stylesheet — the entire <style> block from aidi-haven.html.
  css: ['~/assets/css/main.css'],

app: {
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Aidi Haven — Short-stay rentals in silicon valley',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // Standard SEO
      {
        name: 'description',
        content:
          'Professionally managed short‑stay rentals in the heart of Silicon Valley, San Jose, California.'
      },
      {
        name: 'keywords',
        content:
          'Short-stay rentals San Jose, Silicon Valley Airbnb, furnished rentals San Jose, professionally managed Airbnb, Aidi Haven, Aidi Ventures Group, Bay Area short-term rental, San Jose vacation rental'
      },

      // Open Graph (Facebook, LinkedIn, iMessage previews, etc.)
      { property: 'og:locale',          content: 'en_US' },
      { property: 'og:type',            content: 'website' },
      { property: 'og:title',           content: 'Aidi Haven' },
      {
        property: 'og:description',
        content:
          'Professionally managed short-stay rentals in San Jose, California — book directly on Airbnb.'
      },
      { property: 'og:url',             content: 'https://aidihaven.com/' },
      { property: 'og:site_name',       content: 'Aidi Haven' },
      { property: 'og:image',           content: 'https://aidihaven.com/og-image.png' },
      { property: 'og:image:width',     content: '1200' },
      { property: 'og:image:height',    content: '630' },
      { property: 'og:image:type',      content: 'image/png' },

      // Twitter / X cards
      { name: 'twitter:card',           content: 'summary_large_image' },
      { name: 'twitter:title',          content: 'Aidi Haven' },
      {
        name: 'twitter:description',
        content:
          'Professionally managed short-stay rentals in Silicon Valley — book directly on Airbnb.'
      },
      { name: 'twitter:image',          content: 'https://aidihaven.com/og-image.png' }
    ],
    link: [
      { rel: 'icon',             type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/favicon.svg' },
      { rel: 'canonical',        href: 'https://aidihaven.com/' },
      { rel: 'preconnect',       href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect',       href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Instrument+Sans:wght@400;500;600&display=swap'
      }
    ]
  }
}
})
