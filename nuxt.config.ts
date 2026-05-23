// https://nuxt.com/docs/api/configuration/nuxt-config

// Modifie SITE_URL avec ton URL Vercel finale (ou un domaine perso) avant le
// premier déploiement public. Les balises OG / Twitter en dépendent pour
// résoudre l'image d'aperçu en URL absolue côté LinkedIn/X.
const SITE_URL = 'https://design-md-mu.vercel.app'
const SITE_TITLE = 'DESIGN.md, la même app, trois langages visuels'
const SITE_DESCRIPTION = "J'ai écrit 3 fichiers DESIGN.md. Claude Code a généré 3 versions de la même landing Nuxt. Linear, Brutalist, Notion, même prompt, même contenu, trois identités."
const SITE_OG_IMAGE = `${SITE_URL}/og.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vercel/analytics/nuxt'],
  css: ['~/assets/css/tokens.css'],
  app: {
    head: {
      title: SITE_TITLE,
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'description', content: SITE_DESCRIPTION },

        // Open Graph (LinkedIn, Facebook, Slack, Discord, etc.)
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:image', content: SITE_OG_IMAGE },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'fr_FR' },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: SITE_URL },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESCRIPTION },
        { name: 'twitter:image', content: SITE_OG_IMAGE },

        // Thème de l'UI navigateur (mobile chrome bar)
        { name: 'theme-color', content: '#08090a' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2'
            + '?family=IBM+Plex+Mono:wght@400;700'
            + '&family=JetBrains+Mono:wght@400;500'
            + '&family=Lora:ital,wght@0,500;0,600;1,500;1,600'
            + '&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
