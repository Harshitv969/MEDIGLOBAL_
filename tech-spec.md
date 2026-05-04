# MediGlobal — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | React DOM renderer |
| vite | ^5.0.0 | Build tool (project requirement) |
| @vitejs/plugin-react | ^4.2.0 | Vite React plugin |
| typescript | ^5.3.0 | Type safety |
| tailwindcss | ^3.4.0 | Utility CSS |
| gsap | ^3.12.0 | Animation engine + ScrollTrigger + SplitText |
| three | ^0.160.0 | WebGL halftone fluid background |
| @types/three | ^0.160.0 | Three.js type definitions |

**Note**: GSAP SplitText and all GSAP plugins are now free as of 2025. Register them with `gsap.registerPlugin(...)`.

**Fonts**: Bodoni Moda and DM Sans loaded via Google Fonts `<link>` in `index.html`. No npm font packages needed.

---

## Component Inventory

### Layout

| Component | Source | Reuse |
|-----------|--------|-------|
| Navbar | Custom | Single instance, fixed position. Scroll-triggered glassmorphism transition. |
| Footer | Custom | Single instance. |
| SmoothScrollProvider | Custom | Wraps entire app. Provides lerped scroll offset via transform. Disables on mobile (native scroll). |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Contains HalftoneFluid canvas + RingCounter + SplitText title. NOT pinned. |
| IntroSection | Custom | Simple centered text block. |
| ServicesGrid | Custom | 2-column card grid. |
| FeatureHighlights | Custom | 3-column on navy bg. Static SVG/CSS halftone pattern blocks. |
| CandidateClientSplit | Custom | 2-column with background images and overlay. |
| HowItWorks | Custom | 4-step horizontal flow with animated connecting lines. |
| Testimonials | Custom | 3 testimonial cards on navy bg. |
| ContactCTA | Custom | Centered contact info with icons. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| PillButton | Custom | Navbar, Hero, CandidateClientSplit, ContactCTA. Variants: filled (white/navy), outline (white border), navy-filled. |
| ServiceCard | Custom | ServicesGrid. Image + overlay + text. |
| TestimonialCard | Custom | Testimonials. Quote + attribution. |
| ScrollReveal | Custom | All sections. Wraps GSAP ScrollTrigger fade+translateY pattern. |

### WebGL / Animation Systems

| Component | Source | Notes |
|-----------|--------|-------|
| HalftoneFluid | Custom (Three.js) | Hero background only. Concentric dot rings with ripple. Lifecycle managed via IntersectionObserver. |
| RingCounter | Custom (GSAP) | Two-digit odometer with auto-advance. Scroll-linked opacity fade. |
| AnimatedNav | Custom (GSAP ScrollTrigger) | Navbar background transition on scroll. |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Halftone fluid background (dot rings, rotation, ripple) | Three.js raw | Custom ShaderMaterial with vertex/fragment shaders. Ring lines + dot Points meshes. Pointer-driven ripple uniform. | **High** 🔒 |
| Ring counter digit transitions | GSAP + CSS | Odometer-style: clone digit span, animate old out (translateY -100%) and new in (translateY 0) with CSS transitions triggered via JS class toggling. | **Medium** |
| Ring counter auto-advance | Vanilla JS | setTimeout loop with 3-8s random interval. Wrap 99→00. | Low |
| Ring counter scroll fade | GSAP ScrollTrigger | scrub-linked opacity tween on hero scroll progress. | Low |
| Hero title SplitText | GSAP SplitText + ScrollTrigger | Split into chars/words. Per-char translateY(100%→0) + opacity stagger. | **Medium** |
| Navbar scroll glassmorphism | GSAP ScrollTrigger | scrub tween on background-color and backdrop-filter after 100px scroll. | Low |
| Scroll-triggered reveals (global) | GSAP ScrollTrigger | Reusable pattern: opacity 0→1, translateY(30-50px)→0, stagger 0.1-0.15s. | Low |
| Service card hover (image scale) | CSS transitions | scale(1→1.04) on image, overlay opacity shift. Pure CSS. | Low |
| How It Works connecting lines | GSAP ScrollTrigger | scaleX(0→1) on lines as steps appear. | Low |
| Feature highlight halftone blocks | CSS/SVG | Static randomly-generated dot patterns (no WebGL). Each column different seed. | Low |
| Button/link hover states | CSS transitions | Underline scaleX, background-color swap. Pure CSS. | Low |
| Smooth scroll | Custom (Vanilla JS) | Wheel/touch event listener, lerped offset variable (0.1 factor), applied via transform: translate3d. Mobile uses native. | Low |
| Footer/content fade-in | GSAP ScrollTrigger | Standard scroll reveal pattern. | Low |

---

## State & Logic

### HalftoneFluid Lifecycle

The Three.js renderer runs continuously via `requestAnimationFrame`. To avoid GPU waste:
- Use `IntersectionObserver` on the hero container.
- When hero is not visible: pause the rAF loop (store rAF ID, cancel it).
- When hero re-enters viewport: resume the loop.
- On unmount (React cleanup): dispose geometries, materials, renderer; remove event listeners.

### SmoothScroll Architecture

The smooth scroll system must NOT use a React state-driven approach (would cause re-renders on every frame). Instead:
- Store scroll offset in a `ref`.
- Apply `transform: translate3d(0, offset, 0)` directly to the DOM content container via refs.
- Sync with GSAP ScrollTrigger by calling `ScrollTrigger.scrollerProxy()` to tell GSAP how to read/write scroll position.
- On mobile (detect via `matchMedia` or touch capability check): bypass smooth scroll entirely, use native. GSAP ScrollTrigger works with native scroll automatically.

### RingCounter Timing

The counter uses `setTimeout` for auto-advance with random intervals. In React:
- Store timeout ID in a ref for cleanup.
- Start the loop in a `useEffect` with cleanup that clears the timeout.
- The initial 5s delay and subsequent 3-8s random intervals are managed within the same recursive function.

---

## Other Key Decisions

**Raw Three.js over R3F**: The halftone effect is a single isolated canvas in the hero with custom ShaderMaterials. R3F adds unnecessary abstraction and bundle size for this use case. Raw Three.js gives direct control over the render loop, disposal, and pointer events.

**No shadcn/ui**: This is a fully custom design with no standard UI patterns (no forms, dialogs, tables, dropdowns). All components are custom-built. shadcn/ui would add unused infrastructure.

**ScrollSmoother not used**: The design specifies a custom lerped smooth scroll implementation. GSAP ScrollSmoother is a paid plugin and the custom implementation is sufficient. The custom approach also gives direct control over the mobile fallback.

**Vite as build tool**: Required by the design specification. All tooling configured around Vite.
