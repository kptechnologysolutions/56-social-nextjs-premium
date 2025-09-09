# Fix Upload Location - DreamHost

## The Problem
Files are uploaded to the wrong location. They need to be in the PUBLIC web directory.

## In DreamHost File Manager:

### 1. Find Where You Uploaded Files
Look for these possible folders:
- `56social.com/` 
- `56social.dreamhosters.com/`
- Or wherever you put the files

### 2. Find the CORRECT Public Folder
Look for ONE of these folders (they should exist):
- `~/public_html/`
- `~/56social.com/public/`
- `~/www/`
- `~/site56social/`

### 3. Move Files to Correct Location

**Option A: If you see a `public_html` folder:**
- Move ALL files from where you uploaded them INTO `public_html/`

**Option B: If you see `56social.com` folder with a `public` subfolder:**
- Move ALL files INTO `56social.com/public/`

**Option C: If there's a message about where the web root is:**
- DreamHost often shows a note about which folder is the "web root"
- Move files there

## Quick Check in File Manager:

1. Go to the main/home directory for site56social
2. Look for these folders:
   ```
   /home/site56social/
   ├── 56social.com/      <-- Your files might be here
   │   └── public/        <-- But they need to be HERE
   ├── public_html/       <-- OR they need to be HERE
   └── logs/
   ```

3. The web-accessible folder is usually:
   - `public_html/` 
   - OR `[domain]/public/`
   - OR just `[domain]/`

## If You Can't Find the Right Folder:

In DreamHost Panel:
1. Go to "Manage Websites"
2. Find your site (56social.com)
3. Click "Manage" or settings
4. Look for "Web Directory" or "Document Root"
5. It will show you the exact path where files should go

## Common Paths:
- `/home/site56social/56social.com/public/`
- `/home/site56social/public_html/`
- `/home/site56social/56social.com/`

## After Moving Files:
Test at:
- http://vps27305.dreamhostps.com/~site56social/
- http://56social.com (if DNS is ready)