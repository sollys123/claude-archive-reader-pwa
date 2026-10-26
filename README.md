# Claude Archive Reader — Password-Free PWA

This is a static offline-capable Claude conversation reader with **automatic archive loading**, no unlock screen, and no password input.

## Public-data warning

**The full conversation archive is readable by anyone who can access this public GitHub repository or its GitHub Pages site.** The archive files are still stored in their original encrypted transport format, but the page now contains the material needed to decrypt them automatically. This provides **no confidentiality or access protection**. Do not add private information to this repository if you do not want it public.

## Included
- `index.html`: original reading/search/export interface; automatic archive loader.
- `archive/chunk-*.txt`: 32 existing archive chunks.
- `sw.js`: versioned offline cache and network-first HTML loading to prevent an older unlock screen from remaining cached.
- `manifest.webmanifest` and `icons/`: installable iOS/Android PWA assets.

## Use

Open `https://sollys123.github.io/claude-archive-reader-pwa/`. The app automatically loads the included archive and shows progress while retrieving data. No password is required. On iOS, open Safari > Share > Add to Home Screen.

After publishing changes, if an installed PWA still displays the old lock screen, reload the site in Safari once or twice to activate the new service worker; then reopen the home-screen app.
