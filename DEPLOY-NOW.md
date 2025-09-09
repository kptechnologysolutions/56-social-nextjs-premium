# Deploy 56 Social to DreamHost - Final Steps

## Your Credentials (Confirmed):
- **Server**: `vps27305.dreamhostps.com`
- **Username**: `site56social`
- **Port**: `22`
- **Password**: [The one you created]

## Step 1: Build the Site
Run this command first:

```bash
npm run build:static
```

Wait for it to complete. You should see an `out` folder created.

## Step 2: Deploy Using the Script

Run the deployment script:

```bash
./deploy-dreamhost.sh
```

**When it asks for password**: Enter the password you created for site56social

## Step 3: Alternative - Manual Deployment

If the script has issues, deploy manually:

### Option A: Using Terminal
```bash
# Build first
npm run build:static

# Then upload (you'll be asked for password)
rsync -avz out/ site56social@vps27305.dreamhostps.com:~/56social.com/
```

### Option B: Using FileZilla (Visual)
1. Open FileZilla
2. Enter these settings:
   - **Host**: `sftp://vps27305.dreamhostps.com`
   - **Username**: `site56social`
   - **Password**: [your password]
   - **Port**: `22`
3. Click "Quickconnect"
4. Navigate to `56social.com` folder on the right side
5. Drag all files from your local `out` folder to the remote `56social.com` folder

## Step 4: Create .htaccess on Server

After uploading, you need to create an .htaccess file. 

### Using FileZilla:
1. Right-click in the `56social.com` folder
2. Create new file named `.htaccess`
3. Edit it and add:

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

# Custom error pages
ErrorDocument 404 /404.html
```

## Step 5: Verify Deployment

1. Visit: https://56social.com
2. If domain isn't ready, try: http://vps27305.dreamhostps.com/~site56social/

## Troubleshooting

### "Permission Denied" Error
- Make sure you're using the correct password
- Password is case-sensitive
- No spaces before/after password

### Site Not Loading
- Domain might take 4-48 hours to propagate if newly set up
- Try the direct server URL first

### Files Not Uploading
- Make sure you're in the `56social.com` directory
- Check that `out` folder was created by build command

## Quick Test Command
Test if your credentials work:
```bash
ssh site56social@vps27305.dreamhostps.com
# Enter password when prompted
# If successful, type: ls
# You should see: 56social.com
# Type: exit
```

## Ready to Deploy?

1. Run: `npm run build:static`
2. Run: `./deploy-dreamhost.sh`
3. Enter password when asked
4. Visit your site!

Your site will be live in minutes!