# 56 Social Next.js Premium - Complete Project Documentation

## Project Overview
This is the 56 Social restaurant website - a European-style café in Shaker Heights, Cleveland. The site emphasizes leisurely dining, high-quality ingredients, and Social Hour daily.

## What We Built

### Site Features
- **Modern Next.js 14 website** with static export for DreamHost
- **Mobile-responsive design** with proper scaling for all devices
- **European café aesthetic** with burgundy, espresso, and gold color scheme
- **SEO optimized** with sitemap, robots.txt, and structured data
- **Google Analytics** integration ready

### Key Sections
1. **Hero** - Large welcome section with call-to-action buttons
2. **Stats Bar** - 56+ menu selections, daily social hour, etc.
3. **Features** - 6 key features of the restaurant
4. **Story Section** - About the restaurant's history
5. **Menu Cards** - Visual menu categories
6. **Salads Showcase** - Customer favorites from original Cafe 56
7. **Social Hour** - Daily happy hour promotion
8. **Instagram Gallery** - Social media integration
9. **Catering Section** - Catering services
10. **Community/Testimonials** - Customer reviews
11. **Footer** - Contact info and links

## Changes Made Today

### 1. Removed All Emojis
- Cleaned up all decorative emojis from components
- Professional, clean look without emoji clutter

### 2. Mobile Responsiveness Fixed
- Adjusted all font sizes with responsive breakpoints (sm, md, lg, xl)
- Fixed Hero section text scaling
- Updated navigation for mobile
- Fixed grid layouts for mobile devices
- Proper button sizing on small screens

### 3. Content Updates
- Replaced "European-style" with more descriptive language
- Changed to "Leisurely Café & Market"
- Updated to "relaxed café where time slows down"
- More evocative descriptions without explicit European references

## Technical Stack

### Core Technologies
- **Next.js 14.2.5** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Static Export** - For DreamHost hosting

### File Structure
```
56-social-nextjs-premium/
├── app/
│   ├── page.tsx (main page)
│   ├── layout.tsx (root layout)
│   └── globals.css (global styles)
├── components/
│   ├── Hero.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FeaturesSection.tsx
│   ├── SocialHourSection.tsx
│   ├── InstagramGallery.tsx
│   └── ... (other components)
├── public/
│   └── images/ (all optimized images)
└── out/ (built static files for deployment)
```

## Deployment Information

### DreamHost Hosting
- **URL**: http://56social.dreamhosters.com
- **Server**: vps27305.dreamhostps.com
- **Username**: site56social
- **Password**: Surf22$$
- **Upload Location**: 56social.dreamhosters.com folder

### GitHub Repository
- **URL**: https://github.com/kptechnologysolutions/56-social-nextjs-premium
- **Branch**: main
- **Public repository** with all code and documentation

## Development Commands

### Local Development
```bash
# Start development server
npm run dev
# Visit: http://localhost:3000
```

### Building for Production
```bash
# Build static site for DreamHost
npm run build:static
# Files will be in 'out' folder
```

### Deployment Process
1. Make changes locally
2. Test at http://localhost:3000
3. Build: `npm run build:static`
4. Upload 'out' folder contents to DreamHost via FileZilla
5. Push to GitHub: `./push-to-github.sh`

## FileZilla Settings
- **Host**: sftp://vps27305.dreamhostps.com
- **Username**: site56social
- **Password**: Surf22$$
- **Port**: 22
- **Remote Directory**: 56social.dreamhosters.com

## Common Tasks

### Adding New Images
1. Add to `public/images/`
2. Use in components: `src="/images/filename.jpg"`
3. Always include alt text for SEO

### Updating Menu Content
- Edit `components/MenuCards.tsx` for menu categories
- Edit `components/SaladsShowcase.tsx` for salad items
- Edit `components/MenuSection.tsx` for full menu

### Changing Colors
Edit color variables in `app/globals.css`:
```css
--burgundy: #8b2635;
--gold: #f4b942;
--espresso: #3e2723;
--cafe-brown: #9b7653;
--olive-green: #7d9d3a;
```

### Updating Contact Info
- Edit `components/Hero.tsx` for main contact
- Edit `components/Footer.tsx` for footer contact

## Troubleshooting

### Site Not Loading on DreamHost
1. Check files are in correct folder (56social.dreamhosters.com)
2. Ensure .htaccess file exists
3. Clear browser cache

### Can't Connect to DreamHost
1. SSH may take 30 minutes to activate after enabling
2. Use FileZilla with SFTP as backup
3. Check DreamHost panel for status

### GitHub Push Issues
1. Run: `gh auth status` to check authentication
2. If issues: `gh auth login` and grant repo permissions
3. Use `./push-to-github.sh` for easy pushing

## SEO Checklist
- ✅ Sitemap at /sitemap.xml
- ✅ Robots.txt configured
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Structured data for restaurant
- ✅ Alt text on all images
- ✅ Mobile-responsive design
- ✅ Fast loading with optimized images

## Support Documentation
All `.md` files in the project root contain specific instructions:
- FILEZILLA-DEPLOY.md - FileZilla upload guide
- DREAMHOST-FIX.md - Troubleshooting connection issues
- SITE-URLS.md - URLs to access the site
- UPLOAD-THESE-FILES.md - What files to upload
- SEO-CHECKLIST.md - SEO optimization tasks

## Future Updates
When making updates:
1. Always test locally first
2. Build static files before deploying
3. Keep GitHub repository updated
4. Test on mobile devices
5. Check that Social Hour times are current

## Contact for Issues
- GitHub Issues: https://github.com/kptechnologysolutions/56-social-nextjs-premium/issues
- Local development issues: Check console for errors
- Deployment issues: Refer to deployment .md files

---
Last Updated: September 8, 2025
Built with Next.js 14 and deployed to DreamHost