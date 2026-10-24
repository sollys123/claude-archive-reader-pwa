# Claude Archive Reader - Encrypted PWA

This repo contains an encrypted, offline-capable Claude conversation reader. The chat archive in the app is encrypted with gzip + AES-256-GCM. The unlock passphrase is **not** committed to this repository.

To deploy: GitHub repository Settings → Pages → Deploy from a branch → main → / (root). Use Safari → Share → Add to Home Screen on iOS.

GitHub Pages is publicly accessible. Preserve the unlock key separately. Do not publish raw conversation JSON or the plaintext standalone viewer.
