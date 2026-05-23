# DESIGN.md

> Design system actif pour ce projet. Les agents IA (Claude Code) doivent lire
> ce fichier et le respecter avant de générer le moindre composant. N'invente
> pas de token. Si quelque chose manque ici, demande avant d'ajouter.

**Preset actif :** `notion`
**Vibe en une phrase :** une app productivité au goût de document, chaleureuse et amicale. Clair, papier, jamais stérile. Whitespace généreux, bords doux, mélange serif/sans. Inspiration : Notion, Craft, Reflect, Stripe Press.

---

## 1. Ton de la marque

- Amical, encourageant, un peu informel
- Casse de phrase partout, Title Case toléré pour les CTA
- Phrases plus longues acceptables, on prend le temps
- Un emoji ponctuel dans la copy est ok (jamais en décoration)
- Les chiffres sont lisibles et arrondis : `12 € par mois` plutôt que `11,99 €`

---

## 2. Tokens de couleur

Palette papier. Pas de noir pur, pas de blanc pur. Tout respire un peu.

```css
:root {
  /* Surfaces */
  --bg-0: #FBFAF9;          /* fond de page, blanc cassé */
  --bg-1: #FFFFFF;          /* surface surélevée / card */
  --bg-2: #FFFFFF;
  --bg-3: #F1F1EF;          /* hover / input */

  /* Bordures, très discrètes, souvent remplacées par de l'espace */
  --border-subtle:  rgba(55, 53, 47, 0.06);
  --border-default: rgba(55, 53, 47, 0.09);
  --border-strong:  rgba(55, 53, 47, 0.16);

  /* Texte, encre charbon, jamais noir pur */
  --text-primary:   #37352F;
  --text-secondary: #787774;
  --text-tertiary:  #9B9A97;
  --text-disabled:  #C7C7C5;

  /* Accent, bleu doux */
  --accent:        #2383E2;
  --accent-hover:  #1A6FC4;
  --accent-faint:  rgba(35, 131, 226, 0.10);

  /* Statuts */
  --success: #4DAB9A;
  --warning: #D9730D;
  --danger:  #E03E3E;

  /* Dégradés, discrets, papier vieilli */
  --gradient-hero:  linear-gradient(180deg, #FBFAF9 0%, #FFFFFF 100%);
  --gradient-faint: radial-gradient(circle at 50% 0%, rgba(35, 131, 226, 0.05), transparent 60%);
}
```

