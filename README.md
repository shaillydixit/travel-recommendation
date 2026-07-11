# Wander Log — Travel Recommendation Web Application

A 3-page static travel recommendation site built for the "Travel Recommendation Web Application"
final project: **Home**, **About Us**, and **Contact Us**, sharing one navigation bar, with
beach / temple / country recommendations (two images each) on the Home page.

## Project structure

```
travel-recommendation/
├── index.html        # Home page: intro + Beach, Temple, Country recommendations
├── about.html         # About Us page: mission, values, team
├── contact.html        # Contact Us page: email form
├── css/
│   └── style.css       # All styling (shared across pages)
├── js/
│   └── script.js       # Mobile nav toggle + contact form validation
└── README.md
```

## How to put this on GitHub and GitHub Pages

1. **Create a new public repository** on GitHub, e.g. `travel-recommendation`.
2. Upload every file/folder above into the repo, keeping the same folder structure
   (`css/style.css` and `js/script.js` must stay in their subfolders since `index.html`
   links to them with relative paths).
   - Easiest path: on the repo page, click **Add file → Upload files**, drag in the whole
     folder, and commit.
   - Or, from your own machine with git installed:
     ```
     git init
     git add .
     git commit -m "Initial commit: travel recommendation site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/travel-recommendation.git
     git push -u origin main
     ```
3. **Turn on GitHub Pages**: repo → **Settings → Pages** → under "Build and deployment",
   set **Source** to "Deploy from a branch", branch **main**, folder **/ (root)** → **Save**.
4. Wait a minute, then your live site will be at:
   ```
   https://<your-username>.github.io/travel-recommendation/
   ```
5. Confirm both URLs work in an incognito window before submitting:
   - Repository URL: `https://github.com/<your-username>/travel-recommendation`
   - Live site URL: `https://<your-username>.github.io/travel-recommendation/`
   (Remember the `https://` prefix on both — the assignment grader requires it.)

## Screenshots to take for the assignment

Take these after your GitHub Pages site is live, save them into a `screenshots/` folder in
the repo, and attach them to the relevant assignment question:

1. **Home page** — full page showing the intro/hero section.
2. **About Us page** — full page showing team/mission elements.
3. **Contact Us page** — the email form.
4. **Navigation bar** — close-up, and one screenshot showing it on mobile width (resize
   your browser or use dev tools' device toolbar) to show the responsive menu button.
5. **Beach recommendation** — the section with its two images.
6. **Temple recommendation** — the section with its two images.
7. **Country recommendation** — the section with its two images.

## Notes on the Contact form

The form validates name/email/message client-side and shows a confirmation message, but as
a static GitHub Pages site it has no server to actually send email yet. If the assignment
requires messages to really arrive in an inbox, wire the `<form>` up to a free service like
[Formspree](https://formspree.io/) (add their action URL to the form tag) — a few minutes of
setup, no backend code required.
