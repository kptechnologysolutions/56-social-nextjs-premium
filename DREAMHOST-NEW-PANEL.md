# DreamHost Setup - Updated Panel Instructions

## Understanding the New DreamHost Panel

**Manage Websites** = Where you set up hosting for domains
**Manage Registrations** = Where you buy/manage domain names

---

## Step-by-Step with New Panel

### Step 1: Log into DreamHost
Go to: https://panel.dreamhost.com

### Step 2: Add Website Hosting

1. In the left sidebar, look for **"Websites"**
2. Click **"Manage Websites"**
3. Look for a button that says:
   - **"+ Add Website"** 
   - OR **"Add Hosting"**
   - OR **"Add Site"**
   - OR **"New Website"**
4. Click that button

### Step 3: Set Up Your Domain

You'll see options like:

**Option A - Enter Your Domain:**
- Enter: `56social.com`
- OR for free testing: `yourusername.dreamhosters.com`
- Click Continue/Next

**Option B - Domain Selection:**
- "I have a domain" → Enter `56social.com`
- "I want a free subdomain" → Use `.dreamhosters.com`

### Step 4: Create FTP/SSH User

When it asks about users:

1. Select **"Create New User"**
2. **Username**: `site56social` (or your choice)
3. **Password**: [Choose strong password] 
4. **WRITE THIS PASSWORD DOWN!**
5. **User Type**: Select "SFTP/SSH" if available

### Step 5: Hosting Options

- **Directory**: Leave default or `/home/username/56social.com`
- **HTTPS/SSL**: ✅ Enable (check this!)
- **PHP Version**: Latest available
- Click **"Create"** or **"Add Website"** or **"Finish"**

---

## Finding Your Credentials After Setup

### Method 1: From Websites Section

1. Go to **"Websites"** → **"Manage Websites"**
2. Find `56social.com` in your list
3. Click on it or click **"Manage"** or **"Settings"**
4. Look for:
   - **"Show Credentials"**
   - **"FTP/SSH Info"**
   - **"Connection Info"**
   - **"User Details"**

### Method 2: From Users Section

1. Look in sidebar for:
   - **"Users"** 
   - **"FTP & SSH"**
   - **"Users & FTP"**
2. Click **"Manage Users"** or just **"Users"**
3. Find your username in the list
4. Click **"Show Info"** or the username itself

---

## What You're Looking For

No matter where you find it, you need:

```
Username: site56social
Password: [what you set]
Server/Hostname: _____.dreamhost.com
Port: 22 (for SFTP)
Directory: /home/site56social/56social.com/
```

---

## Quick Navigation Map

**NEW Panel Structure:**
```
Websites
├── Manage Websites (THIS IS WHERE YOU ADD HOSTING)
│   ├── Add Website / + Button
│   └── Your Sites List
│
Users (or FTP & SSH)
├── Manage Users (THIS IS WHERE YOU FIND CREDENTIALS)
│   ├── User List
│   └── Edit/Show Info
│
Domains
├── Manage Registrations (THIS IS FOR BUYING DOMAINS)
│   └── Register New Domain
```

---

## Can't Find "Add Website"?

Look for these alternative buttons/links:
- **"+ Add"** (plus icon)
- **"Add New Site"**
- **"Create Website"**
- **"Host a Domain"**
- **"Add Domain Hosting"**

Or try:
1. Top of page - blue/green button
2. Right side of page
3. Empty state message if you have no sites

---

## Alternative Path - Through Domains

Sometimes it's under:
1. **"Domains"** section
2. Look for **"Hosting"** tab
3. Click **"Add Hosting"**

---

## Still Can't Find It?

### Use DreamHost Search:
1. Look for search box in panel (usually top)
2. Type: "add website" or "add hosting"
3. Click the relevant result

### Direct Links (Try These):
- https://panel.dreamhost.com/index.cgi?tree=domain.dashboard
- https://panel.dreamhost.com/index.cgi?tree=users.users

### Quick Support Chat:
Click support chat and say:
> "I need to add hosting for a new domain 56social.com. Can you direct me to where I add a new website in the panel?"

---

## After Website is Created

**Wait 5-15 minutes**, then:

1. Go to **"Websites"** → **"Manage Websites"**
2. Your site should appear
3. Click on it
4. Look for:
   - **"File Manager"** (to see files)
   - **"FTP/User Info"** (for credentials)
   - **"Settings"** (for configuration)

---

## Testing Your Setup

Once you have credentials, test with:

```bash
# Command line test
ssh username@server.dreamhost.com

# Or FileZilla
Host: sftp://server.dreamhost.com
Username: [your username]
Password: [your password]
Port: 22
```

---

## Complete Credential Template

Fill this as you find each piece:

```
DREAMHOST SETUP CHECKLIST:
☐ Website added in panel
☐ User created
☐ SSH/SFTP enabled

MY CREDENTIALS:
Username: ________________
Password: ________________
Server: __________________.dreamhost.com
Website Path: /home/________/56social.com/
Panel URL: https://panel.dreamhost.com
```

---

## Final Deploy Command

Once you have everything:

1. Edit `deploy-dreamhost.sh`:
```bash
DREAMHOST_USER="your-username"
DREAMHOST_SERVER="your-server.dreamhost.com"
DREAMHOST_PATH="~/56social.com/"
```

2. Run:
```bash
./deploy-dreamhost.sh
```

Your site will be live!