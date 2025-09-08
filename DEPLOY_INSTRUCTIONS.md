# 🚀 Deploy Your Updates to Vercel

Your changes are committed and ready to deploy!

## Quick Deploy Steps:

### Option 1: Via Terminal (Recommended)
```bash
# 1. Login to Vercel (choose your preferred method)
npx vercel login

# 2. Deploy to production
npx vercel --prod
```

When prompted:
- Set up and deploy: Y
- Which scope: (select your account)
- Link to existing project: Y
- Project name: 56-social-cleveland

### Option 2: Via Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Find "56-social-cleveland" project
3. Click "..." menu → "Redeploy"
4. Choose "Production"

### Option 3: Connect GitHub for Auto-Deploy
1. Create GitHub repo:
   ```bash
   gh auth login
   gh repo create 56-social-nextjs --private --source=. --push
   ```

2. Go to Vercel Dashboard
3. Click on "56-social-cleveland"
4. Settings → Git → Connect GitHub repo
5. Future pushes will auto-deploy

## What's Included in This Deploy:
✅ YouTube video integration (ID: 0Mudx4oyM7Q)
✅ Larger video display (500px-900px height)
✅ Both founders' names (Jay Leitson & Izzy Schachner)
✅ Optimized 56_Social_Inside.jpg image
✅ All image optimizations (8MB → 1MB)

## Verify Deployment:
After deploying, check: https://56-social-cleveland.vercel.app/

The video should autoplay when you scroll to it!