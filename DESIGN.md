# DESIGN.md

> Design system actif pour ce projet. Les agents IA (Claude Code) doivent lire
> ce fichier et le respecter avant de générer le moindre composant. N'invente
> pas de token. Si quelque chose manque ici, demande avant d'ajouter.

**Preset actif :** `brutalist`
**Vibe en une phrase :** brutalisme d'affiche typographique sur le web. Noir, blanc, un accent électrique. Bords nets, ombres dures, type mono. Confiance plutôt que finition. Inspiration : Gumroad rebrand, brutalist.report, kasperboye.com, Yale School of Architecture.

---

## 1. Ton de la marque

- Direct, sec, presque rude
- TOUT EN CAPITALES pour les CTA et eyebrows
- Casse de phrase pour le corps, sans fioriture
- "ACHETER" plutôt que "Commencer maintenant"
- Les chiffres sont en gros et bruts : `12€` pas `12,00 €`

---

## 2. Tokens de couleur

Trois couleurs. Point. Aucun gris, aucune nuance intermédiaire.

```css
:root {
  /* Surfaces */
  --bg-0: #FFFFFF;          /* fond de page, blanc pur */
  --bg-1: #FFFFFF;          /* identique, pas de hiérarchie de surface */
  --bg-2: #FFFFFF;
  --bg-3: #FFFFFF;

  /* Bordures */
  --border-subtle:  #000000;
  --border-default: #000000;
  --border-strong:  #000000;

  /* Texte */
  --text-primary:   #000000;
  --text-secondary: #000000;   /* idem, pas de hiérarchie typo par couleur */
  --text-tertiary:  #000000;
  --text-disabled:  #000000;   /* le disabled passe par l'opacité 0.4 */

  /* Accent, jaune électrique */
  --accent:        #FFD400;
  --accent-hover:  #FFD400;    /* identique, l'inversion noire fait le job */
  --accent-faint:  #FFD400;

  /* Statuts (parcimonie totale) */
  --success: #00FF00;
  --warning: #FFD400;
  --danger:  #FF0000;

  /* "Dégradés", n'en utilise pas. Présent pour compat structurelle. */
  --gradient-hero:  #FFD400;
  --gradient-faint: transparent;
}
```

**Règles**
- Trois couleurs : `#000`, `#FFF`, `#FFD400`. Toute autre couleur est un bug.
- L'accent jaune est partout : fond de bouton primaire, ombre portée sur les cards, surlignage. Ce n'est pas "un peu d'accent", c'est massif.
- Pas de gris. Le contraste maximal est l'identité.

---

## 3. Typographie

```css
:root {
  --font-sans: "IBM Plex Mono", ui-monospace, "SF Mono", monospace;
  --font-mono: "IBM Plex Mono", ui-monospace, "SF Mono", monospace;

  /* Échelle typo, peu de paliers, gros sauts */
  --text-xs:   0.875rem;   /* 14px, label */
  --text-sm:   0.875rem;   /* 14px (identique) */
  --text-base: 1rem;       /* 16px, corps */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.125rem;   /* 18px (identique) */
  --text-2xl:  2rem;       /* 32px, titres de section */
  --text-3xl:  3rem;       /* 48px */
  --text-4xl:  5rem;       /* 80px, titre hero */

  /* Interlignes, serrés, presque tassés */
  --leading-tight: 0.95;
  --leading-snug:  1.1;
  --leading-normal: 1.4;

  /* Interlettrage */
  --tracking-tight:  0;
  --tracking-normal: 0;
  --tracking-wide:   0.08em;   /* en CAPS, on respire un peu */
}
```

**Règles**
- TOUT est en mono. Corps, titres, boutons, labels, prix. Sans exception.
- Hero : `--text-4xl`, weight 700, leading-tight. Aucun lettrage négatif.
- Boutons et eyebrows : `--text-sm`, weight 700, **TOUT EN CAPITALES**, tracking-wide.
- Deux weights uniquement : 400 (corps) et 700 (titres, boutons, labels). Le 500 ou 600 n'existent pas.
- Jamais d'italique. Jamais de "small caps".

---

## 4. Échelle d'espacement

Grille 8px, mais avec amplitude, les sections respirent énormément.

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  16px;
  --space-4:  24px;
  --space-5:  32px;
  --space-6:  48px;
  --space-7:  64px;
  --space-8:  96px;
  --space-9:  128px;
  --space-10: 160px;
}
```

**Rythme des sections**
- Entre deux sections majeures : `--space-10` (160px) en desktop, `--space-8` en mobile.
- Padding intérieur d'une card : `--space-5` (32px).
- Entre un titre et son corps : `--space-4` (24px).
- Largeur max du contenu : `1200px`, padding horizontal `--space-5`.

---

## 5. Rayons et élévations

```css
:root {
  /* Rayons, tous à zéro. Tout est carré. */
  --radius-sm:   0;
  --radius-md:   0;
  --radius-lg:   0;
  --radius-xl:   0;
  --radius-full: 0;

  /* Ombres, hard offset, jamais de blur */
  --shadow-sm: 4px 4px 0 #000000;
  --shadow-md: 8px 8px 0 #000000;
  --shadow-lg: 12px 12px 0 #000000;

  /* Anneau de focus, inversion totale */
  --ring: 0 0 0 4px #FFD400, 0 0 0 6px #000000;
}
```

**Règles**
- Rayon = 0 partout. Aucune exception. Pas de "juste 2px ça arrondit doucement".
- Toutes les ombres sont des hard offsets sans blur. `Xpx Ypx 0 #000`.
- Les cards mises en avant ont une ombre jaune (`8px 8px 0 #FFD400`) plutôt que noire.

