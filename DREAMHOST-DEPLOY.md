# DreamHost Deployment Guide for 56 Social

## Prerequisites
- DreamHost hosting account (Shared, VPS, or Dedicated)
- FTP/SFTP access or SSH access to your DreamHost server
- Domain configured in DreamHost panel

## Step 1: Build the Static Site

Run this command in your project directory:

```bash
npm run build:static
```

This will create an `out/` directory with all static files.

## Step 2: Upload to DreamHost

### Option A: Using FTP/SFTP (Easier)

1. Use an FTP client (FileZilla, Cyberduck, etc.)
2. Connect to your DreamHost server:
   - Host: `ftp.yourdomain.com` or your DreamHost server
   - Username: Your DreamHost FTP username
   - Password: Your FTP password
   - Port: 22 (for SFTP) or 21 (for FTP)

3. Navigate to your domain's directory:
   - Usually `/home/username/yourdomain.com/`

4. Upload the entire contents of the `out/` folder to the public directory
   - Don't upload the `out` folder itself, just its contents

### Option B: Using SSH and rsync (Faster)

1. First, build the site:
```bash
npm run build:static
```

2. Then sync to DreamHost:
```bash
rsync -avz --delete out/ username@server.dreamhost.com:~/56social.com/
```

Replace:
- `username` with your DreamHost username
- `server.dreamhost.com` with your actual server
- `56social.com` with your domain directory

### Option C: Using Git (Advanced)

1. SSH into your DreamHost server
2. Clone your repository
3. Run the build on the server:
```bash
cd ~/56social.com
git pull
npm install
npm run build:static
cp -r out/* .
```

## Step 3: Configure DreamHost

### Set up .htaccess for proper routing

Create a `.htaccess` file in your domain root with:

```apache
# Enable rewrite engine
RewriteEngine On

# Redirect to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Redirect www to non-www (or vice versa)
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ $1/ [L,R=301]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Custom error pages
ErrorDocument 404 /404.html

# Caching for performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

## Step 4: Set Up Environment Variables

Since this is a static export, environment variables need to be set at build time.

1. Create `.env.local` file before building:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://56social.com
```

2. Then build:
```bash
npm run build:static
```

## Step 5: Verify Deployment

1. Visit your domain
2. Check that all pages load correctly
3. Test navigation
4. Verify images are loading
5. Check mobile responsiveness

## Automated Deployment Script

Create a `deploy-dreamhost.sh` script:

```bash
#!/bin/bash

# Configuration
DREAMHOST_USER="your-username"
DREAMHOST_SERVER="server.dreamhost.com"
DREAMHOST_PATH="~/56social.com/"

# Build the site
echo "Building static site..."
npm run build:static

# Deploy to DreamHost
echo "Deploying to DreamHost..."
rsync -avz --delete out/ ${DREAMHOST_USER}@${DREAMHOST_SERVER}:${DREAMHOST_PATH}

echo "Deployment complete!"
echo "Visit https://56social.com to see your site"
```

Make it executable:
```bash
chmod +x deploy-dreamhost.sh
```

Then deploy with:
```bash
./deploy-dreamhost.sh
```

## Important Notes

1. **Static Export Limitations**:
   - No server-side features (API routes, dynamic routes)
   - All content is pre-rendered at build time
   - Forms need external services (Formspree, Netlify Forms, etc.)

2. **Updates**:
   - Any content changes require rebuilding and redeploying
   - Consider using GitHub Actions for automated deployments

3. **Performance**:
   - Enable DreamHost's CloudFlare integration for CDN
   - Use DreamHost's caching options

4. **SSL Certificate**:
   - Enable Let's Encrypt SSL in DreamHost panel
   - It's free and automatic

## Troubleshooting

- **404 errors**: Check .htaccess configuration
- **Images not loading**: Verify paths are relative
- **Styles broken**: Check that CSS files uploaded correctly
- **Slow loading**: Enable caching and compression

## Support

For DreamHost-specific issues:
- DreamHost Support: https://help.dreamhost.com
- DreamHost Panel: https://panel.dreamhost.com

For site issues:
- Check browser console for errors
- Verify all files uploaded correctly
- Test in incognito/private mode