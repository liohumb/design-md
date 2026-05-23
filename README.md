# design-md

> Une seule app Nuxt. Trois `DESIGN.md`. Trois langages visuels, générés
> par Claude Code, pas peints à la main. Une démo live de comment un seul
> fichier markdown change ce qu'un agent IA produit.

## L'idée

Un `DESIGN.md` à la racine du repo décrit le design system en clair (tokens,
composants, anti-patterns). Les agents IA le lisent avant de générer du code
d'UI. Ce repo livre trois variantes de `DESIGN.md` et un switcher qui permute
les jeux de composants correspondants, en live, sans refresh.

```
/
├── DESIGN.md                  ← spec active (sert de contexte aux prochaines générations)
├── PROPS.md                   ← interfaces de composants figées (identiques entre presets)
├── design-presets/
│   ├── linear/DESIGN.md       ← spec complète, l'implémentation de référence
│   ├── brutalist/DESIGN.md    ← spec complète
│   └── notion/DESIGN.md       ← spec complète
└── app/
    ├── assets/css/tokens.css  ← 3 blocs scopés sous [data-preset="..."]
    ├── components/
    │   ├── DesignSwitcher.vue
    │   ├── linear/            ← 4 composants
    │   ├── brutalist/         ← 4 composants
    │   └── notion/            ← 4 composants
    └── pages/index.vue        ← pose data-preset sur <html> via useHead
```

## Démarrage rapide

```bash
pnpm install
pnpm dev
```

Ouvre <http://localhost:3000>. Clique entre les 3 onglets en haut, le switch
est instantané, le `data-preset` sur `<html>` bascule, les variables CSS
résolvent sur le nouveau bloc scopé, et la grille de composants change.

> L'approbation des build scripts de `@parcel/watcher` et `esbuild` est
> pré-acceptée via `pnpm-workspace.yaml`. Si tu passes à npm ou yarn, supprime
> ce fichier.

## Workflow, ajouter un 4e preset avec Claude Code

Disons que tu veux ajouter un preset `cyberpunk` (ou autre) :

1. **Créer un brief.**
   ```bash
   mkdir -p design-presets/cyberpunk
   ```
   Crée `design-presets/cyberpunk/DESIGN.md` avec un brief court (vibe en une
   phrase, références, non-négociables typo/couleurs). Inspire-toi des fichiers
   existants.

2. **Étoffer le brief en spec complète.** Dans Claude Code :
   ```
   Lis design-presets/cyberpunk/DESIGN.md (un brief) et
   design-presets/linear/DESIGN.md (la référence, fully fleshed out).
   Produis un DESIGN.md cyberpunk complet en reprenant exactement la même
   structure en 11 sections que linear. Écris-le dans
   design-presets/cyberpunk/DESIGN.md.
   ```

3. **Ajouter le bloc de tokens scopé.**
   ```
   Lis design-presets/cyberpunk/DESIGN.md. Ajoute un bloc
   [data-preset="cyberpunk"] dans app/assets/css/tokens.css en exposant tous
   les tokens des sections 2-6 (couleurs, typo, espacements, rayons, ombres,
   mouvement).
   ```

4. **Générer les composants.**
   ```
   Lis design-presets/cyberpunk/DESIGN.md et PROPS.md. Génère les 4
   composants, Hero, Features, Testimonial, Footer, dans
   app/components/cyberpunk/, en respectant strictement les contrats de
   PROPS.md et les règles visuelles de DESIGN.md. CSS vanilla dans
   <style scoped>. Pas de Tailwind.
   ```

5. **Brancher dans le switcher et la page.**
   - Dans `app/components/DesignSwitcher.vue` : ajoute `'cyberpunk'` au type
     `PresetKey` et `{ key: 'cyberpunk', label: 'Cyberpunk' }` à `presets`.
   - Dans `app/pages/index.vue`, ajoute le bloc :
     ```vue
     <template v-else-if="preset === 'cyberpunk'">
       <CyberpunkHero v-bind="hero" />
       <CyberpunkFeatures v-bind="features" />
       <CyberpunkTestimonial v-bind="testimonial" />
       <CyberpunkFooter v-bind="footer" />
     </template>
     ```

6. (Optionnel) **Activer le preset comme "actif" pour les prochaines générations.**
   ```bash
   cp design-presets/cyberpunk/DESIGN.md DESIGN.md
   ```

## Pourquoi c'est intéressant

Le switcher fait deux choses en même temps :

1. Il bascule l'attribut `data-preset` sur `<html>`, ce qui fait résoudre les
   `var(--*)` sur un autre bloc scopé dans `tokens.css`. Les couleurs, la typo
   et le spacing changent en live.
2. Il échange le **jeu entier de composants Vue** via `v-if`. Le `<LinearHero>`
   et le `<BrutalistHero>` n'ont pas la même structure HTML, pas les mêmes
   décorations, pas les mêmes patterns, Claude les a écrits indépendamment
   à partir de specs différentes.

C'est pour ça que basculer entre les presets ne se limite pas à un *theme
switcher* : c'est le rendu de **trois apps que Claude a écrites** à partir de
trois `DESIGN.md`, sur la même copy. Tu peux comparer les choix de structure,
pas seulement les couleurs.
