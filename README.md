# Mantis Studio website

Marketing site for Mantis Studio, built with React, TypeScript and Vite (originally designed in Figma Make).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which emails each submission to
etesum1997@gmail.com (CC melp.meredith@gmail.com). The addresses live at the top of `src/App.tsx`.

## Deploy

Hosted on Vercel (project `mantis-studio`). Vercel auto-detects Vite: build `npm run build`, output `dist/`.
