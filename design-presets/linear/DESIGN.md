# DESIGN.md

> Design system actif pour ce projet. Les agents IA (Claude Code) doivent lire
> ce fichier et le respecter avant de générer le moindre composant. N'invente
> pas de token. Si quelque chose manque ici, demande avant d'ajouter.

**Preset actif :** `linear`
**Vibe en une phrase :** un outil de dev raffiné, dark par défaut. Silencieux, géométrique, précis. Inspiration : Linear, Vercel, Raycast.

---

## 1. Ton de la marque

- Confiant, minimal, sans bavardage
- Phrases plutôt que slogans
- Minuscules ou casse de phrase, jamais de Title Case dans l'UI
- Les chiffres et unités sont collés : `12 €/mois`, pas `12 € / mois`

---

## 2. Tokens de couleur

Utilise des variables CSS. Toutes les couleurs ci-dessous supposent que le thème **sombre** est par défaut.

```css
:root {
  /* Surfaces */
  --bg-0: #08090a;          /* fond de page */
  --bg-1: #0d0e10;          /* surface surélevée */
  --bg-2: #16181c;          /* card */
  --bg-3: #1f2126;          /* hover / input */

  /* Bordures */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.10);
  --border-strong: rgba(255, 255, 255, 0.16);

  /* Texte */
  --text-primary: #f7f8f8;
  --text-secondary: #b4bcd0;
  --text-tertiary: #8a8f98;
  --text-disabled: #4c525c;

  /* Accent, violet/indigo */
  --accent: #5e6ad2;
  --accent-hover: #6872e5;
  --accent-faint: rgba(94, 106, 210, 0.12);

  /* Statuts */
  --success: #4cb782;
  --warning: #f2c94c;
  --danger:  #eb5757;

  /* Dégradés */
  --gradient-hero: linear-gradient(135deg, #5e6ad2 0%, #8b5cf6 50%, #d946ef 100%);
  --gradient-faint: radial-gradient(circle at 30% 0%, rgba(94,106,210,0.18), transparent 60%);
}
```

**Règles**
- Jamais de noir pur `#000` ni de blanc pur `#fff` pour les surfaces ou le texte.
- La couleur d'accent est réservée à *un seul* CTA par vue. Plusieurs accents = bruit visuel.
- Les couleurs de statut ne portent que du sens (erreur, succès). Jamais de la décoration.

---

## 3. Typographie

```css
:root {
  --font-sans: "Inter", "SF Pro Text", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", ui-monospace, monospace;

  /* Échelle typo (rem) */
  --text-xs:   0.75rem;   /* 12px, captions, labels */
  --text-sm:   0.875rem;  /* 14px, corps réduit, UI */
  --text-base: 1rem;      /* 16px, corps */
  --text-lg:   1.125rem;  /* 18px, emphase */
  --text-xl:   1.375rem;  /* 22px, titres de section */
  --text-2xl:  1.75rem;   /* 28px, titres de page */
  --text-3xl:  2.5rem;    /* 40px, sous-titre hero */
  --text-4xl:  3.5rem;    /* 56px, titre hero */

  /* Interlignes */
  --leading-tight: 1.1;     /* hero, grand display */
  --leading-snug:  1.25;    /* titres */
  --leading-normal: 1.5;    /* corps */

  /* Interlettrage */
  --tracking-tight:  -0.02em;  /* display, hero */
  --tracking-normal: 0;        /* corps */
  --tracking-wide:   0.04em;   /* petites caps, eyebrow */
}
```

