# Complete DreamHost Setup Guide - From Zero to Deployed

## Part 1: Domain Setup Options

### Option A: If You Own 56social.com Already

**If domain is registered elsewhere (GoDaddy, Namecheap, etc.):**
1. You'll need to point it to DreamHost
2. Skip to "Part 2" to set up hosting first
3. Then update nameservers at your registrar

**If domain is registered at DreamHost:**
1. It's already pointing to DreamHost
2. Continue to Part 2

### Option B: If You DON'T Own 56social.com

**Register it at DreamHost:**
1. Go to **"Domains"** → **"Registrations"**
2. Search for `56social.com`
3. Add to cart and purchase
4. Continue to Part 2

**OR use a temporary subdomain for testing:**
1. Use `56social.yourdreamhostdomain.com`
2. Or use the free `.dreamhosters.com` subdomain
3. Continue to Part 2

---

## Part 2: Create Hosting & User Account

### Step 1: Log into DreamHost Panel
1. Go to: https://panel.dreamhost.com
2. Sign in

### Step 2: Add Hosting for Your Domain

1. In left sidebar, click **"Domains"** → **"Manage Domains"**
2. Click the blue button **"Add Hosting to a Domain / Sub-Domain"**

### Step 3: Configure Domain Hosting

Fill in these fields:

1. **Domain to host**: 
   - Enter: `56social.com` 
   - OR for testing: `56social.dreamhosters.com`

2. **Choose a user**: 
   - Select **"Create a New User"**
   - Username: `site56social` (or whatever you want)
   - Password: [Choose strong password]
   - **WRITE THIS DOWN!**

3. **Web directory**: 
   - Leave as default: `/home/site56social/56social.com`
   - This will be created automatically

4. **Options**:
   - ✅ HTTPS (Check this!)
   - ✅ WWW redirect (your choice)

5. Click **"Fully host this domain"** button

6. **WAIT**: It takes 5-30 minutes to set up

---

## Part 3: Enable SSH/SFTP Access

### Step 1: Upgrade User to SSH
1. Go to **"FTP & SSH"** → **"Manage Users"**
2. Find your new user (`site56social`)
3. Click **"Edit"** button
4. Under **"User Type"**, select **"Shell user - allows SSH/SFTP"**
5. Under **"Shell Type"**, select **"/bin/bash"**
6. Click **"Save Changes"**
7. **WAIT**: 5-10 minutes for activation

---

## Part 4: Find Your Credentials

### While waiting, gather your info:

1. Go to **"FTP & SSH"** → **"Manage Users"**
2. Find your user row
3. Note these details:

```
CREDENTIAL CHECKLIST:
====================
✅ Username: site56social (or what you chose)
✅ Password: [what you set earlier]
✅ Server: [shown in Server column, like: iad1-shared-a1-23.dreamhost.com]
✅ Domain: 56social.com
✅ Full Path: /home/site56social/56social.com/
✅ SSH Port: 22
✅ SFTP Enabled: Yes
```

### Can't see the server?
1. Click **"Show Info"** next to your username
2. Or go to **"Websites"** → Find your domain → **"Show Info"**

---

## Part 5: Test Your Connection

### Test with Terminal/Command Line:

```bash
# Test SSH connection
ssh site56social@your-server.dreamhost.com

# Enter password when prompted
# Once connected, you should see:
[site56social@server]$ 

# Check your directory exists:
ls
# Should show: 56social.com

# Navigate to it:
cd 56social.com
ls
# Should be empty or have default files

# Exit:
exit
```

### Test with FTP Client:
1. Open FileZilla (or any FTP client)
2. Quick connect with:
   - Host: `sftp://your-server.dreamhost.com`
   - Username: `site56social`
   - Password: [your password]
   - Port: `22`

---

## Part 6: Update Deployment Script

Now edit `deploy-dreamhost.sh`:

```bash
# Open in text editor
nano deploy-dreamhost.sh

# Update these lines with YOUR info:
DREAMHOST_USER="site56social"
DREAMHOST_SERVER="iad1-shared-a1-23.dreamhost.com"  # Your actual server
DREAMHOST_PATH="~/56social.com/"
DOMAIN="https://56social.com"  # Or your test domain
```

Save and exit (Ctrl+X, then Y, then Enter)

---

## Part 7: Deploy Your Site!

### First, create environment file:
```bash
# Create .env.local with any settings
echo "NEXT_PUBLIC_SITE_URL=https://56social.com" > .env.local
```

### Then deploy:
```bash
# Make sure script is executable
chmod +x deploy-dreamhost.sh

# Run deployment
./deploy-dreamhost.sh
```

---

## Part 8: Point Your Domain (If Registered Elsewhere)

If 56social.com is at GoDaddy, Namecheap, etc:

### Update Nameservers to:
```
ns1.dreamhost.com
ns2.dreamhost.com
ns3.dreamhost.com
```

### At your registrar (GoDaddy example):
1. Log into GoDaddy
2. Go to "My Domains"
3. Click on 56social.com
4. Click "Manage DNS"
5. Click "Change Nameservers"
6. Choose "Custom"
7. Enter DreamHost nameservers
8. Save

**Note**: DNS changes take 4-48 hours to propagate

---

## Quick Troubleshooting

### "Connection Refused" or Can't Connect
- Wait 30 minutes after creating user
- Verify SSH is enabled
- Check server address is correct
- Try without 'sftp://' prefix

### "Permission Denied"
- Password is case-sensitive
- No spaces before/after password
- Try resetting password in panel

### Site Not Loading
- DNS can take 4-48 hours if you just pointed domain
- Check files uploaded to correct directory
- Verify .htaccess file exists

### Using Temporary Domain for Testing
While waiting for DNS:
1. DreamHost gives you: `56social.dreamhosters.com`
2. Update deployment script with temp domain
3. Deploy and test
4. Switch to real domain later

---

## Complete Example with Fictional Data

Let's say you set up everything and got:
```bash
# Your credentials:
Username: site56social
Password: MyStr0ngP@ss
Server: iad1-shared-b2-15.dreamhost.com
Path: /home/site56social/56social.com/

# Update deploy-dreamhost.sh:
DREAMHOST_USER="site56social"
DREAMHOST_SERVER="iad1-shared-b2-15.dreamhost.com"
DREAMHOST_PATH="~/56social.com/"

# Deploy:
./deploy-dreamhost.sh
```

---

## Support Scripts

### Quick Test Script
Create `test-connection.sh`:
```bash
#!/bin/bash
echo "Testing DreamHost connection..."
ssh site56social@your-server.dreamhost.com "ls -la ~/56social.com/"
```

### Manual Upload Commands
If script fails, try manually:
```bash
# Build site
npm run build:static

# Upload with rsync
rsync -avz out/ site56social@server.dreamhost.com:~/56social.com/

# Or with scp (slower)
scp -r out/* site56social@server.dreamhost.com:~/56social.com/
```

---

## Final Checklist

Before deploying:
- [ ] Domain is set up in DreamHost panel
- [ ] User is created with SSH access
- [ ] You have username, password, server
- [ ] SSH connection tested successfully
- [ ] Deployment script updated with credentials
- [ ] .env.local created if needed

After deploying:
- [ ] Check site loads at your domain
- [ ] Test all pages work
- [ ] Check images load
- [ ] Test on mobile
- [ ] Submit to Google Search Console

---

## Get Help

**DreamHost Support Chat:**
"Hi, I just set up hosting for 56social.com and created user 'site56social'. Can you confirm:
1. The server I should connect to for SFTP
2. That SSH is enabled for this user
3. The correct path for uploading my website files"

**They'll respond with exactly what you need!**