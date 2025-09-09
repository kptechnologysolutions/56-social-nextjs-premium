# DreamHost Step-by-Step Guide to Find Your Credentials

## Step 1: Log into DreamHost Panel

1. Go to: https://panel.dreamhost.com
2. Enter your email and password
3. Click "Sign In"

---

## Step 2: Find Your Domain Setup

### Check if your domain is already set up:

1. In the left sidebar, click **"Domains"** → **"Manage Domains"**
2. Look for `56social.com` (or your domain) in the list
3. If it's there, note which user it's under (shown in the "Web Hosting" column)

### If domain is NOT set up yet:

1. Click **"Add Hosting to a Domain / Sub-Domain"**
2. Enter your domain: `56social.com`
3. Select or create a user (remember this username!)
4. Leave directory as default or set to `/home/username/56social.com`
5. Click **"Fully host this domain"**

---

## Step 3: Find Your FTP/SFTP Credentials

### Method A: From Websites Section

1. In left sidebar, click **"Websites"**
2. Find your domain (56social.com)
3. Click **"Show Info"** button
4. You'll see:
   - **Username**: Something like `dh_abc123`
   - **Server**: Something like `server.dreamhost.com`
   - **Path**: Something like `/home/dh_abc123/56social.com`

### Method B: From FTP Users Section

1. In left sidebar, go to **"FTP & SSH"** → **"Manage Users"**
2. Find your user in the list
3. Click **"Show Info"** next to your username
4. Note down:
   - **Username**: Your FTP username
   - **Server**: Listed as "Server" or "Machine"
   - **Type**: Should be SFTP/SSH or FTP

---

## Step 4: Get Your Server Address

1. Still in **"FTP & SSH"** → **"Manage Users"**
2. Look at your user's row
3. The **"Server"** column shows your server
   - Example: `iad1-shared-a1-23.dreamhost.com`
   - Or simpler: `server.dreamhost.com`

---

## Step 5: Set/Reset FTP Password (If Needed)

1. In **"FTP & SSH"** → **"Manage Users"**
2. Click **"Edit"** next to your user
3. Scroll down to **"Password"**
4. Either:
   - Set a new password
   - Or click **"Reset Password"** to get one emailed
5. Click **"Save Changes"**

---

## Step 6: Enable SSH Access (Recommended)

1. In **"FTP & SSH"** → **"Manage Users"**
2. Click **"Edit"** next to your user
3. Under **"User Type"**, select **"Shell user - allows SSH/SFTP"**
4. Click **"Save Changes"**
5. Wait 5-10 minutes for it to activate

---

## Step 7: Find Your Directory Path

Your website files should go in:
```
/home/[username]/[domain.com]/
```

For example:
- Username: `dh_abc123`
- Domain: `56social.com`
- Full path: `/home/dh_abc123/56social.com/`

To verify:
1. Go to **"FTP & SSH"** → **"Manage Users"**
2. Your home directory is shown
3. Add your domain folder to it

---

## Step 8: Test Your Connection

### Using Terminal/Command Line:

```bash
# Test SSH connection
ssh username@server.dreamhost.com

# You'll be asked for password
# Type 'yes' if asked about fingerprint
# Once connected, type:
ls
# You should see your domain folder

# Type 'exit' to disconnect
```

### Using FTP Client (FileZilla):

1. Open FileZilla
2. Click **File** → **Site Manager**
3. Click **New Site**
4. Enter:
   - **Protocol**: SFTP
   - **Host**: Your server (e.g., `iad1-shared-a1-23.dreamhost.com`)
   - **Port**: 22
   - **Logon Type**: Normal
   - **User**: Your username
   - **Password**: Your password
5. Click **Connect**

---

## Step 9: Update Your Deployment Script

Now edit `deploy-dreamhost.sh` with your info:

```bash
# Open the file
nano deploy-dreamhost.sh

# Update these lines:
DREAMHOST_USER="dh_abc123"  # Your actual username
DREAMHOST_SERVER="iad1-shared-a1-23.dreamhost.com"  # Your server
DREAMHOST_PATH="~/56social.com/"  # Your domain path
```

---

## Quick Reference Card

Fill this out as you find each piece:

```
My DreamHost Credentials:
========================
Username: ________________
Password: ________________
Server: __________________.dreamhost.com
Domain: 56social.com
Path: /home/___________/56social.com/
SSH Enabled: [ ] Yes [ ] No
```

---

## Common Issues & Solutions

### "Permission Denied" Error
- Make sure you're using SFTP (port 22) not FTP (port 21)
- Verify SSH is enabled for your user
- Check password is correct (no spaces)

### Can't Find Domain
- Domain might be under "Registrations" if not hosted yet
- May need to add hosting to domain first

### Server Name Not Clear
- Look in welcome email from DreamHost
- Check under FTP & SSH → Manage Users
- Try generic `server.dreamhost.com`

### Wrong Directory
- SSH in and type `pwd` to see current directory
- Type `ls` to see available folders
- Navigate with `cd 56social.com`

---

## Need More Help?

### DreamHost Support:
1. Click **"Support"** → **"Contact Support"**
2. Or use Live Chat (usually bottom right)
3. Ask them for:
   - "What are my FTP credentials for 56social.com?"
   - "What server should I connect to?"
   - "What directory should I upload files to?"

### Quick Support Message Template:
```
Hi, I need to deploy a static website via SFTP.
Can you provide:
1. My SFTP username for 56social.com
2. The server address I should connect to
3. The exact directory path for my domain files
4. Confirm SSH/SFTP is enabled for my user
Thanks!
```

---

## Once You Have Everything:

1. Update `deploy-dreamhost.sh` with your credentials
2. Run: `./deploy-dreamhost.sh`
3. Your site will be live at https://56social.com!

---

## Security Note:
Never share your credentials in:
- Git commits
- Public forums
- Email
- Screenshots

Keep them in a password manager!