# Move Files to Correct Location

## Current Problem:
Your files are in: `/home/site56social/56social.dreamhosters.com/`
But this folder is NOT publicly accessible!

## Solution - Move Files:

### Option 1: Check if there's a PUBLIC folder inside
1. Click on the `56social.dreamhosters.com` folder to open it
2. Look for a `public/` or `public_html/` folder INSIDE
3. If it exists, move all your files INTO that public folder

### Option 2: Move files UP one level
Since you're in `/home/site56social/`, the files might need to be directly in this home folder for the ~site56social URL to work.

1. Go back to `/home/site56social/` (you're there now)
2. Select all files INSIDE `56social.dreamhosters.com/` folder
3. Move them directly to `/home/site56social/` (the current folder you see)

### Option 3: Look for existing index.html
Check if there's already an `index.html` file somewhere that says "Site coming soon" - that's where your files should go!

## Steps in File Manager:
1. Click on `56social.dreamhosters.com` folder to enter it
2. Select all your uploaded files (index.html, _next folder, images folder, etc.)
3. Click "Move" or "Cut"
4. Navigate back to `/home/site56social/`
5. Paste the files there

## After Moving:
The site should work at:
```
http://vps27305.dreamhostps.com/~site56social/
```

## File Structure Should Be:
```
/home/site56social/
├── index.html          <-- Your files should be HERE
├── 404.html           <-- Not inside a subfolder
├── .htaccess
├── robots.txt
├── sitemap.xml
├── _next/
├── images/
└── 56social.dreamhosters.com/  <-- This folder can stay but should be empty
```

The key is: files need to be directly in `/home/site56social/` for the ~site56social URL to work!