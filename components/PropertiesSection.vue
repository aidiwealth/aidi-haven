<template>
  <section class="products" id="properties">
    <div class="products-head">
      <div class="products-head-left">
        <span class="products-eyebrow">
          <span class="dot" aria-hidden="true"></span>
          Active Portfolio
        </span>
        <h2 class="products-title">
          Four homes.<br>
          <em>Same</em> Experience.
        </h2>
      </div>
      <div class="products-head-right">
        <p class="products-lede">
          Each property is owned and operated by Aidi Haven LLC and professionally managed for short-stay guests. Click any listing below to book directly on Airbnb.
        </p>
      </div>
    </div>

    <div class="properties-grid">
      <a
        v-for="p in properties"
        :key="p.id"
        class="property-card"
        :href="p.href"
        target="_blank"
        rel="noopener"
      >
        <div class="property-gallery">
          <div
            class="property-img-main"
            :style="{ backgroundImage: `url('${p.images.main}')` }"
          ></div>
          <div class="property-img-side">
            <div
              v-for="(img, i) in p.images.side"
              :key="i"
              class="property-img-sm"
              :style="{ backgroundImage: `url('${img}')` }"
            ></div>
          </div>
        </div>
        <div class="property-body">
          <div class="property-top">
            <span class="property-badge">{{ p.badge }}</span>
            <span class="property-rating">
              ★ {{ p.rating }}
              <span class="rev-count">({{ p.reviewCount }})</span>
            </span>
          </div>
          <h3 class="property-name" v-html="p.name"></h3>
          <p class="property-meta">{{ p.meta }}</p>
          <p class="property-meta-sub">{{ p.metaSub }}</p>
          <div class="property-foot">
            <span class="property-foot-label">Book on Airbnb</span>
            <span class="property-cta">
              View listing
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6">
                <line x1="3" y1="13" x2="13" y2="3"/>
                <polyline points="6 3 13 3 13 10"/>
              </svg>
            </span>
          </div>
        </div>
      </a>
    </div>

    <p class="properties-note">
      All properties are owned and managed by Aidi Haven LLC, a California-licensed property rental management business operating in San Jose, California. Bookings are processed directly through Airbnb. Investment products related to these properties are offered separately through
      <a
        href="https://joinaidi.com/products/real-estate"
        target="_blank"
        rel="noopener"
        style="color: var(--ink-soft); text-decoration: underline;"
      >joinaidi.com/products/real-estate</a>.
    </p>
  </section>
</template>

<script setup lang="ts">
// The four active short-stay properties from aidi-haven.html, in source
// order. Adding/removing a listing is data-only \u2014 just edit this array.
//
// `name` is rendered with v-html so the original &mdash; entities survive.
interface Property {
  id: string
  name: string         // accepts HTML entities like &mdash;
  href: string         // direct Airbnb listing URL
  badge: string
  rating: string
  reviewCount: number
  meta: string
  metaSub: string
  images: {
    main: string
    side: [string, string]
  }
}

const CDN = 'https://pub-f138f42d66b748108ebf7432c7314665.r2.dev'

const properties: Property[] = [
  {
    id: 'modern-stylish-home',
    name: 'Modern Stylish Home',
    href: 'https://www.airbnb.com/rooms/1418768143163222496?guests=1&adults=1&s=67&unique_share_id=41842e8b-366a-419e-80cc-07e622d21b07',
    badge: 'Superhost',
    rating: '4.85',
    reviewCount: 13,
    meta: 'Entire Rental Unit \u00b7 San Jose, California',
    metaSub: '1 Bedroom \u00b7 1 Queen Bed \u00b7 1 Bath \u00b7 Up to 3 guests',
    images: {
      main: `${CDN}/873bf710-2bdb-47e9-97a8-0e7cc4b142b9.avif?im_w=720`,
      side: [
        `${CDN}/f8936385-f0c1-4359-92b9-01681008e39c.avif?im_w=720`,
        `${CDN}/91ab4dc4-c513-4c14-a31b-30b00b8458a9.avif?im_w=720`
      ]
    }
  },
  {
    id: 'private-room-1-cozy',
    name: 'Private Room 1 &mdash; Cozy Stay',
    href: 'https://www.airbnb.com/rooms/1420822398386139572?guests=1&adults=1&s=67&unique_share_id=31337698-6e7f-4151-8f9e-63ec53511e52',
    badge: 'Guest Favorite',
    rating: '4.9',
    reviewCount: 10,
    meta: 'Private Room \u00b7 San Jose, California',
    metaSub: '1 Queen Bed \u00b7 Shared Bath \u00b7 Single occupancy',
    images: {
      main: `${CDN}/94a99706-bdcf-48a2-94b9-0d5590b1b55c.avif?im_w=720`,
      side: [
        `${CDN}/3e00df88-3cc2-4d66-8d79-1b598835779a.avif?im_w=720`,
        `${CDN}/5aec3027-7c95-4f54-b307-d4a8aad0959d.avif?im_w=720`
      ]
    }
  },
  {
    id: 'private-room-elegant',
    name: 'Private Room &mdash; Elegant Stay',
    href: 'https://www.airbnb.com/rooms/1435197325380944725?guests=1&adults=1&s=67&unique_share_id=c8fd8753-0fd4-4a1a-bcb1-c0ebaa5b1004',
    badge: 'Superhost',
    rating: '4.83',
    reviewCount: 6,
    meta: 'Private Room \u00b7 San Jose, California',
    metaSub: '1 Queen Bed \u00b7 Shared Bath \u00b7 Single occupancy',
    images: {
      main: `${CDN}/21d22495-9c19-4cfa-aa18-327be40c558f.avif?im_w=720`,
      side: [
        `${CDN}/ff80b87e-4dfd-47ae-8879-aabd7b086456.avif?im_w=720`,
        `${CDN}/19b3cd79-3627-4f61-b962-cfee600f88de.avif?im_w=720`
      ]
    }
  },
  {
    id: 'private-room-2-modern',
    name: 'Private Room 2 &mdash; Modern Stay',
    href: 'https://www.airbnb.com/rooms/1424119770106341445?guests=1&adults=1&s=67&unique_share_id=069237f8-5016-49a7-93a1-6610550cd038',
    badge: 'Superhost',
    rating: '4.9',
    reviewCount: 10,
    meta: 'Private Room \u00b7 San Jose, California',
    metaSub: '1 Queen Bed \u00b7 Shared Bath \u00b7 Single occupancy',
    images: {
      main: `${CDN}/9c9f6d96-d7a9-4d44-b200-f343806401f9.avif?im_w=720`,
      side: [
        `${CDN}/044f95c0-ebd0-47b5-bc9f-5591fed2e0f8.avif?im_w=720`,
        `${CDN}/04fe3407-8d40-405b-9393-df3bbab200d4.avif?im_w=720`
      ]
    }
  }
]
</script>
