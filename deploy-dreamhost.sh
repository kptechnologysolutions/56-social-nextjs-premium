#!/bin/bash

# DreamHost Deployment Script for 56 Social
# Update these variables with your actual DreamHost credentials

# CONFIGURATION - Your DreamHost Settings
DREAMHOST_USER="site56social"
DREAMHOST_SERVER="vps27305.dreamhostps.com"
DREAMHOST_PATH="~/56social.com/"
DOMAIN="https://56social.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting 56 Social Deployment to DreamHost${NC}"
echo "======================================"

# Check if configuration is set
if [ "$DREAMHOST_USER" == "your-username" ]; then
    echo -e "${RED}❌ Error: Please update the DREAMHOST_USER in this script${NC}"
    exit 1
fi

# Step 1: Clean previous build
echo -e "${YELLOW}📦 Cleaning previous build...${NC}"
rm -rf out

# Step 2: Install dependencies (if needed)
echo -e "${YELLOW}📦 Checking dependencies...${NC}"
npm install

# Step 3: Build the static site
echo -e "${YELLOW}🔨 Building static site...${NC}"
npm run build:static

# Check if build was successful
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build failed! No 'out' directory found.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Step 4: Create .htaccess file in out directory
echo -e "${YELLOW}📝 Creating .htaccess file...${NC}"
cat > out/.htaccess << 'EOF'
# Enable rewrite engine
RewriteEngine On

# Redirect to HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

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
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
EOF

# Step 5: Deploy to DreamHost
echo -e "${YELLOW}🚀 Deploying to DreamHost...${NC}"
echo "Server: ${DREAMHOST_SERVER}"
echo "Path: ${DREAMHOST_PATH}"

# Use rsync to upload files
rsync -avz --delete \
    --exclude '.git' \
    --exclude 'node_modules' \
    --exclude '.env*' \
    out/ ${DREAMHOST_USER}@${DREAMHOST_SERVER}:${DREAMHOST_PATH}

# Check if rsync was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo "======================================"
    echo -e "${GREEN}🎉 Your site is now live at: ${DOMAIN}${NC}"
    echo "======================================"
else
    echo -e "${RED}❌ Deployment failed! Please check your credentials and try again.${NC}"
    exit 1
fi

# Optional: Open the site in browser
echo -e "${YELLOW}Opening site in browser...${NC}"
open ${DOMAIN} 2>/dev/null || xdg-open ${DOMAIN} 2>/dev/null || echo "Please visit ${DOMAIN} to see your site"