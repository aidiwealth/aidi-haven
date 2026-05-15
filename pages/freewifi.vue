<template>
  <div class="wifi-page">
    <SiteNav />

    <section class="wifi">
      <div class="wifi-inner">

        <!-- ─── INTRO ─────────────────────────────────────── -->
        <div class="wifi-head">
          <span class="eyebrow">
            <span class="dot" aria-hidden="true"></span>
            Complimentary&nbsp;Guest&nbsp;Wi&#8209;Fi
          </span>

          <h1 class="wifi-title">
            Free <em>Wi&#8209;Fi</em><br>
            for our guests.
          </h1>

          <p class="wifi-tag">
            Welcome to Aidi Haven. Share a few details below to unlock the network
            name and password for your stay.
          </p>
        </div>

        <!-- ─── CARD (form OR reveal) ─────────────────────── -->
        <div class="wifi-card">

          <!-- FORM STATE -->
          <form v-if="!revealed" class="wifi-form" @submit.prevent="handleSubmit" novalidate>
            <div class="wifi-field">
              <label for="wf-name" class="wifi-label">Full Name</label>
              <input
                id="wf-name"
                v-model.trim="form.name"
                type="text"
                class="wifi-input"
                placeholder="Jane Doe"
                autocomplete="name"
                required
              />
            </div>

            <div class="wifi-field">
              <label for="wf-email" class="wifi-label">Email</label>
              <input
                id="wf-email"
                v-model.trim="form.email"
                type="email"
                class="wifi-input"
                placeholder="jane@example.com"
                autocomplete="email"
                required
              />
            </div>

            <div class="wifi-field">
              <label for="wf-phone" class="wifi-label">Phone</label>
              <input
                id="wf-phone"
                v-model.trim="form.phone"
                type="tel"
                class="wifi-input"
                placeholder="+1 (555) 555-5555"
                autocomplete="tel"
                required
              />
            </div>

            <p v-if="error" class="wifi-error">{{ error }}</p>

            <button type="submit" class="btn btn-dark wifi-submit" :disabled="submitting">
              <svg v-if="!submitting" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12.55a11 11 0 0 1 14 0"/>
                <path d="M8.5 16a6 6 0 0 1 7 0"/>
                <line x1="12" y1="20" x2="12" y2="20"/>
                <path d="M2 8.82a15 15 0 0 1 20 0"/>
              </svg>
              <svg v-else class="wifi-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {{ submitting ? 'Connecting…' : 'Get Wi\u2011Fi Access' }}
            </button>

            <p class="wifi-fineprint">
              We use these details only to assist with your stay. No spam, ever.
            </p>
          </form>

          <!-- REVEAL STATE -->
          <div v-else class="wifi-reveal">
            <div class="wifi-reveal-head">
              <span class="eyebrow">
                <span class="dot" aria-hidden="true"></span>
                You&rsquo;re&nbsp;in
              </span>
              <h2 class="wifi-reveal-title">
                Enjoy your <em>stay</em>.
              </h2>
            </div>

            <div class="wifi-creds">
              <div class="wifi-cred-row">
                <span class="wifi-cred-label">Wi&#8209;Fi Name</span>
                <div class="wifi-cred-value-wrap">
                  <span class="wifi-cred-value">Aidi Haven - Private Wifi</span>
                  <button type="button" class="wifi-copy" @click="copy('Aidi Haven - Private Wifi', 'name')">
                    {{ copied === 'name' ? 'Copied' : 'Copy' }}
                  </button>
                </div>
              </div>

              <div class="wifi-cred-row">
                <span class="wifi-cred-label">Password</span>
                <div class="wifi-cred-value-wrap">
                  <span class="wifi-cred-value mono">MoreThanaStay#4581</span>
                  <button type="button" class="wifi-copy" @click="copy('MoreThanaStay#4581', 'pass')">
                    {{ copied === 'pass' ? 'Copied' : 'Copy' }}
                  </button>
                </div>
              </div>
            </div>

            <div class="wifi-actions">
              <a class="btn btn-dark" href="https://aidihaven.com" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Visit aidihaven.com
              </a>

              <a class="btn btn-outline" href="https://aidihaven.com/#properties" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book an Apartment
              </a>

              <a class="btn btn-outline" href="mailto:stay@aidihaven.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Support
              </a>

              <a class="btn btn-outline" href="tel:+14084221250">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call +1&nbsp;(408)&nbsp;422&#8209;1250
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// Page meta — keep this page out of nav crawling/sitemap surfaces while
// keeping it directly reachable via /freewifi.
useHead({
  title: 'Free Wi-Fi — Aidi Haven',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content:
        'Complimentary guest Wi-Fi access for Aidi Haven stays. Submit your details to receive the network name and password.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://aidihaven.com/freewifi' }
  ]
})

