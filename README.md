<div align="center">

# 🖥️ Retro TUI Portfolio

A minimal, high-aesthetic Terminal User Interface portfolio template.  
Built with **Astro.js v7** & **Tailwind CSS v4**.

<br />

[![Astro](https://img.shields.io/badge/Astro-v7.0-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Astro Themes](https://img.shields.io/badge/Astro%20Themes-Available%20Now-FF5D01?style=flat&logo=astro&logoColor=white)](https://portal.astro.build/themes/retro-tui-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=flat)](LICENSE.MD)

<br />
<br />

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fnivinvysakh%2Fastro-tui-portfolio)

<br />
<br />

<p align="center">
  <a href="https://astro-tui-portfolio.netlify.app"><strong>🌐 Launch Live Demo</strong></a> &nbsp;•&nbsp;
  <a href="https://portal.astro.build/themes/retro-tui-portfolio/"><strong>🌟 Available on Astro Themes</strong></a>
</p>

</div>

<br />

> 🌟 **Available on Astro Themes:** This theme is officially listed and available on the [Astro Theme Directory](https://portal.astro.build/themes/retro-tui-portfolio/).

---

## 🎮 Video Demo

https://github.com/user-attachments/assets/b48b7e89-4402-48b1-a201-9028e0d75327

---

## 🎨 Retro CRT Themes

Switch between **6 built-in CRT themes** in real-time via the header dropdown or the `theme <name>` CLI command:

| **🟢 Phosphor Green** | **🟠 Amber CRT** |
| :---: | :---: |
| ![Phosphor Green](/themes/Phosphor_Green.png) | ![Amber Monitor](/themes/Amber_CRT.png) |

| **🔵 Cyber Cyan** | **🟣 Dracula Synth** |
| :---: | :---: |
| ![Cyber Cyan](/themes/Cyber_Cyan.png) | ![Dracula Synth](/themes/Dracula_Synth.png) |

| **⚪ Monochrome** | **☕ Cappuccino** |
| :---: | :---: |
| ![Retro Monochrome](/themes/Monochrome.png) | ![Cappuccino Theme](/themes/Cappuccino.png) |

<p align="center">
  <em>Includes a custom retro 404 terminal error screen:</em>
</p>

<div align="center">
  <img src="/themes/404.png" alt="404 Terminal Page" width="70%" />
</div>

---

## ✨ Features

- **Dual-Mode UI** — Switch between an interactive **`>_ CLI Terminal`** (history, tab autocomplete) and a **`[#] GUI Dashboard`**.
- **🐙 Live GitHub Stats & Repos** — Real-time GitHub REST API metrics: total stars ⭐, forks 🍴, followers, languages breakdown & repositories.
- **🐍 Retro Arcade Snake & 🕹️ Pong** — Fully playable 60 FPS HTML5 Canvas arcade games with sound synthesis and persistent high-scores.
- **📻 Retro Lo-Fi Radio + YouTube Player** — Cassette radio with Web Audio API real-time spectrum visualizer & custom song streaming from any YouTube URL.
- **6 Vintage CRT Themes** — Phosphor Green, Amber, Cyber Cyan, Dracula Synth, Monochrome, and Cappuccino with dynamic runtime CSS variables.
- **CRT Shader & Audio FX** — Scanline overlays, vignette shadows, and Web Audio API keypress sounds.
- **Live Activity Streaming** — Real-time Spotify & Gaming presence via Discord Lanyard WebSockets & RAWG.
- **Zero-Backend Contact Form** — Working AJAX email transmission via FormSubmit.co with confetti.
- **100% Static & Fast** — Built with Astro v7 for instant load times and zero overhead.

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/nivinvysakh/astro-tui-portfolio.git
cd astro-tui-portfolio
npm install

# Start local dev server
npm run dev
```

Open **`http://localhost:4321`** to view your live portfolio.

> **🐳 Docker:** Run `docker compose up tui-portfolio-dev` for live development with hot-reloading.

---

## ⚙️ Customization

- **Content & Bio** &rarr; [`src/data/portfolio.ts`](src/data/portfolio.ts)  
  *Update bio, skills matrix, hardware specs, collaborations, and contact details.*

- **Themes, Radio & Integrations** &rarr; [`src/config/`](src/config/)  
  *Configure custom CRT themes (`themeConfig.ts`), Radio tracks (`radioConfig.ts`), Spotify RPC (`spotifyConfig.ts`), and live Gaming presence (`gamesConfig.ts`).*

---

## 💻 CLI Commands

| Command | Description |
| :--- | :--- |
| `help` | List available commands (`man`) |
| `about` | Bio, background & location (`cat bio.txt`) |
| `skills` | Interactive proficiency meters (`cat skills.sh`) |
| `collabs` | Projects & collaborations (`cat collabs.md`) |
| `neofetch` | System specs & ASCII art logo |
| `github` | Live GitHub profile metrics, stars & language stats (`stats`, `gh`) |
| `repos` | Explore featured repositories with stars & links (`projects`) |
| `snake` | Play classic retro Snake arcade game (`./snake.sh`) |
| `pong` | Play retro arcade Pong vs CPU (`game`, `play`, `./pong.sh`) |
| `radio` | Play Lo-Fi radio or stream YouTube (`radio add <yt_url>`, `radio play`) |
| `spotify` | Live Spotify track & progress bar (`np`) |
| `theme <name>` | Switch theme (`green`, `amber`, `cyan`, `dracula`, `mono`, `cappuccino`) |
| `matrix` | Toggle digital rain canvas animation |
| `crt` / `sfx` | Toggle CRT shader / Keypress sound effects |
| `gui` / `cli` | Switch layout mode |
| `clear` | Clear terminal screen buffer (`cls`) |

---

## 📄 License

Distributed under the [MIT License](LICENSE.MD). © 2026 Nivin
