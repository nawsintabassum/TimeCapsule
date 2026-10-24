# TimeCapsule — Digital Memory Vault

A premium, responsive, local-first time capsule app built with **HTML5, CSS3, and Vanilla JavaScript**. Write letters to your future self, attach photos, schedule unlock dates, and revisit memories.

## Features
- Dashboard with live counts, next unlock countdown, and recent capsules.
- Create, edit, draft, view, duplicate-ready data model, export, and delete capsules.
- Locked letters are hidden from the normal UI until the device clock reaches the unlock date.
- Search, status/category filters, sorting, and grid/list views.
- Memory timeline grouped by month and year.
- Photo attachments stored in IndexedDB (JPG, PNG, WEBP, GIF; up to 8 MB).
- Dark/light themes, display name, reduced-motion preference.
- JSON backup export/import with basic schema validation and duplicate-ID handling.
- Responsive layout, keyboard focus styles, accessible labels, confirmation dialog, and toast feedback.
- No API keys, server, build step, or paid service.

## Run on Windows / VS Code
1. Extract `TimeCapsule.zip`.
2. Open VS Code → **File → Open Folder…** → select the `TimeCapsule` folder.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` → **Open with Live Server**.
5. Alternatively, double-click `index.html`. Some browser APIs, especially clipboard, work best on `localhost` via Live Server.

## Folder structure
```text
TimeCapsule/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── reset.css
    │   ├── variables.css
    │   ├── style.css
    │   ├── components.css
    │   ├── responsive.css
    │   └── animations.css
    ├── js/
    │   ├── app.js
    │   ├── storage.js
    │   ├── database.js
    │   ├── capsules.js
    │   ├── countdown.js
    │   ├── editor.js
    │   ├── timeline.js
    │   ├── gallery.js
    │   ├── settings.js
    │   ├── validation.js
    │   └── ui.js
    └── images/
        ├── logo.svg
        └── illustrations/
```

## Technology
- HTML5, CSS3 (Grid/Flexbox, themes, responsive design, reduced motion)
- Vanilla JavaScript
- LocalStorage for capsule metadata and preferences
- IndexedDB for image blobs
- Native browser APIs for dialogs, files, downloads, and clipboard

## Important limitations
- This app is frontend-only. Data belongs to this browser/device and is not synced.
- LocalStorage and IndexedDB are not encrypted or password-protected. Locked capsules are hidden by the interface only; users with developer tools or direct storage access may inspect them.
- Unlocks use the device clock and are not tamper-proof.
- JSON backups include capsule metadata and letters, but **not attached photo blobs**.
- Browser storage may be cleared or run out of quota. Export backups regularly.
- There is no authentication, cloud backup, or cross-device recovery.

## Manual testing checklist
- [ ] Open every navigation item: Overview, Dashboard, Create, My Capsules, Timeline, Photo Memories, Settings, About.
- [ ] Create a capsule with a future unlock date; verify it appears in the list and counts update.
- [ ] Try blank title/body and past unlock date; confirm validation messages.
- [ ] Save a draft, edit it, and verify Draft status.
- [ ] Search by title, body, tags, and recipient.
- [ ] Filter by status/category and test each sort option.
- [ ] Toggle grid/list layout.
- [ ] Open a locked capsule and confirm the letter is hidden; set a near-future date and verify unlock after time passes.
- [ ] Open an unlocked capsule and verify letter, tags, dates, and recipient.
- [ ] Attach a valid image, visit Photo Memories, and reopen the capsule.
- [ ] Try an unsupported or oversized image; confirm it is rejected.
- [ ] Edit a capsule and verify old fields are preserved when unchanged.
- [ ] Export one capsule and all data; inspect the downloaded JSON.
- [ ] Import a valid backup and an invalid JSON file.
- [ ] Delete a capsule and clear all data; verify confirmation is required.
- [ ] Switch dark/light theme and reload; verify preference persists.
- [ ] Change display name and reload.
- [ ] Test at phone, tablet, and desktop widths; keyboard-tab through controls.
- [ ] Reload the page and verify metadata persists.

## Getting help
Use a modern browser (current Chrome, Firefox, Edge, or Safari). For photo storage and clipboard access, prefer Live Server (`http://localhost`) rather than opening the file directly.
