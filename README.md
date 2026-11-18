# acarfilms.github.io

Source of [acarfilms.github.io](https://acarfilms.github.io), the personal site of Ángel Carrascosa.

Static [Astro](https://astro.build) site, no client-side JavaScript. Every push to `main` builds it and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

- `src/data/profile.ts`: home page copy (hero, brands, numbers, experience, stack).
- `src/data/projects.ts`: the case studies. Each entry becomes a page under `/proyectos/<slug>/`.
- `src/pages/como-trabajo.astro`: my engineering process, from deciding to shipping.
- `src/components/`: one component per section, plus `CaseBlock` for the building blocks of a case study.
- `public/img/`: optimised images and short muted video loops (each with a poster). Brand logos are single-colour masks, so they follow the light and dark theme.
- `src/styles/global.css`: design tokens, light and dark.
- `public/tide.svg`: the wallpaper shared with [Vitrine](https://github.com/Acarfilms/vitrine), so the site and the GitHub profile match.