**Règles**
- Titres hero : `--text-4xl`, weight 600, tracking-tight, leading-tight.
- Corps : `--text-base`, weight 400, leading-normal, `--text-secondary`.
- Eyebrow (petit label en capitales au-dessus d'un titre) : `--text-xs`, weight 500, tracking-wide, uppercase, `--text-tertiary`.
- Jamais en dessous de 12px. Jamais au-dessus de 56px pour du texte (les visuels, eux, peuvent).
- Les chiffres en stats/pricing utilisent `font-variant-numeric: tabular-nums`.

---

## 4. Échelle d'espacement

Multiples de 4px. Reste sur l'échelle ; n'invente jamais une valeur du genre `13px`.

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
- Entre deux sections majeures : `--space-10` (128px) en desktop, `--space-8` en mobile.
- À l'intérieur d'une card : padding `--space-5` (24px).
- Entre un titre et son corps : `--space-3` (12px).

---

## 5. Rayons et élévations

```css
:root {
  --radius-sm: 4px;    /* inputs, petits chips */
  --radius-md: 6px;    /* boutons, badges */
  --radius-lg: 8px;    /* cards, panels */
  --radius-xl: 12px;   /* grandes feature cards */
  --radius-full: 9999px;

  /* Ombres, toujours discrètes, jamais décoratives */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.5);

  /* Anneau de focus */
  --ring: 0 0 0 2px var(--bg-0), 0 0 0 4px var(--accent);
}
```

**Règles**
- Rayon max sur n'importe quel élément d'UI : 12px. Pas de bouton pilule sauf pour un tag/badge.
- Les ombres sont à peine perceptibles. Si tu vois clairement l'ombre, c'est qu'elle est trop forte.

---

## 6. Mouvement

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);     /* expo-ish, le défaut */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --duration-slow: 400ms;
}
```

**Règles**
- Transitions au hover : `--duration-fast` avec `--ease-out`.
- Entrée / apparition : `--duration-slow` avec `--ease-out`, fade + 4px de translate.
- Jamais de rebond. Jamais d'overshoot. Vibe Linear = retenue.
- Respecter `prefers-reduced-motion`.

---

## 7. Patterns de composants

### Button
- Primary : fond `--accent`, texte blanc, `--radius-md`, padding `10px 16px`, weight 500.
- Secondary : fond transparent, `1px solid var(--border-default)`, hover → fond `--bg-3`.
- Ghost : sans bordure, hover → fond `--bg-2`.
- Toujours un anneau de focus (`--ring`).
- Boutons icon-only : carrés, `--radius-md`.

### Card
- Fond `--bg-2`, `1px solid var(--border-subtle)`, `--radius-lg`, padding `--space-5`.
- Au hover (si interactive) : bordure → `--border-default`, pas de transform, pas de variation d'ombre.

### Input
- Fond `--bg-1`, `1px solid var(--border-default)`, `--radius-md`, padding `8px 12px`.
- Focus : bordure → `--accent`, pas de glow.

### Navigation
- Sticky en haut, hauteur 56px, fond `rgba(8,9,10,0.8)`, `backdrop-filter: blur(12px)`.
- Bordure basse `--border-subtle`.

### Mise en page des sections
- Largeur max du contenu : `1120px`, centrée, padding horizontal `--space-5`.
- Padding vertical entre sections : voir §4.

---

## 8. Iconographie

- Icônes [Lucide](https://lucide.dev). Stroke 1.5. Taille 16/20/24.
- Les icônes héritent de la couleur via `currentColor`. Jamais de couleur custom décorative.

---

## 9. Imagerie et décoration

- Pas de photos stock. Pas de blobs 3D. Pas de glassmorphism.
- Dégradés radiaux discrets (`--gradient-faint`) pour les fonds de hero, au plus un par page.
- Les snippets de code sont des visuels à part entière : fond sombre, mono, tokens de coloration syntaxique pâles.

---

## 10. Anti-patterns (à NE PAS faire)

- ❌ Ombres portées sur du texte
- ❌ Bordures de plus de 1px sur l'UI
- ❌ Texte en dégradé (sauf un mot/phrase du hero, une fois par page max)
- ❌ Plusieurs accents qui se concurrencent dans la même vue
- ❌ Emojis en décoration (un emoji fonctionnel dans la copy est ok)
- ❌ Coins arrondis > 12px sur ce qui n'est ni un tag ni un avatar
- ❌ Inventer des valeurs de spacing hors de l'échelle §4

---

## 11. Mode d'emploi (pour les agents IA)

1. Lis ce fichier en entier avant de générer un composant ou un style.
2. N'utilise que les tokens définis ici. Si un token nécessaire manque, propose-le en commentaire, ne l'invente pas en silence.
3. Écris du CSS vanilla dans les blocs `<style scoped>`. Pas de Tailwind. Pas de CSS-in-JS.
4. Référence les tokens via `var(--nom-du-token)`, jamais en dur.
5. Suis les patterns du §7. Toute déviation doit être justifiée en une ligne de commentaire dans le code.
