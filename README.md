# Subhash Naidu Gunupuru — Trainer Portfolio

React portfolio for HR / recruiter review: technical trainer + MERN developer profile.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

### 1. Create a GitHub repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: **`trainer-portfolio`** (must match `base` in `vite.config.js`)
3. Keep it **Public**
4. Do **not** add a README (this project already has one)
5. Click **Create repository**

### 2. Push this project

In PowerShell, from this folder:

```powershell
git init
git add .
git commit -m "Add trainer portfolio React site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/trainer-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

### 3. Set the correct Pages base path

Open `vite.config.js` and confirm:

```js
base: '/trainer-portfolio/',
```

If your repo name is different, change `trainer-portfolio` to your exact repo name.

Also update LinkedIn / GitHub URLs in `src/data.js` before sharing with HR.

### 4. Deploy

```powershell
npm install
npm run deploy
```

This builds the site and pushes the `dist` folder to the `gh-pages` branch.

### 5. Enable GitHub Pages

1. Open your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/ (root)`**
4. Save

After 1–2 minutes your site will be live at:

`https://YOUR_GITHUB_USERNAME.github.io/trainer-portfolio/`

### Update the live site later

```powershell
git add .
git commit -m "Update portfolio content"
git push
npm run deploy
```

## Share with HR

Send them the GitHub Pages URL above. Optionally also share the repo link so they can view the code.
