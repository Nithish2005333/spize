<div align="center">

<img src="public/logo.png" alt="Spize Logo" width="160"/>

# ✨ Spize Weddings & Events

### *Luxury Wedding Planner & Event Management*

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br/>

> *"We don't just plan events; we create lifelong memories."*
> **— Reema & Atreya**

<br/>

---

</div>

## 🏛️ About

**Spize Weddings & Events** is a premium luxury event planning brand founded in Chennai in 2012 by Reema Thakkar Tiwari. With over a decade of excellence, Spize has orchestrated 250+ weddings, celebrity events, corporate galas, and destination celebrations across India and internationally in Dubai, Muscat, and beyond.

This repository contains the **official marketing website** — a high-end, fully animated, single-page luxury experience built with Next.js 15 and a curated design system.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎬 **Reel Showcase** | Autoplay video reels with fullscreen lightbox & mute controls |
| 🗺️ **Destinations Map** | Interactive SVG world map with animated travel arcs from Mumbai HQ |
| 🖼️ **Portfolio Gallery** | Filterable masonry grid with fullscreen lightbox |
| 👥 **Founders Section** | Horizontal split-panel cards with hover-reveal details |
| 📸 **Instagram Feed** | Styled post cards with avatar, location, and live stats |
| 🏆 **Journey Timeline** | Interactive year-selector with animated content transitions |
| 💬 **Testimonials** | Premium quote carousel with star ratings |
| 📩 **Contact Form** | Multi-step luxury inquiry form with WhatsApp integration |
| 🎨 **Design Atelier** | AI Theme Quiz, Budget Calculator, Style Curator, Season Clock |
| 📱 **Mobile Navigation** | Fixed bottom nav bar for seamless mobile UX |
| 💫 **Gold Cursor** | Custom radial gold cursor with luxury hover effects |
| 🌀 **Smooth Scrolling** | Lenis-powered ultra-smooth scroll with momentum |
| ⚡ **Loading Screen** | Premium animated preloader with brand reveal |
| 📲 **WhatsApp CTA** | Floating animated WhatsApp inquiry button |
| 🔝 **Scroll to Top** | Smart floating back-to-top button |

---

## 🛠️ Tech Stack

```
Framework     →  Next.js 15 (App Router)
Language      →  TypeScript 5
Styling       →  Tailwind CSS 3.4 + Custom CSS Variables
Animation     →  Framer Motion 12 + GSAP 3
Scrolling     →  Lenis Smooth Scroll
Icons         →  Lucide React
Fonts         →  Playfair Display · Cormorant · Inter
```

---

## 📁 Project Structure

```
spize/
├── public/
│   ├── Reels/              # reel-1.mp4, reel-2.mp4, reel-3.mp4
│   ├── founder-reema.png   # Founder portrait
│   ├── founder-atreya.png  # Co-Founder portrait
│   └── logo.png
│
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, custom utilities
│   │   ├── layout.tsx      # Root layout with fonts & meta
│   │   └── page.tsx        # Main page composition
│   │
│   ├── components/
│   │   ├── sections/       # All page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Founders.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Reels.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Destinations.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── InstagramFeed.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── features/       # Interactive premium features
│   │   │   ├── ThemeRecommender.tsx
│   │   │   ├── BudgetCalculator.tsx
│   │   │   ├── TransformationSlider.tsx
│   │   │   ├── Moodboard.tsx
│   │   │   └── Countdown.tsx
│   │   │
│   │   └── ui/             # Reusable UI components
│   │       ├── LoadingScreen.tsx
│   │       ├── SmoothScroll.tsx
│   │       ├── GoldCursor.tsx
│   │       └── BrandIcons.tsx
│   │
│   └── tailwind.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Nithish2005333/spize.git

# 2. Navigate to the project
cd spize

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Design System

The site uses a carefully curated luxury color palette defined in `globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `gold` | `#D4AF37` | Primary accent, borders, icons |
| `champagne` | `#F7E7CE` | Soft warm highlights |
| `rich-black` | `#0A0A0A` | Deep dark backgrounds |
| `text-dark` | `#1A1A1A` | Body text |

**Typography:**
- `font-playfair` — Headings & display text
- `font-cormorant` — Elegant italic accents
- `font-inter` — UI, body copy, labels

---

## 👥 The Founders

<table>
<tr>
<td align="center" width="50%">

### Reema Thakkar Tiwari
**Founder & Creative Director**

*14+ Years in Luxury Design*

Spatial Architecture · Creative Direction · Bespoke Styling · Brand Partnerships

[![Instagram](https://img.shields.io/badge/@thakkar.reema-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/thakkar.reema)

</td>
<td align="center" width="50%">

### Atreya Tiwari
**Co-Founder & Operations Lead**

*10+ Years in Scaled Operations*

Logistics & Production · Technical Scaffolding · Hospitality Management · Budget Optimization

[![Instagram](https://img.shields.io/badge/@atreyatiwari-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/atreyatiwari)

</td>
</tr>
</table>

---

## 📍 Destinations We Serve

```
🇮🇳  India          →  Jaipur · Udaipur · Mumbai · Goa · New Delhi
🇦🇪  UAE            →  Dubai · Abu Dhabi
🇴🇲  Oman           →  Muscat
🇹🇭  Thailand       →  Phuket · Bangkok
🇲🇻  Maldives       →  North Malé Atoll
🇮🇩  Indonesia      →  Bali
```

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| 📧 Email | hello@spizeevents.com |
| 📸 Instagram | [@spizeweddingsandevents](https://www.instagram.com/spizeweddingsandevents) |
| 💬 WhatsApp | [Chat with us](https://wa.me/919999999999) |

---

## 📄 License

This project is proprietary. All rights reserved © 2025 Spize Weddings & Events.

---

<div align="center">

Made with ❤️ by the Spize team

*Architects of Timeless Affection*

</div>
