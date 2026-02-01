# 🌐 Modern Portfolio Website

![Project Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss)

> **Welcome to my digital playground!**  
> This is a high-performance, multi-language personal portfolio built with a focus on modern aesthetics (Deep Space Glassmorphism) and cutting-edge web technologies.

---

## ✨ Key Features

- **� Full Internationalization (i18n)** – Seamlessly switch between **English** and **Polish** thanks to `next-intl`.
- **� Deep Space Glassmorphism** – A bespoke design system utilizing modern CSS features and **Tailwind CSS 4** for a premium, translucent aesthetic.
- **📱 Responsive by Design** – Optimized for every screen size, from high-resolution monitors to mobile devices.
- **🎞️ Fluid Animations** – Integrated **Framer Motion** and **tw-animate-css** for immersive user interactions.
- **� Robust Communication** – Contact forms powered by **React Hook Form** with dual support for **EmailJS** (client-side) and **Nodemailer** (server-side).
- **🚀 Peak Performance** – Leveraging Next.js App Router, Speed Insights, and advanced CSS optimization for near-instant load times.

---

## 🛠️ Tech Stack

### Core

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Tools & Libraries

- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Mailing**: [EmailJS](https://www.emailjs.com/) & [Nodemailer](https://nodemailer.com/)
- **Performance**: [@vercel/speed-insights](https://vercel.com/docs/speed-insights)

---

## � Project Structure

```bash
├── app/                  # Next.js App Router
│   ├── [locale]/         # Internationalization routing
│   ├── globals.css       # Design system & Tailwind 4 config
│   └── sitemap.ts        # Dynamic sitemap generation
├── components/           # Modular UI architecture
│   ├── contact/          # Multi-provider contact system
│   ├── projects/         # Dynamic project gallery
│   └── ui/               # Reusable Radix-based primitives
├── i18n/                 # Configuration for next-intl
├── messages/             # Translation dictionaries (EN, PL)
├── public/               # Optimized assets (WebP format)
└── lib/                  # Shared utilities & configurations
```

---

## 🚀 Development

### Prerequisites

- **Node.js**: Latest LTS
- **Package Manager**: [pnpm](https://pnpm.io/)

### Getting Started

1. **Clone & Enter**:

   ```bash
   git clone https://github.com/kacperbartlomiejczak/Portfolio.git
   cd Portfolio
   ```

2. **Install**:

   ```bash
   pnpm install
   ```

3. **Launch**:
   ```bash
   pnpm run dev
   ```

### Scripts

- `pnpm run dev`: Start development server.
- `pnpm run build`: Production build.
- `pnpm run analyze`: Visualize bundle size.
- `pnpm run lint`: Run ESLint checks.

---

## 👤 Author

**Kacper Bartłomiejczak**

- GitHub: [@kacperbartlomiejczak](https://github.com/kacperbartlomiejczak)

---

_Built with passion for clean code and beautiful design. 🚀_
