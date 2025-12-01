# Project Guidelines: The Chromatic Street

## 1. Project Overview
"The Chromatic Street" is a high-energy, "Neo-Brutalist" restaurant website for a SouthEast Asian fusion food brand. The design philosophy emphasizes bold color blocking, heavy black borders, hard drop shadows, and a "Lego-like" component structure.

**Key Aesthetics:**
- **Neo-Brutalism:** High contrast, raw layout, visible grids.
- **Pop-Art:** Vibrant colors, playful but rigid geometry.
- **Functionality:** Pure frontend, informational (no e-commerce/cart state), mobile-responsive.

## 2. Tech Stack
- **Framework:** React (Vite-based environment)
- **Styling:** Tailwind CSS v4.0
- **Routing:** `wouter` (Lightweight router)
- **Icons:** `lucide-react`
- **Data Management:** Centralized static content in `data/content.ts`

## 3. Design System & Tokens

### Colors
Defined in `data/content.ts` and applied via Tailwind classes.
- **Primary (Orange):** `#FF5722`
- **Secondary (Blue):** `#2962FF`
- **Highlight (Yellow):** `#FFEB3B`
- **Text:** `#1A1A1A` (Black), `#FFFFFF` (White)

### Typography
- **Font:** 'Poppins', sans-serif (Imported in `Layout.tsx`)
- **Weights:** Heavy usage of `font-black` (900) and `font-bold` (700).
- **Style:** Uppercase headings, tight tracking (`tracking-tighter`).

### UI Patterns
- **Borders:** `border-4 border-black` is the standard for structural elements.
- **Shadows:** Hard shadows implemented via Tailwind arbitrary values:
  - Default: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
  - Hover: `hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
  - Active: `active:translate-x-[8px] active:translate-y-[8px] active:shadow-none`
- **Buttons:** Rectangular, heavy borders, hard shadows, uppercase text.

## 4. Project Structure

```
/
├── components/
│   ├── figma/          # Utilities (ImageWithFallback)
│   ├── ui/             # ShadCN components (Generic UI)
│   ├── Layout.tsx      # Main app shell (Nav, Footer integration)
│   ├── Hero.tsx        # Landing page hero
│   ├── Feature.tsx     # Feature content block
│   ├── Story.tsx       # Story/About preview block
│   ├── MenuPreview.tsx # Home page menu teaser
│   └── Footer.tsx      # Site footer
├── data/
│   └── content.ts      # SINGLE SOURCE OF TRUTH for text/images/colors
├── lib/
│   └── utils.ts        # cn() helper for Tailwind class merging
├── pages/
│   ├── Home.tsx        # Landing page composition
│   ├── Menu.tsx        # Full menu page
│   └── About.tsx       # "Our Story" page
├── styles/
│   └── globals.css     # Global resets and Tailwind directives
└── App.tsx             # Main entry point & Routing
```

## 5. Coding Standards

### Data Driven
- **DO NOT** hardcode text or image URLs in components.
- **ALWAYS** import `siteContent` from `../data/content` and map data.
- This allows for easy global updates (e.g., changing a color or phone number).

### Styling
- Use **Tailwind Utility Classes** for everything.
- Avoid custom CSS unless absolutely necessary (e.g., scrollbars).
- Maintain the "Border & Shadow" interaction pattern on all clickable elements.

### Images
- Use `ImageWithFallback` from `../components/figma/ImageWithFallback` instead of `<img>`.
- Ensure all images have valid `alt` text from the data source.
- Use `object-cover` for containers to maintain aspect ratios without distortion.

### Routing
- Use `wouter` for routing.
- Define routes in `App.tsx`.
- Use `Link` component for internal navigation to avoid page reloads.

## 6. Extension Guidelines
When adding new pages or features:
1.  **Update Data:** Add the new content section to `data/content.ts`.
2.  **Create Page:** Create `pages/NewPage.tsx`.
3.  **Route:** Add route to `App.tsx`.
4.  **Link:** Update `navigation` in `data/content.ts` if it needs to appear in the menu.
