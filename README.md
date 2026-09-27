# Cardamom House

A warm, responsive digital menu for **Cardamom House**, an independent brunch café in Lisbon.

The goal was to create something that feels like a real café experience rather than a generic restaurant template — calm, editorial, easy to scan on a phone, and strongly tied to the Cardamom House brand.

---

## Live Demo

**Vercel:**  https://cardamomhouse-seven.vercel.app

**GitHub:** https://github.com/Shubh4mNish4d/Cardamom-House.git

---

## ✨ Features

* Responsive mobile-first menu
* Restaurant hero section with live/open status
* Today's Special callout
* Sticky category navigation
* Active section tracking while scrolling
* Brunch, Sandwiches, Drinks and Sides sections
* EUR price formatting
* Vegetarian, gluten-free and spicy dietary labels
* Vegetarian / gluten-free dietary filtering
* Open, closed and sold-out URL states
* Sold-out special handling
* Weekly opening hours
* Light / dark mode
* `prefers-color-scheme` support
* Keyboard-accessible navigation
* Visible focus states
* Reduced-motion support
* Subtle CSS entrance animation
* Print-friendly A4 menu layout
* Semantic HTML
* TypeScript throughout

---

## 🎨 Design Direction

The design intentionally avoids the typical restaurant-template approach of large image cards, heavy shadows and excessive UI.

Instead, I used:

* Warm off-white paper-like background
* Editorial serif typography for the restaurant and menu headings
* Clean sans-serif typography for supporting information
* Thin borders and generous whitespace
* Restrained rounded elements
* Warm amber accents
* Minimal decoration

The main brand colour is:

```text
#B45309
```

It is used for important interactive and brand elements including:

* Today's Special
* Active navigation
* Buttons and filters
* Accent lines
* Links and hover states
* Focus indicators
* Open/status accents

I wanted the amber to feel like part of the café's identity rather than simply being a decorative colour.

---

## 📱 Mobile First

The menu is primarily designed for someone standing outside or inside the café using their phone.

Some mobile-specific decisions include:

* Horizontally scrollable category navigation
* Large touch targets
* Comfortable menu-item spacing
* Short readable descriptions
* Prices aligned consistently
* No unnecessary imagery that pushes menu content down
* Sticky navigation for quick category switching
* Responsive typography
* Dietary filters that wrap naturally on smaller screens

Desktop adds more whitespace and a supporting hours column without changing the core menu experience.

---

## 🔄 Application States

The page supports three states through a URL query parameter.

### Open

```text
?state=open
```

Example:

```text
https://your-domain.com/?state=open
```

The café is shown as open and the Today's Special is available.

---

### Closed

```text
?state=closed
```

The page displays a clear but friendly closed-state banner:

> We're closed today.

The next opening time is also communicated so the user knows when they can return.

---

### Special Sold Out

```text
?state=special-sold-out
```

The café remains open, but the Saffron French Toast is unavailable.

The item remains visible in the menu but is:

* Dimmed
* Marked with a `Sold out` pill
* Reflected in the Today's Special callout

This preserves the menu context instead of making the item appear to have never existed.

---

## 🥑 Dietary Filtering

The menu supports three filters:

```text
All
Vegetarian
Gluten-free
```

The filtering happens on the client side using the menu item's existing tags.

For example:

```ts
tags: ["V", "GF"]
```

means the item appears under both Vegetarian and Gluten-free.

If a category has no matching items, the entire category is hidden rather than showing an empty section.

---

## 🌙 Dark Mode

Dark mode supports both:

1. The user's system preference
2. A manual light/dark toggle

The initial theme respects:

```css
prefers-color-scheme
```

The selected manual preference is stored locally so it persists between visits.

The dark palette uses deep coffee/espresso tones rather than simply inverting the light design.

---

## ♿ Accessibility

Accessibility was treated as part of the implementation rather than a final checklist.

The page uses semantic elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Additional considerations include:

* Keyboard-navigable links and buttons
* Visible `:focus-visible` states
* `aria-current` for the active menu category
* `aria-pressed` for dietary filters
* Meaningful status text
* Sufficient colour contrast
* Comfortable touch targets
* Reduced-motion support
* Semantic address markup
* No information communicated through colour alone

The sold-out state, for example, includes explicit text rather than relying only on opacity.

---

## 🖨️ Print Layout

A dedicated print stylesheet is included.

When printed:

* Navigation is removed
* Theme controls are removed
* Decorative UI is removed
* The menu becomes a compact two-column layout
* Menu items avoid unnecessary page breaks
* The page uses A4-friendly spacing

The goal is to make the printed result feel like a simple café menu rather than a printed website.

---

## 🎞️ Animation

The page uses a small CSS entrance animation.

It is intentionally subtle:

* Fade
* Slight upward movement
* Short duration

No bouncing, excessive scaling or attention-grabbing effects are used.

Animations are disabled when the user has enabled:

```text
prefers-reduced-motion: reduce
```

---

## 🏗️ Tech Stack

* React
* TypeScript
* Tailwind CSS
* Vite
* CSS
* IntersectionObserver API

No backend is required.

The supplied restaurant information is kept in a typed TypeScript data file so the UI remains data-driven.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── CategoryNav.tsx
│   ├── DietaryFilter.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hours.tsx
│   ├── MenuItem.tsx
│   ├── MenuSection.tsx
│   ├── Special.tsx
│   ├── StatusBanner.tsx
│   └── ThemeToggle.tsx
│
├── data/
│   └── restaurant.ts
│
├── types/
│   └── restaurant.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd cardamom-house
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite URL.

---

## 🏭 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🧠 Implementation Decisions

### Why no backend?

The brief only requires a restaurant menu and three display states. There is no user-generated or persistent restaurant data that needs a backend, so keeping the data local makes the application simpler and easier to maintain.

### Why TypeScript?

The menu has several related data structures — restaurant information, hours, categories, menu items and dietary tags.

Typed interfaces make those relationships explicit and help prevent accidental changes to the data structure.

### Why CSS animation instead of Motion?

The requested animation is intentionally simple. A small CSS animation avoids adding another dependency while still allowing `prefers-reduced-motion` support.

### Why no food photography?

I chose not to use stock food photography.

The supplied brand already has a strong visual direction through its name, amber colour and Lisbon café positioning. Generic stock photography could make the page feel less authentic and introduce visual noise.

Instead, the design relies on typography, spacing, colour and subtle borders to create personality.

### Why IntersectionObserver?

The active category indicator needs to respond to the section currently being viewed.

`IntersectionObserver` provides this without attaching expensive scroll handlers.

---

## 🔍 Trade-offs

I deliberately prioritised:

1. Visual polish
2. Mobile usability
3. Accessibility
4. Clear state handling
5. Simple maintainable code

before adding optional features.

The result is intentionally restrained. Every additional visual element has to justify the space it occupies, especially on mobile.

---

## 🔮 Possible Future Improvements

If this were moving beyond the trial into production, possible next steps could include:

* CMS-backed menu management
* Online ordering
* Table reservations
* Multilingual Portuguese/English support
* Analytics
* Real restaurant photography
* Content-managed opening hours
* Integration with Instagram
* Location/map integration

These were intentionally kept outside the current scope.

---

## 👨‍💻 Author

**Shubham Nishad**

Full Stack Web Developer

Built with React, TypeScript and Tailwind CSS.
