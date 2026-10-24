# Claude Archive Reader - Encrypted PWA

A static Progressive Web App derived from the supplied Claude JSON viewer.

## Included
- `index.html`: original viewer interface and code to reconstruct the encrypted archive.
- `archive/chunk-*.txt`: 32 ciphertext-only chunks (gzip + AES-256-GCM) loaded automatically.
- `manifest.webmanifest`: install metadata.
- `sw.js`: offline shell cache.
- `icons/`: iOS/Android app icons.
- `.nojekyll`: prevent Jekyll rewriting static assets.

The source chat content is NOT present as plaintext in this project. The encrypted payload is split into 32 chunks for reliable GitHub upload. **The unlock passphrase is deliberately not included.** Store the separate unlock key safely before deploying.

## Publish on GitHub Pages
1. Create a new GitHub repository. You may make it public, because the archive is encrypted. Be aware that the HTML/CSS/JS and encrypted ciphertext remain publicly visible.
2. Upload **the contents** of this folder to the repository root, with `index.html` at the top level. Do NOT upload the separate unlock key text file or the plaintext offline HTML.
3. Open repository Settings > Pages > Build and deployment > Source: Deploy from a branch > `main` > `/(root)` > Save.
4. Visit `https://YOUR-USERNAME.github.io/YOUR-REPO/` when Pages deployment finishes.
5. Unlock using the separate passphrase. Keep `Remember this device` on to avoid retyping. Everything is decrypted locally in the browser.
6. On iPhone, open the Pages URL in Safari > Share > Add to Home Screen.

## Offline mode
The service worker caches `index.html`, icons, and manifest under the site's path. After visiting successfully online, it can work offline. You still need the unlock key once unless the browser has retained a non-extractable key in IndexedDB. Clearing site data will require entering the passphrase again.

## Security notes
- GitHub Pages is normally public; the password is never embedded in source.
- This is client-side encryption, not GitHub authentication or access control.
- Protect the separate password, and do not publish an unencrypted copy of the conversation JSON or the local standalone HTML.
- Third-party scripts, trackers, remote fonts, and API calls are not used.
- If redeploying with a different encrypted archive, update the service worker `CACHE_NAME` so old offline copies are retired.
