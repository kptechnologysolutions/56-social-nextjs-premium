# Deploy 56 Social Using FileZilla

## Your Site is Built and Ready!
The static files are in the `out` folder.

## FileZilla Deployment Steps:

### 1. Download FileZilla (if you don't have it)
- Download from: https://filezilla-project.org/download.php?type=client
- Install and open it

### 2. Connect to DreamHost

Enter these details in the top bar of FileZilla:

- **Host**: `sftp://vps27305.dreamhostps.com`
- **Username**: `site56social`
- **Password**: `Surf22$$`
- **Port**: `22`

Click **"Quickconnect"**

### 3. Navigate to Your Website Folder

On the RIGHT side (remote server):
1. You should see a folder called `56social.com`
2. Double-click to enter it
3. It should be empty or have a few default files

### 4. Upload Your Site

On the LEFT side (your computer):
1. Navigate to: `/Users/halpickus/Documents/Projects/56-social-nextjs-premium/out`
2. You should see files like `index.html`, folders like `_next`, etc.

**Select ALL files and folders in the `out` directory**
- Press Cmd+A to select all
- Right-click and choose "Upload"
- OR drag them to the right side

### 5. Wait for Upload
- FileZilla will show progress at the bottom
- This might take 2-5 minutes depending on your internet speed

### 6. Create .htaccess File

After upload is complete:
1. On the RIGHT side (in the 56social.com folder)
2. Right-click in empty space
3. Choose "Create new file"
4. Name it: `.htaccess` (with the dot!)
5. Right-click the new `.htaccess` file
6. Choose "View/Edit"
7. Add this content:

```apache
# Enable rewrite engine
RewriteEngine On

# Redirect to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ $1/ [L,R=301]

# Custom error pages
ErrorDocument 404 /404.html

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

8. Save and close the file
9. When asked to upload back to server, click "Yes"

### 7. Test Your Site!

Visit these URLs:
1. **Direct server URL** (works immediately):
   http://vps27305.dreamhostps.com/~site56social/

2. **Your domain** (if DNS is set up):
   https://56social.com

## What You Should See:
- Your 56 Social website with the European café theme
- All pages working
- Images loading properly

## Troubleshooting:

**Can't connect in FileZilla?**
- Make sure you're using `sftp://` prefix
- Try without the prefix: just `vps27305.dreamhostps.com`
- Make sure port is 22

**Site not showing?**
- Try the direct server URL first
- Make sure you uploaded files INTO the 56social.com folder, not next to it
- Check that .htaccess file was created

**Images not loading?**
- Check that the `images` folder was uploaded
- Look in `_next/static` folder - should have files there

## Quick File List Check:
After upload, you should have these in 56social.com folder:
- `.htaccess` (you created this)
- `index.html`
- `404.html` 
- `sitemap.xml`
- `robots.txt`
- `_next/` folder
- `images/` folder
- Any other files from the `out` folder

## Success!
Once uploaded, your site is live! The European café themed 56 Social site with all SEO optimizations will be running on DreamHost.