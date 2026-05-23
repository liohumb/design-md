<script setup lang="ts">
import DesignSwitcher, { type PresetKey } from '~/components/DesignSwitcher.vue'

const preset = ref<PresetKey>('linear')

/**
 * Propage le preset actif sur <html> pour que body/main/composants héritent
 */
useHead(() => ({
  htmlAttrs: { 'data-preset': preset.value },
}))

/**
 * Contenu démo, identique pour chaque preset, pour que les différences visuelles viennent de la génération, pas de la copy.
 */
const hero = {
  eyebrow: 'NOUVEAU',
  title: 'Livre plus vite avec un design system que ton IA comprend.',
  subtitle: 'Écris un DESIGN.md une fois. Laisse Claude Code garder chaque composant dans la charte.',
  primaryCta: { label: 'Voir le code', href: 'https://github.com/liohumb/design-md' },
}

const features = {
  eyebrow: 'POURQUOI DESIGN.MD',
  title: 'Une seule source de vérité, pour les humains et pour les agents.',
  items: [
    { icon: 'palette', title: 'Des tokens, pas des vibes', description: 'Couleurs, typo, espacements, tout est défini, tout est référencé par son nom.' },
    { icon: 'wand', title: 'Une génération cohérente', description: "Les agents arrêtent d'inventer des hex au hasard. Les composants ont l'air d'un système." },
    { icon: 'git-branch', title: 'Versionné dans le repo', description: 'Ton langage visuel vit dans le code, revu en PR comme n\'importe quel autre contrat.' },
  ],
}

const testimonial = {
  quote: "J'écris un seul fichier markdown et Claude arrête de me chercher des poux sur les espacements. La codebase ressemble enfin à un seul produit.",
  author: {
    name: 'Lionel Humbert',
    role: 'Développeur Front-End 🤘',
    avatar: '/me.png',
  },
}
</script>

<template>
  <main :data-preset="preset">
    <DesignSwitcher v-model="preset" />

    <template v-if="preset === 'linear'">
      <LinearHero v-bind="hero" />
      <LinearFeatures v-bind="features" />
      <LinearTestimonial v-bind="testimonial" />
      <LinearFooter />
    </template>

    <template v-else-if="preset === 'brutalist'">
      <BrutalistHero v-bind="hero" />
      <BrutalistFeatures v-bind="features" />
      <BrutalistTestimonial v-bind="testimonial" />
      <BrutalistFooter />
    </template>

    <template v-else-if="preset === 'notion'">
      <NotionHero v-bind="hero" />
      <NotionFeatures v-bind="features" />
      <NotionTestimonial v-bind="testimonial" />
      <NotionFooter />
    </template>
  </main>
</template>
