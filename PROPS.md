# PROPS.md

> Interfaces de composants figées. **Chaque preset (linear, brutalist, notion)
> doit implémenter ces signatures de props à l'identique** pour que le `<DesignSwitcher>`
> puisse swapper les composants sans casser. Le style et la structure internes sont libres ;
> le contrat ne l'est pas.

Tous les composants vivent dans `app/components/<preset>/<Nom>.vue` et sont
auto-importés par Nuxt sous la forme `<PresetNom>` (ex : `<LinearHero>`, `<BrutalistHero>`).

---

## `<XxxHero>`

```ts
defineProps<{
  eyebrow: string        // petit label au-dessus du titre, ex : "NOUVEAU"
  title: string          // titre principal
  subtitle: string       // texte d'appui, 1-2 lignes
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}>()
```

## `<XxxFeatures>`

```ts
defineProps<{
  eyebrow: string
  title: string
  items: Array<{
    icon: string          // nom d'icône lucide, ex : "zap"
    title: string
    description: string
  }>
}>()
```

On attend exactement 3 items dans la démo.

## `<XxxTestimonial>`

```ts
defineProps<{
  quote: string
  author: {
    name: string
    role: string         // peut contenir un emoji, ex : "Développeur Front-End 🤘"
    avatar: string       // chemin servi par /public, ex : "/me.png"
  }
}>()
```

## `<XxxFooter>`

```ts
// Aucune prop. Le footer ne contient qu'un bandeau copyright auto-suffisant
// (année calculée en interne + mention "Construit avec DESIGN.md").
```

---

## Règles partagées

- Tous les `href` peuvent être `#` dans la démo.
- Tous les textes viennent du parent (`pages/index.vue`). Les composants ne hardcodent jamais de copy.
- Aucun composant ne fetch de données. Pur présentationnel.
- Les composants doivent fonctionner en standalone, pas de dépendance implicite à un layout parent.
