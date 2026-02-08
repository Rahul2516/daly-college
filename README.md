# Daly College - Frontend Implementation Challenge

A pixel-perfect, fully responsive implementation of the Daly College web design, built with React, Tailwind CSS, and GSAP. This project focuses on high performance, accessibility, and advanced interactive animations.

🔗 **Live Demo:** [Insert Your Netlify Production URL Here]

##  Key Features

### 1. Performance & Accessibility (Lighthouse 100)
- **Score:** Achieved **100/100** in Accessibility and Best Practices, with **96+** in Performance.
- **Optimization:** Implemented Code Splitting using `React.lazy` and `Suspense` to reduce the initial bundle size.
- **SEO:** Fully crawlable with proper meta tags and semantic HTML structure (`<main>`, `<article>`, `<section>`).

### 2. Advanced JavaScript (Widget Implementation)
- **Filterable Gallery (Moments Section):**
  - **URL Synchronization:** Filtering categories (Photo, Video, Print) updates the URL query parameters (e.g., `?gallery=Video`), allowing users to share specific views.
  - **State Management:** The app reads the URL on load to persist the active filter state.
  - **Animated Reflow:** Uses **GSAP** to smoothly animate the layout changes when filtering.

### 3. Animations & Interactions
- **GSAP Timelines:** Complex staggered entrance animations for the Hero text and buttons.
- **Scroll Triggers:** Section reveals and image parallax effects as the user scrolls.
- **Micro-interactions:** Interactive hover states on buttons, cards, and navigation arrows.
- **Mobile Responsive:** Custom mobile-specific animations and layout adjustments (e.g., Hero section stacking).

### 4. Responsiveness
- **Fluid Layout:** Supports all device sizes from **Mobile (360px)** to **Tablet (768px)** and **Desktop (1440px+)**.
- **Adaptive Components:**
  - *Hero Section:* Switches from a vertical stack on mobile to a full-screen overlay on desktop.
  - *Campus Infrastructure:* Transforms from a vertical accordion on mobile to a horizontal expandable gallery on desktop.

##  Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Animation:** GSAP (GreenSock Animation Platform)
- **Routing:** React Router DOM (for URL sync)
- **Icons:** React Icons

##  Setup & Installation

Follow these commands to run the project locally:

1. **Clone the repository:**
   ```bash
 git clone https://github.com/Rahul2516/daly-college.git
   cd daly-college-react