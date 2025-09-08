# Claude Instructions for 56 Social Website

## Project Overview
This is the 56 Social Mediterranean Restaurant website built with Next.js 15.5.2, React, and TypeScript. The site features a modern, responsive design with a green (#7d9d3a) and orange (#c47d5a) color scheme representing the Mediterranean theme.

## Project Location
- **Path**: `/Users/halpickus/Documents/Projects/56-social-nextjs-premium`
- **Live Site**: https://56-social-nextjs.vercel.app/
- **Local Development**: http://localhost:3000

## Tech Stack
- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Montserrat (Google Fonts), Crimson Text for headings
- **Deployment**: Vercel

## Key Features Implemented

### 1. Image Slider Hero Section
- Auto-rotating carousel with 4 restaurant images
- 5-second intervals between slides
- Smooth fade transitions
- Manual slide selection with indicators
- Images used:
  - `/images/56-social-restaurant-interior-shaker-heights.jpg`
  - `/images/56-social-dining-room-mediterranean-restaurant.jpg`
  - `/images/56-social-outdoor-seating-patio.jpg`
  - `/images/56-social-family-dining-shaker-heights.jpg`

### 2. Video Background Section
- High-quality video display in "Experience 56 Social" section
- Video files:
  - Primary: `/images/56-social-restaurant-high-quality.mov` (17MB)
  - Fallback: `/images/56-social-restaurant-ambiance.mp4` (18MB)
- No quality-degrading filters
- Subtle overlay for text contrast
- Poster image for loading state

### 3. Branding
- Logo: `/images/56-social-logo.png` displayed in header
- Color Scheme:
  - Primary Green: #7d9d3a
  - Primary Orange/Brown: #c47d5a
  - Gold Accent: #c8a574
  - Blue sections: #3a4d6b to #2a3d5b gradient

### 4. Content Sections
- Top banner announcing J. Pistone Legacy location
- Hero with image slider
- Experience section with video background
- 25+ Years of Culinary Excellence story
- Menu showcase (Signature Salads, Warm Bowls)
- Customer Favorites image gallery
- Instagram feed integration
- Catering services
- Community testimonials
- Contact and location information

## Restaurant Information
- **Name**: 56 Social
- **Tagline**: "Fast Casual Mediterranean"
- **Address**: 3245 Warrensville Center Road, Shaker Heights, OH
- **Phone**: (440) 684-5600
- **Email**: social@56restaurants.com
- **Hours**: 
  - Monday-Thursday: 4PM - 11PM
  - Friday-Saturday: 4PM - 2AM
  - Sunday: 11AM - 10PM

## Development Commands

### Start Development Server
```bash
cd /Users/halpickus/Documents/Projects/56-social-nextjs-premium
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Clean Install (if issues arise)
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## Common Issues & Solutions

### 1. Server Compilation Errors
If you see manifest or cache errors:
```bash
rm -rf .next node_modules/.cache
npm run dev
```

### 2. Video Quality Issues
- Ensure using the high-quality MOV file (56-social-restaurant-high-quality.mov)
- No opacity or brightness filters should be applied
- Video should have subtle overlay only for text contrast

### 3. Logo Not Displaying
- Check that `/images/56-social-logo.png` exists in public folder
- Logo should be 64px height (h-16 class)

## File Structure
```
56-social-nextjs-premium/
├── app/
│   ├── layout.tsx          # Root layout with Montserrat font
│   ├── page.tsx           # Main homepage with all sections
│   └── globals.css        # Global styles and Tailwind imports
├── components/
│   └── Header.tsx         # Navigation header component
├── public/
│   └── images/           # All images and videos
│       ├── 56-social-logo.png
│       ├── 56-social-restaurant-high-quality.mov
│       └── [various restaurant images]
├── package.json
└── CLAUDE.md             # This file
```

## Menu Items Data
The site includes two main menu categories:

### Signature Salads
- The Original 56 ($12.95)
- Mediterranean Classic ($13.95)
- Harvest Cobb ($15.95)
- Asian Sesame ($13.95)

### Warm Bowls
- Southwest Fiesta ($14.95)
- Power Protein ($16.95)

## Important Notes

### Image Assets
All images are stored in `/public/images/`. Key images include:
- Restaurant interior and exterior shots
- Food photography
- Instagram content
- Logo and branding materials

### Video Assets
- High-quality video: `56-social-restaurant-high-quality.mov` (17MB)
- Compressed fallback: `56-social-restaurant-ambiance.mp4` (18MB)

### State Management
- Uses React hooks (useState, useEffect)
- Image slider state for current slide
- Scroll state for header styling

### SEO Considerations
- Metadata configured in layout.tsx
- Descriptive alt tags for all images
- Semantic HTML structure
- Mobile-responsive design

## Related Projects
This is part of the 56 Restaurant Group portfolio:
- 56 Kitchen (2 locations)
- Elle (upscale French-Italian)
- Birdigo (chicken & custard)
- 56 Tavern

## Deployment
The site is deployed on Vercel at https://56-social-nextjs.vercel.app/

To deploy updates:
1. Push changes to GitHub repository
2. Vercel automatically deploys from main branch
3. Or use Vercel CLI: `vercel --prod`

## Contact for Issues
For any issues or questions about this codebase, refer to this documentation first. The site follows standard Next.js patterns with TypeScript and Tailwind CSS.

## Last Updated
- Date: September 7, 2025
- Latest features: Image slider, video optimization, logo integration
- Claude Assistant: Successfully configured all features as requested