# Piyush Shivam — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
# → generates static files in ./out/
```

## GitHub Pages Deployment

### Step 1 — Create repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `piyush-shivam-portfolio` (or any name you prefer)
3. Set to **Public** (required for free GitHub Pages)
4. Do **not** initialise with a README

### Step 2 — Push code

```bash
cd path/to/portfolio

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

The workflow at `.github/workflows/deploy.yml` will automatically:
- Build the Next.js static export
- Set `NEXT_PUBLIC_BASE_PATH` to `/REPO_NAME` for correct asset paths
- Deploy to GitHub Pages

### Step 4 — Access your site

After the first workflow run (~2 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

### Custom domain (optional)

1. Buy a domain (e.g. `piyushshivam.dev`)
2. Add a `CNAME` file to `/public/` containing your domain:
   ```
   piyushshivam.dev
   ```
3. In GitHub → Settings → Pages → Custom domain, enter your domain
4. Add DNS records at your registrar:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   YOUR_USERNAME.github.io
   ```
5. Check **Enforce HTTPS** once DNS propagates (~24 hrs)
6. Remove `NEXT_PUBLIC_BASE_PATH` from the workflow (leave it empty) since the custom domain sits at root

### Troubleshooting

| Issue | Fix |
|-------|-----|
| Assets 404 after deploy | Check `NEXT_PUBLIC_BASE_PATH` matches repo name exactly |
| Workflow fails on `npm ci` | Ensure `package-lock.json` is committed |
| Blank page | Open browser console — likely a basePath mismatch |
| Dark mode flickers on load | Expected on first paint; `next-themes` handles it |

## Updating Content

All content lives in [`lib/data.ts`](lib/data.ts). Edit that file to:
- Update job titles, periods, bullet points
- Add/remove achievements
- Change skill levels
- Update certifications

Push to `main` and GitHub Actions redeploys automatically.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, Tailwind base
│   ├── layout.tsx         # Root layout, SEO metadata, JSON-LD
│   └── page.tsx           # Page composition
├── components/
│   ├── Navigation.tsx     # Sticky nav + dark mode toggle
│   ├── Hero.tsx           # Hero section + stats bar
│   ├── About.tsx          # About + highlight cards
│   ├── Experience.tsx     # Expandable timeline
│   ├── Achievements.tsx   # Metric cards
│   ├── Skills.tsx         # Skill groups with bars
│   ├── Certifications.tsx # Cert + award cards
│   └── Contact.tsx        # Contact links + CTA
├── lib/
│   └── data.ts            # All content (edit this)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deploy
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
