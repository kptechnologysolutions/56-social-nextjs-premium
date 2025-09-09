#!/bin/bash

echo "🚀 Deploying 56 Social to DreamHost..."
echo "====================================="

# Use rsync with password via SSH
export RSYNC_PASSWORD="Surf22$$"

echo "📦 Uploading files to DreamHost..."

# Create .htaccess locally first
cat > out/.htaccess << 'EOF'
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

ErrorDocument 404 /404.html

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
EOF

# Try deployment with expect
expect << 'DONE'
set timeout 300
spawn rsync -avz --delete out/ site56social@vps27305.dreamhostps.com:~/56social.com/
expect {
    "password:" {
        send "Surf22\$\$\r"
        exp_continue
    }
    "yes/no" {
        send "yes\r"
        exp_continue
    }
    eof
}
DONE

echo ""
echo "====================================="
echo "✅ Deployment complete!"
echo "====================================="
echo "Visit your site at:"
echo "1. http://vps27305.dreamhostps.com/~site56social/"
echo "2. https://56social.com (when DNS is ready)"
echo "====================================="