interface GuestForm {
  name:  string
  email: string
  phone: string
}

const form = reactive<GuestForm>({ name: '', email: '', phone: '' })
const revealed   = ref(false)
const error      = ref('')
const submitting = ref(false)
const copied     = ref<'name' | 'pass' | ''>('')

// Slack Incoming Webhook URL — set in nuxt.config.ts runtimeConfig.public.slackWebhookUrl
// (or via NUXT_PUBLIC_SLACK_WEBHOOK_URL env var). See README at the bottom of this file.
const runtimeConfig = useRuntimeConfig()

function isValidEmail (v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}
function isValidPhone (v: string) {
  // Accept 7+ digits, allowing spaces, dashes, parens, and a leading +.
  const digits = v.replace(/[^\d]/g, '')
  return digits.length >= 7
}

async function postToSlack () {
  const webhook = runtimeConfig.public.slackWebhookUrl as string | undefined
  if (!webhook) {
    // No webhook configured — silently skip so the page still works in dev
    // or if the env var is missing on the host.
    console.warn('[freewifi] Slack webhook URL not configured.')
    return
  }

  const ts = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  // Slack Block Kit payload — renders as a tidy card in the channel.
  const payload = {
    text: `New Wi-Fi sign-in: ${form.name} (${form.email})`,
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '📶  New Wi-Fi sign-in', emoji: true }
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name*\n${form.name}` },
          { type: 'mrkdwn', text: `*Email*\n${form.email}` },
          { type: 'mrkdwn', text: `*Phone*\n${form.phone}` },
          { type: 'mrkdwn', text: `*Time (PT)*\n${ts}` }
        ]
      },
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: 'Source: aidihaven.com/freewifi' }
        ]
      }
    ]
  }

  // Slack Incoming Webhooks accept text/plain to avoid a CORS preflight.
  await fetch(webhook, {
    method:  'POST',
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body:    JSON.stringify(payload)
  })
}

async function handleSubmit () {
  error.value = ''

  if (!form.name) {
    error.value = 'Please enter your full name.'
    return
  }
  if (!isValidEmail(form.email)) {
    error.value = 'Please enter a valid email address.'
    return
  }
  if (!isValidPhone(form.phone)) {
    error.value = 'Please enter a valid phone number.'
    return
  }

  submitting.value = true
  try {
    await postToSlack()
  } catch (e) {
    // Don't block the guest from getting Wi-Fi if Slack is down.
    console.error('[freewifi] Slack post failed:', e)
  } finally {
    submitting.value = false
    revealed.value   = true
  }
}

async function copy (text: string, which: 'name' | 'pass') {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = which
    setTimeout(() => {
      if (copied.value === which) copied.value = ''
    }, 1800)
  } catch {
    // Clipboard API unavailable — silently no-op; the value is on-screen.
  }
}
</script>

<style scoped>
/* ─── Page frame ─────────────────────────────────────────── */
.wifi-page{
  min-height:100vh;
  min-height:100dvh;
  display:flex;
  flex-direction:column;
}
.wifi{
  position:relative;
  z-index:2;
  width:100%;
  max-width:var(--max);
  margin:0 auto;
  padding:140px var(--gutter) 60px;
  flex:1 0 auto;
  display:flex;
  align-items:center;
}
.wifi-inner{
  width:100%;
  display:grid;
  grid-template-columns:repeat(12, 1fr);
  gap:48px clamp(20px,2.4vw,40px);
  align-items:start;
}

/* ─── Left — intro ──────────────────────────────────────── */
.wifi-head{
  grid-column:1 / span 5;
  display:flex; flex-direction:column;
  padding-top:8px;
}
.wifi-title{
  font-family:'Cormorant Garamond', serif;
  font-weight:300;
  font-size:clamp(2.8rem, 4.6vw, 5rem);
  line-height:1;
  letter-spacing:-.025em;
  color:var(--ink);
  margin-bottom:24px;
}
.wifi-title em{
  font-style:italic;
  color:var(--gold);
  font-weight:300;
}
.wifi-tag{
  font-size:1rem;
  line-height:1.65;
  color:var(--ink-soft);
  font-weight:400;
  max-width:420px;
}

/* ─── Right — card ──────────────────────────────────────── */
.wifi-card{
  grid-column:7 / span 6;
  background:var(--white);
  border:1px solid rgba(12,26,46,.08);
  border-radius:var(--r);
  padding:40px clamp(24px, 3vw, 40px);
  box-shadow:
    0 1px 2px rgba(12,26,46,.04),
    0 18px 44px -16px rgba(12,26,46,.10);
}

/* ─── Form ───────────────────────────────────────────────── */
.wifi-form{display:flex; flex-direction:column; gap:18px}

.wifi-field{display:flex; flex-direction:column; gap:8px}
.wifi-label{
  font-size:.66rem;
  font-weight:600;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:var(--ink-muted);
}
.wifi-input{
  font-family:inherit;
  font-size:.95rem;
  color:var(--ink);
  background:var(--cream);
  border:1px solid rgba(12,26,46,.08);
  border-radius:10px;
  padding:13px 16px;
  outline:none;
  transition:border-color .3s ease, background .3s ease, box-shadow .3s ease;
  width:100%;
}
.wifi-input::placeholder{color:var(--ink-muted)}
.wifi-input:focus{
  background:var(--white);
  border-color:var(--ink);
  box-shadow:0 0 0 3px rgba(12,26,46,.06);
}

.wifi-error{
  font-size:.85rem;
  color:#a8341c;
  margin-top:-4px;
}

.wifi-submit{
  align-self:flex-start;
  margin-top:6px;
}
.wifi-submit:disabled{
  opacity:.7;
  cursor:wait;
  pointer-events:none;
}
.wifi-spin{
  animation:wifi-spin 1s linear infinite;
}
@keyframes wifi-spin{
  to{transform:rotate(360deg)}
}

.wifi-fineprint{
  font-size:.78rem;
  color:var(--ink-muted);
  line-height:1.55;
  margin-top:4px;
}

/* ─── Reveal ─────────────────────────────────────────────── */
.wifi-reveal{
  display:flex; flex-direction:column; gap:28px;
  animation:fadeUp .8s cubic-bezier(.2,.7,.2,1) both;
}
.wifi-reveal-head{display:flex; flex-direction:column; gap:14px}
.wifi-reveal-title{
  font-family:'Cormorant Garamond', serif;
  font-weight:300;
  font-size:clamp(1.9rem, 2.8vw, 2.6rem);
  line-height:1.05;
  letter-spacing:-.02em;
  color:var(--ink);
}
.wifi-reveal-title em{font-style:italic; color:var(--gold); font-weight:300}

.wifi-creds{
  display:flex; flex-direction:column;
  border:1px solid rgba(12,26,46,.08);
  border-radius:12px;
  overflow:hidden;
  background:var(--cream);
}
.wifi-cred-row{
  display:flex; flex-direction:column; gap:8px;
  padding:18px 20px;
}
.wifi-cred-row + .wifi-cred-row{
  border-top:1px solid rgba(12,26,46,.08);
}
.wifi-cred-label{
  font-size:.64rem;
  font-weight:600;
  letter-spacing:.2em;
  text-transform:uppercase;
  color:var(--ink-muted);
}
.wifi-cred-value-wrap{
  display:flex; align-items:center; justify-content:space-between;
  gap:14px;
}
.wifi-cred-value{
  font-size:1.05rem;
  color:var(--ink);
  font-weight:500;
  letter-spacing:.005em;
  word-break:break-all;
}
.wifi-cred-value.mono{
  font-family: 'SFMono-Regular', Menlo, Consolas, monospace;
  letter-spacing:.01em;
}
.wifi-copy{
  flex-shrink:0;
  font-family:inherit;
  font-size:.7rem;
  font-weight:600;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--ink-soft);
  background:transparent;
  border:1px solid rgba(12,26,46,.18);
  padding:7px 12px;
  border-radius:999px;
  cursor:pointer;
  transition:all .3s ease;
}
.wifi-copy:hover{
  color:var(--ink);
  border-color:var(--ink);
}

/* ─── Action buttons ─────────────────────────────────────── */
.wifi-actions{
  display:flex; flex-wrap:wrap; gap:12px;
}
.btn-outline{
  background:transparent;
  color:var(--ink);
  border-color:rgba(12,26,46,.18);
}
.btn-outline:hover{
  background:var(--ink);
  color:var(--cream);
  border-color:var(--ink);
  transform:translateY(-2px);
}

/* ─── Animation ──────────────────────────────────────────── */
@keyframes fadeUp{
  from{opacity:0; transform:translateY(12px)}
  to  {opacity:1; transform:translateY(0)}
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px){
  .wifi{padding:120px var(--gutter) 40px}
  .wifi-head, .wifi-card{grid-column:1 / -1}
  .wifi-head{margin-bottom:8px}
  .wifi-tag{max-width:none}
}
</style>
