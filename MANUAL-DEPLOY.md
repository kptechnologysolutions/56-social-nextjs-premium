# Manual Deployment Commands

## Since SSH was just enabled, it might need a few more minutes. Try these:

### Option 1: Test Connection First
```bash
ssh site56social@vps27305.dreamhostps.com
```
Password: `Surf22$$`

If it connects, type `exit` to disconnect, then proceed to Option 2.

### Option 2: Deploy with rsync
```bash
rsync -avz out/ site56social@vps27305.dreamhostps.com:~/56social.com/
```
Password: `Surf22$$`

### Option 3: If rsync doesn't work, try scp
```bash
scp -r out/* site56social@vps27305.dreamhostps.com:~/56social.com/
```
Password: `Surf22$$`

### Option 4: Use FileZilla (Always Works)
Since SSH might still be activating, FileZilla with SFTP should work:

1. Open FileZilla
2. Connect to:
   - Host: `sftp://vps27305.dreamhostps.com`
   - Username: `site56social`
   - Password: `Surf22$$`
   - Port: `22`
3. Upload all files from `out/` folder to `56social.com/` folder

## Check if SSH is Ready:
DreamHost says SSH takes 5-10 minutes to activate. If you just enabled it, wait a bit more.

You can check in DreamHost panel:
- Go to where you enabled SSH
- It should show "Active" or "Enabled" status
- If it shows "Processing" or "Pending", wait a few more minutes

## Your Built Files Are Ready!
The static site is in: `/Users/halpickus/Documents/Projects/56-social-nextjs-premium/out`

All files are ready to upload - just need to get them to DreamHost!

## Test URLs After Upload:
1. http://vps27305.dreamhostps.com/~site56social/
2. https://56social.com (when DNS is ready)