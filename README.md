# design-md

> Hé, salut. Tu es tombé sur un petit projet qui essaye de répondre à une
> question toute con : **est-ce qu'un fichier markdown peut réellement changer
> la façon dont une IA code ton UI ?** Spoiler : ouais, et c'est même flagrant.

## L'idée en 30 secondes

J'ai écrit **un** `DESIGN.md`. Un seul fichier markdown qui décrit un design
system : les couleurs, la typo, les espacements, les composants, ce qui est
interdit, ce qui est obligatoire.

Puis j'ai demandé à Claude Code de générer une landing avec. Hero, Features,
Testimonial, Footer. Quatre composants, rien d'extraordinaire.

Sauf que j'ai recommencé. Avec **trois** `DESIGN.md` différents. Linear,
Brutalist, Notion. Même contenu textuel, même structure de page, même prompt.
Et là tu as **trois apps complètement différentes**, pas juste "trois thèmes".
Pas les mêmes structures HTML, pas les mêmes décorations, pas les mêmes
patterns d'interaction. Juste trois interprétations honnêtes du même brief.

Le repo embarque les trois côte à côte et un petit switcher pour passer de
l'une à l'autre en live. Tu peux regarder le résultat, ouvrir le code, lire le
markdown qui a guidé chaque version, et te faire ta propre idée.

## Démarrer le projet

```bash
pnpm install
pnpm dev
```

Ouvre <http://localhost:3000>, et clique sur les onglets en haut. C'est tout.

> Petit détail pnpm : l'approbation des build scripts de `@parcel/watcher`
> et `esbuild` est déjà faite dans `pnpm-workspace.yaml`. Si tu pars sur npm
> ou yarn, tu peux dégager ce fichier.

## La structure du repo

```
/
├── DESIGN.md                  ← le design system "actif" (lu par Claude pour la prochaine génération)
├── PROPS.md                   ← le contrat de props, identique pour les 3 presets
├── design-presets/
│   ├── linear/DESIGN.md       ← spec complète, version Linear-like
│   ├── brutalist/DESIGN.md    ← spec complète, version brutaliste affiche
│   └── notion/DESIGN.md       ← spec complète, version Notion soft
└── app/
    ├── assets/css/tokens.css  ← 3 blocs CSS scopés sous [data-preset="..."]
    ├── components/
    │   ├── DesignSwitcher.vue ← la petite barre flottante en haut
    │   ├── linear/            ← 4 composants
    │   ├── brutalist/         ← 4 composants
    │   └── notion/            ← 4 composants
    └── pages/index.vue        ← pose data-preset sur <html>, swap les composants
```

Deux trucs à retenir :
- **`DESIGN.md`** (racine) : c'est *le contexte*. Tu copies un preset dedans
  avant de demander à Claude de générer du nouveau code, il le lit
  automatiquement.
- **`PROPS.md`** : le seul contrat figé. Chaque preset implémente les **mêmes
  signatures de props**. Comme ça, le switcher peut swapper `<LinearHero>`
  pour `<BrutalistHero>` sans rien péter.

## Tu veux ajouter ton propre preset ?

C'est un peu le but du jeu, en fait. Disons que tu veux un preset `cyberpunk`
(ou `solarpunk`, ou `90s-geocities`, fais-toi plaisir).

**1. Crée le dossier et écris un brief court.**
```bash
mkdir -p design-presets/cyberpunk
```
Dans `design-presets/cyberpunk/DESIGN.md`, balance 5-10 lignes : la vibe en
une phrase, 2-3 références visuelles, et les non-négociables (la typo, les
couleurs dominantes). Pas besoin d'écrire toute la spec, Claude va le faire.

**2. Étoffer le brief en spec complète.** Dans Claude Code, balance lui :
> Lis `design-presets/cyberpunk/DESIGN.md` (mon brief) et
> `design-presets/linear/DESIGN.md` (la spec de référence, bien complète).
> Produis-moi un `DESIGN.md` cyberpunk complet en reprenant la même
> structure en 11 sections que linear. Écris-le dans
> `design-presets/cyberpunk/DESIGN.md`.

**3. Ajouter les tokens CSS scopés.**
> Lis `design-presets/cyberpunk/DESIGN.md`. Ajoute un bloc
> `[data-preset="cyberpunk"]` dans `app/assets/css/tokens.css` avec tous
> les tokens des sections 2 à 6 (couleurs, typo, espacements, rayons,
> ombres, mouvement).

**4. Générer les 4 composants.**
> Lis `design-presets/cyberpunk/DESIGN.md` et `PROPS.md`. Génère les 4
> composants Hero, Features, Testimonial, Footer dans
> `app/components/cyberpunk/`. Respecte les contrats de `PROPS.md` et les
> règles visuelles de `DESIGN.md`. CSS vanilla dans `<style scoped>`. Pas
> de Tailwind.

**5. Brancher dans le switcher et la page.**
- Dans `app/components/DesignSwitcher.vue` : ajoute `'cyberpunk'` au type
  `PresetKey` et `{ key: 'cyberpunk', label: 'Cyberpunk' }` au tableau
  `presets`.
- Dans `app/pages/index.vue` :
  ```vue
  <template v-else-if="preset === 'cyberpunk'">
    <CyberpunkHero v-bind="hero" />
    <CyberpunkFeatures v-bind="features" />
    <CyberpunkTestimonial v-bind="testimonial" />
    <CyberpunkFooter />
  </template>
  ```

**6. (Optionnel) Activer ton preset comme contexte par défaut.**
```bash
cp design-presets/cyberpunk/DESIGN.md DESIGN.md
```
Les prochaines générations Claude prendront ce preset comme référence.

## Pourquoi c'est plus parlant qu'un theme switcher

Soyons honnêtes, un theme switcher qui balance entre clair et sombre, tout le
monde a déjà vu ça. Ici, deux choses se passent **en même temps** :

1. **L'attribut `data-preset` sur `<html>` change**, donc les `var(--*)` se
   résolvent sur un nouveau bloc scopé dans `tokens.css`. Les couleurs, la
   typo, le spacing basculent.

2. **Le jeu entier de composants Vue est échangé** via `v-if`. Le
   `<LinearHero>` et le `<BrutalistHero>` n'ont **rien à voir** côté markup :
   pas la même structure HTML, pas les mêmes décorations, pas les mêmes
   patterns. Claude les a écrits indépendamment, à partir de specs
   différentes, sans jamais voir l'autre.

C'est ça que tu observes en cliquant : **trois apps que Claude a écrites**,
pas un même squelette repeint. Tu peux comparer les choix de structure, pas
juste les couleurs.

## Stack utilisée

Nuxt 4 + Vue 3, CSS vanilla, pnpm. Volontairement minimal pour que rien ne
masque ce qui se passe : pas de Tailwind, pas de UI kit, pas de framework de
composants. Tu lis le `DESIGN.md`, tu lis le composant Vue généré à côté, tu
fais le lien.

## Et après ?

Si tu trouves ça cool, le mieux que tu peux faire c'est :
- Cloner, ajouter ton propre preset, et voir ce que ça donne.
- Réutiliser le pattern `DESIGN.md` + `PROPS.md` dans ton vrai projet, pas
  juste pour des démos. C'est là que ça paye.
- Me dire ce qui marche, ce qui marche pas, ce qui te ferait gagner du temps.

Bon dev 🤘