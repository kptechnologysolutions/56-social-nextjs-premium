# Files to Upload to DreamHost

## Upload EVERYTHING from the `out` folder:

From: `/Users/halpickus/Documents/Projects/56-social-nextjs-premium/out/`
To: The `56social.dreamhosters.com` folder on DreamHost

### Files and Folders to Copy:

**FILES (copy these):**
- ✅ `.htaccess` - IMPORTANT! This makes the site work properly
- ✅ `index.html` - Your homepage
- ✅ `404.html` - Error page
- ✅ `index.txt` - Text version
- ✅ `robots.txt` - For search engines
- ✅ `sitemap.xml` - For SEO

**FOLDERS (copy entire folders with all contents):**
- ✅ `_next/` folder - Contains all your JavaScript, CSS, and assets
- ✅ `images/` folder - All your images
- ✅ `404/` folder - Error page assets

## Step-by-Step Upload Instructions:

### If Using DreamHost File Manager:
1. Navigate into the `56social.dreamhosters.com` folder (or `56social.com`)
2. Look for an "Upload" button or "Upload Files" option
3. Select ALL the files and folders listed above
4. Upload them all

### If Using FileZilla:
1. On LEFT side: Navigate to `/Users/halpickus/Documents/Projects/56-social-nextjs-premium/out/`
2. On RIGHT side: Navigate into `56social.dreamhosters.com` folder
3. Select ALL files and folders (Cmd+A)
4. Drag from left to right or right-click > Upload

### IMPORTANT: 
- The `.htaccess` file might be hidden on Mac. Press `Cmd+Shift+.` to show hidden files
- Make sure you upload INTO the `56social.dreamhosters.com` folder, not next to it
- Upload ALL folders with their complete contents (especially `_next` and `images`)

## After Upload:
Your site should be accessible at:
- http://56social.dreamhosters.com
- Or if DNS is set up: https://56social.com

## Structure After Upload:
```
56social.dreamhosters.com/
├── .htaccess
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── index.txt
├── _next/
│   ├── static/
│   └── ... (all subfolders)
├── images/
│   ├── hero-bg.jpg
│   ├── logo.png
│   └── ... (all images)
└── 404/
    └── index.html
```

That's it! Copy everything from `out` folder to DreamHost!