---

## 6. Mouvement

```css
:root {
  --ease-out:    linear;        /* aucune courbe, tout est linéaire */
  --ease-in-out: linear;
  --duration-fast: 0ms;         /* instantané par défaut */
  --duration-base: 0ms;
  --duration-slow: 0ms;
}
```

**Règles**
- Aucune transition. Le hover inverse les couleurs **instantanément**.
- Aucune animation d'entrée, aucun reveal au scroll, aucun parallaxe.
- Le seul "mouvement" toléré : le décalage d'ombre au hover sur une card (instantané lui aussi).
- `prefers-reduced-motion` est déjà respecté par construction.

---

## 7. Patterns de composants

### Button
- **Primary :** fond `#FFD400`, texte `#000`, bordure `2px solid #000`, hard shadow `4px 4px 0 #000`, padding `12px 24px`, TOUT EN CAPS, weight 700. Hover = fond `#000`, texte `#FFD400`, ombre disparaît.
- **Secondary :** fond `#FFF`, texte `#000`, bordure `2px solid #000`, hard shadow `4px 4px 0 #000`. Hover = fond `#000`, texte `#FFF`.
- **Ghost :** fond transparent, bordure `2px solid #000`. Pas d'ombre. Hover = fond `#000`, texte `#FFF`.
- Pas d'icône à côté du texte (ou rarement, et c'est un glyphe plein).

### Card
- Fond `#FFF`, bordure `2px solid #000`, hard shadow `8px 8px 0 #000`, padding `--space-5` (32px).
- Hover (si interactive) : l'ombre passe à `12px 12px 0 #000`. Pas d'autre effet.
- La card mise en avant a une hard shadow jaune (`8px 8px 0 #FFD400`).

### Input
- Fond `#FFF`, bordure `2px solid #000`, padding `12px 16px`, rayon 0.
- Focus = inversion : fond `#000`, texte `#FFD400`. Pas d'anneau ajouté.
- Placeholder en `#000` avec opacité 0.4.

### Navigation
- Sticky en haut, hauteur 64px, fond `#FFF`, bordure basse `2px solid #000`.
- Liens TOUT EN CAPS, weight 700, sans soulignement. Hover = surlignement jaune en arrière-plan.

### Mise en page des sections
- Largeur max du contenu : `1200px`, centrée, padding horizontal `--space-5` (32px).
- Vertical entre sections : `--space-10` (160px) desktop, `--space-8` mobile.

---

## 8. Iconographie

- Pas d'icônes vectorielles fines. Si une icône est nécessaire, c'est un **glyphe plein** ou un caractère ASCII (`→`, `×`, `+`, `■`).
- Pas d'icônes Lucide ni Heroicons. Si vraiment besoin d'un set, **Phosphor "Fill"** uniquement.
- Toutes les "icônes" sont en `#000` ou `#FFD400`. Jamais en couleur custom.

---

## 9. Imagerie et décoration

- Pas de photos stock. Si une image est utilisée, elle est **noir et blanc, fort contraste, halftone**.
- Pas de gradients. Pas de blobs. Pas d'illustrations vectorielles douces.
- Décoration tolérée : grosses formes géométriques pleines (`#000` ou `#FFD400`) en arrière-plan, gros chiffres ou caractères typographiques comme éléments visuels.
- Une grille visible (1px de lignes noires) est encouragée comme fond.

---

## 10. Anti-patterns (à NE PAS faire)

- ❌ Tout coin arrondi (`border-radius` non-nul)
- ❌ Toute ombre avec un blur (`box-shadow: ... 8px ...`)
- ❌ Tout dégradé (`linear-gradient`, `radial-gradient`)
- ❌ Toute transition ou animation
- ❌ Le moindre gris (`#888`, `#ccc`, `rgba(0,0,0,0.5)` = bug)
- ❌ Toute typo non-mono
- ❌ Glassmorphism, blur, backdrop-filter
- ❌ Icônes en stroke fin
- ❌ Plus d'une couleur d'accent (le jaune est seul)
- ❌ Title Case dans l'UI

---

## 11. Mode d'emploi (pour les agents IA)

1. Lis ce fichier en entier avant de générer un composant ou un style.
2. N'utilise que les tokens définis ici. Si un token nécessaire manque, propose-le en commentaire, ne l'invente pas en silence.
3. Écris du CSS vanilla dans les blocs `<style scoped>`. Pas de Tailwind. Pas de CSS-in-JS.
4. Référence les tokens via `var(--nom-du-token)`, jamais en dur, sauf `#000`, `#FFF`, `#FFD400` qui sont des constantes assumées de l'identité.
5. Suis les patterns du §7. Toute déviation doit être justifiée en une ligne de commentaire dans le code.
6. **Spécifique brutalist :** si tu hésites entre "élégant" et "brut", choisis brut. Si tu hésites entre "doux" et "contrasté", choisis contrasté.
