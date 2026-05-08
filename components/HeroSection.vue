<template>
<section class="hero">

  <div class="hero-text">
    <h1 class="hero-title">
      Cozy stay in <br><em>silicon</em>
      valley.
    </h1>

    <p class="hero-tag">
      Explore our collection of furnished homes and make yourself at home—in the heart of silicon valley.
    </p>

    <div class="hero-actions">
      <a class="btn btn-dark" href="#properties">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        View properties
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-num"><em>4</em>—Active</span>
        <span class="stat-label">Properties</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">★ <em>4.9</em></span>
        <span class="stat-label">Avg. Guest Rating</span>
      </div>
    </div>
  </div>

  <div class="hero-visual">
    <div class="video-card">
      <video autoplay muted loop playsinline preload="auto">
        <source src="https://pub-f138f42d66b748108ebf7432c7314665.r2.dev/aidihaven%20(1).mp4" type="video/mp4">
      </video>
      <div class="video-tint" aria-hidden="true"></div>
      <div class="video-shade" aria-hidden="true"></div>

      <div class="video-tag">
        <span class="dot" aria-hidden="true"></span>
        Silicon&nbsp;Valley, CA
      </div>

      <div class="video-caption">
        <p class="video-caption-text">
          Professionally managed short&#8209;stay rentals in the heart of Silicon Valley.
        </p>
        <a class="video-portfolio-link" href="https://www.airbnb.com/users/profile/1469588860260491670" target="_blank" rel="noopener">
          Airbnb
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6">
            <line x1="3" y1="13" x2="13" y2="3"/>
            <polyline points="6 3 13 3 13 10"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
// Hero — left column has the title, tagline, "View properties" button,
// and the two stats; right column is an autoplay/loop/muted video card.
// Both columns are static, so no reactive state is needed.
</script>
