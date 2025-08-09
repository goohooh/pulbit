# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Pulbit," a Korean agricultural technology company website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The company focuses on regenerative farming solutions, data-driven agriculture, and sustainable farming practices.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables
- **Fonts**: Inter (sans-serif), Merriweather (serif)

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage composition
│   ├── globals.css        # Tailwind config + CSS variables
│   ├── products/          # Product pages (FarmOS, MMC, Byuri)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/contact/       # Contact form API endpoint
└── components/            # Reusable UI components
    ├── Header.tsx         # Navigation header
    ├── Hero.tsx           # Video hero section
    ├── KPIs.tsx           # Key metrics section
    ├── Sustainability.tsx # Sustainability content
    ├── News.tsx           # News and press coverage section
    ├── Features.tsx       # Features showcase
    ├── ContactForm.tsx    # Reusable contact form component
    └── Footer.tsx         # Site footer with embedded contact form
```

### Design System

**Color Variables** (defined in globals.css):
- `--brand`: Deep navy blue (#0b3b6e)
- `--brand-2`: Teal accent (#0ea5a3)  
- `--accent`: Green accent (#22c55e)
- Dark mode variants automatically applied

**Typography**:
- Body: Inter (--font-sans)
- Headings: Merriweather (--font-serif)
- `.h0`: Responsive hero text (2.2rem to 4rem)
- `.lead`: Larger body text for descriptions

**Layout Utilities**:
- `.container-px`: Responsive horizontal padding (1rem to 2rem)
- `.card`: Standard card styling with border and background

### Component Patterns

**Page Structure**: All pages follow a consistent layout pattern:
```tsx
<div className="font-sans min-h-screen flex flex-col">
  <Header />
  <main className="flex-1">
    {/* Page content */}
  </main>
  <Footer />
</div>
```

**Homepage Flow**: Hero → KPIs → Sustainability → News → Features

**Contact Form Integration**: 
- `ContactForm` component is reusable with configurable props (title, description, compact mode)
- Embedded in Footer component on every page for easy access
- Full-featured version available on dedicated contact page
- Uses same `/api/contact` endpoint for form submissions

**Responsive Design**: Uses clamp() for fluid typography and spacing, mobile-first approach with md: breakpoints.

**Video Integration**: Hero section supports background videos (place in public/ directory as demo.mp4).

## Content & Localization

- **Primary Language**: Korean with some English elements
- **Company Focus**: Agricultural technology, regenerative farming, data-driven solutions
- **Products**: FarmOS (farm management), MMC (modular facilities), Byuri (AI algorithms)

## API Structure

**Contact Form** (`/api/contact`):
- POST endpoint for contact submissions
- Validates name, email, message fields
- Currently logs to console (placeholder for email/CRM integration)

## Path Aliases

TypeScript configured with `@/*` pointing to `./src/*` for clean imports.

## Key Considerations

- Uses Tailwind v4 with CSS variables for theming
- Responsive design with fluid typography
- Video backgrounds supported in hero sections  
- Korean content with agricultural/sustainability focus
- Simple contact form API ready for integration
- Dark mode support via CSS variables