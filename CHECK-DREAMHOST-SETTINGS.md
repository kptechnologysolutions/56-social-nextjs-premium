# Check DreamHost Web Directory Settings

## In DreamHost Panel:

### 1. Go to "Manage Websites"
- Find your site (56social.com or 56social.dreamhosters.com)
- Click "Manage" or the settings button

### 2. Look for "Web Directory" or "Document Root"
- This tells you EXACTLY where files should go
- It might say something like:
  - `/home/site56social/56social.com`
  - `/home/site56social/public_html`
  - `/home/site56social/56social.dreamhosters.com/public`

### 3. Check the Domain Name
- What domain name is actually set up?
- Is it `56social.com` or something else?

### 4. Check "Remove WWW" Setting
- Make sure the domain is configured correctly

## Alternative Test:
Since the ~site56social URL isn't working, try:

1. **Direct Domain Access:**
   - http://56social.com
   - http://www.56social.com

2. **Create a Subdomain:**
   In DreamHost Panel:
   - Add Hosting > Add Subdomain
   - Create: test.56social.com
   - Point it to where your files are

## The Issue:
The `~site56social` URL should work if files are in `/home/site56social/` but it's not. This means either:
1. The web directory is set to a different location
2. The user directory serving is disabled
3. Files need to be in a specific subfolder

## What to Look For in Panel:
When you click on your site in "Manage Websites", screenshot or tell me:
- Web Directory path
- Domain name
- PHP version (if shown)
- Any error messages