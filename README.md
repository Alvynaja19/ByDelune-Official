# BYDELUNE: Quiet Luxury Storefront

ByDelune is a curated e-commerce storefront for everyday wardrobe essentials, built with architectural precision, ethical textiles, and disciplined minimalism.

Designed following the **Quiet Editorial** design system.

## Features

- **Quiet Editorial Aesthetics**: Monochromatic warm palette, Geist typography, 4px sharp radius, and 1px hairline dividers without drop shadows or heavy blurs.
- **Wishlist System**: Real-time bookmarking on product cards with synced counter badges and dedicated wishlist drawer.
- **Dynamic Catalog Filter**: Category filtering for New Arrivals (All, Clothing, Footwear, Accessories).
- **Instant Search**: Lightweight catalog search modal with live query matching.
- **Responsive Layout**: Fluid experience optimized from mobile devices (tap targets >= 44px) up to 1360px desktop grid.
- **Shopee Direct Storefront Integration**: Integrated with the [ByDelune Official Shopee Store](https://s.shopee.co.id/2VrCqjmv7l) for seamless checkout, buyer protection, and courier tracking.
- **Accessible & Lightweight**: Pure HTML, Vanilla CSS, and JavaScript with zero external runtime dependencies.

## Project Structure

```
ByDelune/
├── index.html        # Semantic HTML5 structure & SEO metadata
├── css/
│   └── styles.css    # Design tokens & component styles
├── js/
│   └── app.js        # Interactive drawers, wishlist, and filter logic
├── DESIGN.md         # Quiet Editorial design tokens and guidelines
└── README.md
```

## Running Locally

You can serve this project with any local HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .
```

Open `http://localhost:8080` in your browser.
