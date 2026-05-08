// Intercom messenger — mirrors the inline script at the end of
// aidi-haven.html. The .client.ts suffix means Nuxt only runs it in the
// browser, which is what we want since the snippet touches window/document.
export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  ;(window as any).intercomSettings = {
    api_base: 'https://api-iam.intercom.io',
    app_id: 'vt8ulx74'
  }

  ;(function () {
    const w: any = window
    const ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', w.intercomSettings)
    } else {
      const d = document
      const i: any = function () { i.c(arguments) }
      i.q = []
      i.c = function (args: any) { i.q.push(args) }
      w.Intercom = i
      const l = function () {
        const s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = 'https://widget.intercom.io/widget/vt8ulx74'
        const x = d.getElementsByTagName('script')[0]
        x.parentNode!.insertBefore(s, x)
      }
      if (document.readyState === 'complete') {
        l()
      } else {
        window.addEventListener('load', l, false)
      }
    }
  })()
})