**Règles**
- Jamais de `#000` pour le texte, toujours `#37352F` (l'encre signature).
- Jamais de fond sombre. Pas de mode sombre dans cette identité.
- L'accent bleu est rare : un CTA primaire par vue, et c'est tout.
- Les séparateurs visuels sont souvent du blanc négatif (espacement), pas des bordures.

---

## 3. Typographie

La signature : **serif pour les titres de hero/page, sans pour le corps et l'UI**. C'est ce qui fait "document".

```css
:root {
  --font-sans:  "Inter", "Segoe UI", "Helvetica Neue", system-ui, -apple-system, sans-serif;
  --font-serif: "Lora", "PT Serif", "Georgia", serif;
  --font-mono:  "JetBrains Mono", "SF Mono", ui-monospace, monospace;

  /* Échelle typo, généreuse */
  --text-xs:   0.8125rem;  /* 13px, captions, méta */
  --text-sm:   0.9375rem;  /* 15px, UI, labels */
  --text-base: 1.0625rem;  /* 17px, corps (plus gros que d'habitude) */
  --text-lg:   1.25rem;    /* 20px, emphase, lead */
  --text-xl:   1.5rem;     /* 24px, titres de section */
  --text-2xl:  2rem;       /* 32px, titres de page */
  --text-3xl:  2.5rem;     /* 40px, sous-titre hero */
  --text-4xl:  3.5rem;     /* 56px, titre hero (en serif italique) */

  /* Interlignes, généreux, lisibles */
  --leading-tight:  1.2;
  --leading-snug:   1.35;
  --leading-normal: 1.6;     /* corps : 1.6, c'est la respiration */

  /* Interlettrage */
  --tracking-tight:  -0.01em;
  --tracking-normal: 0;
  --tracking-wide:   0.02em;
}
```

**Règles**
- Hero : `font-serif`, `--text-4xl`, **italique**, weight 500, leading-tight. C'est l'ouverture d'un article.
- Titres de section : `font-serif`, `--text-2xl`, weight 600 (roman, pas italique).
- Corps, UI, labels, boutons : `font-sans`, `--text-base` ou plus petit.
- Eyebrows : `--text-xs`, weight 600, tracking-wide, casse de phrase (PAS en caps).
- Les chiffres dans le pricing sont en serif aussi, c'est éditorial.
- Pas de mono sauf pour les snippets de code.

---

## 4. Échelle d'espacement

Spacieux, mais régulier. Les sections respirent, mais les éléments restent proches.

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;
}
```

**Rythme des sections**
- Entre deux sections majeures : `--space-9` (96px) desktop, `--space-7` mobile. Moins que Linear, on garde la sensation "lecture".
- Padding intérieur d'une card : `--space-6` (32px).
- Entre un titre et son corps : `--space-3` (12px).
- **Largeur max du contenu : `720px`**. C'est la signature "document", bien plus étroit que les autres presets.

---

## 5. Rayons et élévations

```css
:root {
  --radius-sm:  6px;     /* inputs, petits chips */
  --radius-md:  8px;     /* boutons */
  --radius-lg:  12px;    /* cards */
  --radius-xl:  16px;    /* feature cards, modales */
  --radius-full: 9999px; /* avatars, tags */

  /* Ombres, très subtiles, comme du papier sur une table */
  --shadow-sm: 0 1px 2px rgba(15, 15, 15, 0.05);
  --shadow-md: 0 1px 3px rgba(15, 15, 15, 0.08), 0 4px 12px rgba(15, 15, 15, 0.04);
  --shadow-lg: 0 4px 16px rgba(15, 15, 15, 0.06), 0 12px 40px rgba(15, 15, 15, 0.06);

  /* Anneau de focus, accent doux */
  --ring: 0 0 0 3px rgba(35, 131, 226, 0.25);
}
```

**Règles**
- Tout est arrondi à au moins 6px. Aucun coin droit.
- Les ombres sont à peine visibles, on doit sentir le papier surélevé, pas voir l'ombre.
- Pas de hard shadow, jamais.
- Le focus est un halo, pas une bordure dure.

---

## 6. Mouvement

```css
:root {
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);   /* doux, naturel */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 350ms;
}
```

**Règles**
- Transitions hover : `--duration-base` avec `--ease-out`. Souvent une légère mise à l'échelle (`scale(1.01)`) sur les cards cliquables.
- Reveal au scroll : fade + 8px translate, `--duration-slow`.
- Pas de rebond agressif, pas de spring élastique. Doux et naturel.
- Respecter `prefers-reduced-motion`.

---

## 7. Patterns de composants

### Button
- **Primary :** fond `--accent`, texte blanc, `--radius-md`, padding `10px 18px`, weight 500, `--shadow-sm`. Hover = `--accent-hover`, ombre s'intensifie légèrement.
- **Secondary :** fond `--bg-1` (blanc), texte `--text-primary`, bordure `1px solid var(--border-default)`, `--radius-md`. Hover = bordure → `--border-strong`, léger `scale(1.01)`.
- **Ghost :** sans fond, sans bordure, texte `--text-primary`. Hover = fond `--bg-3`.
- L'icône peut accompagner le texte (à gauche, 4px de gap), souvent un emoji ou un trait fin.

### Card
- Fond `--bg-1` (blanc), pas de bordure (ou `1px solid var(--border-subtle)` à peine visible), `--radius-lg`, padding `--space-6`, `--shadow-sm`.
- Hover (si interactive) : `--shadow-md`, scale `1.005`. Très subtil.
- La card mise en avant a un fin trait `--accent` à gauche (`border-left: 3px solid var(--accent)`).

### Input
- Fond `--bg-3` (gris doux), pas de bordure, `--radius-sm`, padding `10px 14px`.
- Focus : fond `--bg-1`, anneau `--ring` accent.
- Placeholder en `--text-tertiary`.

### Navigation
- Sticky en haut, hauteur 60px, fond `rgba(251, 250, 249, 0.85)`, `backdrop-filter: blur(12px)`.
- Pas de bordure basse, séparé par l'espace.
- Liens en sans, weight 500, hover = fond `--bg-3`, `--radius-sm`.

### Mise en page des sections
- **Largeur max du contenu : 720px**, centrée, padding horizontal `--space-5`.
- Les feature cards/grid peuvent s'étendre à 1024px, mais le texte de lecture reste à 720px.
- Vertical entre sections : `--space-9` desktop, `--space-7` mobile.

---

## 8. Iconographie

- [Lucide](https://lucide.dev) en stroke 2 (un peu plus épais que Linear pour cohérence "marker").
- Taille 18/22/28.
- Souvent remplacées par des **emojis** dans les feature cards, c'est la signature Notion. Choisir des emojis lisibles : 📝 ✨ 🎯 🌱 ☕ 📚.
- Les icônes héritent de `currentColor`.

---

## 9. Imagerie et décoration

- Photos chaleureuses, lumière naturelle, grain léger. Pas de stock business générique.
- Illustrations vectorielles simples, traits ronds, palette dans la charte (charbon + accent bleu).
- Décoration tolérée : tampons "papier", traits à main levée (en SVG), petits ornements typographiques (`§`, `❦`).
- Hero peut avoir une grande lettrine (drop cap) en serif.

---

## 10. Anti-patterns (à NE PAS faire)

- ❌ Fond sombre ou mode sombre
- ❌ Noir pur (`#000`) pour le texte
- ❌ Hard shadows, ombres décoratives appuyées
- ❌ Coins droits (`border-radius: 0`)
- ❌ Typo mono partout (réservée au code)
- ❌ Dégradés saturés ou voyants
- ❌ Plusieurs couleurs d'accent qui se concurrencent
- ❌ Title Case dans le corps de texte (ok pour CTA seulement)
- ❌ TOUT EN CAPS sur des phrases entières
- ❌ Largeur de contenu > 720px pour du texte de lecture

---

## 11. Mode d'emploi (pour les agents IA)

1. Lis ce fichier en entier avant de générer un composant ou un style.
2. N'utilise que les tokens définis ici. Si un token nécessaire manque, propose-le en commentaire, ne l'invente pas en silence.
3. Écris du CSS vanilla dans les blocs `<style scoped>`. Pas de Tailwind. Pas de CSS-in-JS.
4. Référence les tokens via `var(--nom-du-token)`, jamais en dur.
5. Suis les patterns du §7. Toute déviation doit être justifiée en une ligne de commentaire dans le code.
6. **Spécifique notion :** si tu hésites entre "design d'app" et "page d'article", choisis page d'article. Si tu hésites entre serré et aéré, choisis aéré. Le hero doit ressembler à l'ouverture d'un essai de magazine, pas à une landing SaaS.
