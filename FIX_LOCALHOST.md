# Fix for localhost:3000 Not Working

## The Problem
Next.js dev server starts but localhost:3000 refuses connection or hangs during compilation.

## Root Causes
1. Next.js 15.5.2 compilation hanging
2. Port conflicts
3. Node memory issues
4. Corrupted node_modules

## PERMANENT FIX - Use this every time:

### Option 1: Use the start script
```bash
./start-dev.sh
```

### Option 2: Manual steps
```bash
# 1. Kill anything on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null

# 2. Clear cache
rm -rf .next

# 3. If node_modules is corrupted
rm -rf node_modules package-lock.json
npm install

# 4. Start with more memory and explicit host
NODE_OPTIONS='--max-old-space-size=8192' npx next dev -H 0.0.0.0 -p 3000
```

### Option 3: Try different port
```bash
NODE_OPTIONS='--max-old-space-size=8192' PORT=3001 npm run dev
```

### Option 4: Use production build (faster)
```bash
npm run build
npm run start
```

## CRITICAL ISSUE - Node.js Servers Hanging on Your System

Your system has a specific issue where Node.js servers hang and don't respond.
This affects Next.js, Express, and even basic Node HTTP servers.

### Immediate Workaround:
Deploy to Vercel for testing instead of localhost:
```bash
npx vercel
```

### System-level fixes to try:

1. **Reset Node.js permissions:**
```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

2. **Check macOS Firewall:**
- System Preferences > Security & Privacy > Firewall
- Click "Firewall Options"
- Add Node.js to allowed apps

3. **Reinstall Node.js:**
```bash
brew uninstall node
brew install node
```

4. **Use a different Node version:**
```bash
brew install nvm
nvm install 18
nvm use 18
```

## If still not working:

1. Check if another app is using port 3000:
   ```bash
   lsof -i :3000
   ```

2. Try with Node directly:
   ```bash
   node server.js
   ```

3. Check firewall isn't blocking:
   - System Preferences > Security & Privacy > Firewall
   - Make sure Node.js is allowed

4. Try different browser or incognito mode

## Working Alternative Ports
- http://localhost:3001
- http://localhost:3002
- http://127.0.0.1:3000

## Known Issues with Next.js 15.5.2
- Compilation can hang indefinitely
- Dev server says "Ready" but doesn't actually serve
- Solution: Use explicit host binding with -H 0.0.0.0