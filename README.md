<p align="center">
  <img src="https://raw.githubusercontent.com/rafsanahmed28/Rafsan/3149a4845a8a16e5401212ec3e0d3eb6cce10d2c/public/logo.svg" height="85" alt="Rafsan Ahmed logo"/>
</p>
<h1 align="center">
  rafsanahmed.com &mdash; v2
</h1>
<p align="center">
  Second iteration of my personal website <a href="https://rafsanahmed.com" target="_blank">rafsanahmed.com</a>
</p>
<p align="center">
  Built with <a href="https://react.dev/">React 19</a> + <a href="https://vite.dev/">Vite</a> (SWC), animated with <a href="https://gsap.com/">GSAP</a>, hosted on <a href="https://vercel.com/">Vercel</a>.
</p>

![homepage](https://raw.githubusercontent.com/rafsanahmed28/Rafsan/refs/heads/main/public/assets/homepage.png)

## ⚡ Stack

- **React 19** with the modern JSX runtime
- **Vite 8** + **@vitejs/plugin-react** (backed by Rolldown + Oxc for fast transforms)
- **GSAP 3** for animations (ScrollTrigger, MorphSVG, DrawSVG, Flip)
- **Three.js** + **@react-three/fiber 9** for the star background
- **react-syntax-highlighter** for code snippets
- **react-icons** for iconography
- **ESLint flat config** + **Prettier** + **EditorConfig**
- **GitHub Actions** CI (lint + format check + build)

## 💚 Credits

Robot Animation: [Shunya Koide](https://codepen.io/shunyadezain)

Code references and design inspirations: [Gazi Jarin](https://github.com/gazijarin/Gazi) and [Brittany Chiang](https://github.com/bchiang7/v4)

## 🧬 Forking this Repo

Feel free to fork this repository but if you use or adapt this work, please give me proper credit by linking back to the original repository.

Also, if you're using components from third-party sources included in this codebase, please ensure you maintain their attribution as well. Thank you!

## 🛠 Installation & Setup

Requires **Node.js 20.19+ or 22.12+** (see `.nvmrc`).

```sh
git clone https://github.com/rafsanahmed28/Rafsan-v2.git
cd Rafsan-v2
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>.

## 🧹 Scripts

| Script                 | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR                |
| `npm run build`        | Produce an optimized production build in `build/` |
| `npm run preview`      | Preview the production build locally              |
| `npm run lint`         | Run ESLint on all JS/JSX                          |
| `npm run lint:fix`     | Auto-fix lint issues where possible               |
| `npm run format`       | Format the codebase with Prettier                 |
| `npm run format:check` | Check formatting without modifying files          |

## 🚀 Production Build

```sh
npm run build
```

Output is written to `build/`. Vercel picks it up automatically.

## 🎨 Color Palette

| Color          | Hex                                                                  |
| -------------- | -------------------------------------------------------------------- |
| Lightest Slate | ![#E2E8FD](https://placehold.co/100x25/E2E8FD/000000?text=%23E2E8FD) |
| Green Bright   | ![#64D98A](https://placehold.co/100x25/64D98A/000000?text=%2364D98A) |
| Dark Green     | ![#03141A](https://placehold.co/100x25/03141A/ffffff?text=%2303141A) |
| Dark Blue      | ![#060A17](https://placehold.co/100x25/060A17/ffffff?text=%23060A17) |
| Dark Purple    | ![#0B0F1D](https://placehold.co/100x25/0B0F1D/ffffff?text=%230B0F1D) |
| Black          | ![#030817](https://placehold.co/100x25/030817/ffffff?text=%23030817) |
