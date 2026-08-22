
# 🖥️ Retro TUI Portfolio Template (Astro.js + Tailwind CSS)

[![Astro.js](https://img.shields.io/badge/Astro.js-v7.0-%23BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-%233178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

A feature-rich, high-aesthetic **Terminal User Interface (TUI) Portfolio Template** built with **Astro.js v7** and **Tailwind CSS v4**.

Features a dual-mode experience (Interactive CLI Terminal + Visual TUI Dashboard), 5 vintage CRT color themes, Web Audio API keypress sounds, CRT scanlines overlay, and a Matrix digital rain easter egg.

---

## 🌐 Live Preview

Check out the live interactive portfolio website demo:

👉 **[🚀 Launch Live Demo Website](https://astro-tui-portfolio.netlify.app)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/baf3780d-a899-4055-8470-ae8295051252/deploy-status)](https://app.netlify.com/projects/astro-tui-portfolio/deploys)

---

## 📸 Screenshots & Video Demo

### 🎮 Live Gaming & Spotify RPC Activity Demo

https://github.com/user-attachments/assets/b48b7e89-4402-48b1-a201-9028e0d75327

<br />

### 🎨 Retro CRT Theme Previews

| **🟢 Phosphor Green Theme** | **🟠 Amber Monitor Theme** |
| :---: | :---: |
| ![Phosphor Green](/themes/Phosphor_Green.png) | ![Amber Monitor](/themes/Amber_CRT.png) |

| **🔵 Cyberpunk Cyan Theme** | **🟣 Dracula Synth Theme** |
| :---: | :---: |
| ![Cyberpunk Cyan](/themes/Cyber_Cyan.png) | ![Dracula Synth](/themes/Dracula_Synth.png) |

| **⚪ Retro Monochrome Theme** | **☕ Cappuccino Theme** |
| :---: | :---: |
| ![Retro Monochrome](/themes/Monochrome.png) | ![Cappuccino Theme](/themes/Cappuccino.png) |


### 🍃 404 Page

![404](/themes/404.png)

---

## ⚡ Key Features

- **Dual-Mode Layout**:
  - **`>_ CLI Mode`**: Bash-like terminal prompt with command history (`Up`/`Down` arrows), command auto-completion (`Tab`), clear screen, and instant command execution.
  - **`[#] GUI Dashboard`**: Visual retro window layout with a collapsible sidebar explorer (`~/about.txt`, `~/skills.sh`, `~/collabs.md`, `~/contact.txt`), category skill meters, and interactive collab cards.
- **🎮 Live Gaming RPC & RAWG Integration**: Real-time PC/Mac gaming activity powered by Discord Lanyard WebSockets (`wss://api.lanyard.rest/socket`) with automatic RAWG Games API cover lookup, session elapsed timer, animated bouncing gamepad icon (`🎮`), and auto-hiding sidebar widget.
- **🎵 Live Spotify RPC Activity**: Real-time audio RPC streaming with live 1-second ticking progress bars in CLI mode, pause/offline status detection, and cookie persistence.
- **✉️ FormSubmit AJAX Email Engine**: Real-time AJAX email transmission (`https://formsubmit.co/ajax/`) with live loading states ("TRANSMITTING..."), status alerts, and celebratory confetti particles.
- **🔗 Interactive CLI Profile Links (`links`)**: Added `links` (`socials` / `urls`) command to display interactive clickable profile links for GitHub, LinkedIn, 𝕏/Twitter, and Email directly inside CLI mode.
- **5 CRT Color Themes**: Switch between Phosphor Green, Amber Monitor, Cyberpunk Cyan, Dracula Synth, and Retro Monochrome.
- **🎨 Custom Color Palettes & Skill Metrics**: Configurable developer theme palettes with strict 8-color validation error handling and Web3/Blockchain skill metrics.
- **Retro CRT Visual Effects**: Toggleable CRT scanline overlays, screen glass glare, and scanline flicker.
- **Web Audio API Synthesizer**: Pure JavaScript audio synthesizer generating retro keypress clicks, command success chimes, and error double-beeps.
- **Digital Matrix Rain Overlay**: Canvas matrix rain animation triggered via `matrix` command or header button.
- **Streamlined Portfolio Sections**: Built around **About Me**, **Skills**, **Collabs**, and **Contact**.

---

## 📸 Theme Previews & Color Palettes

The portfolio template includes **5 built-in retro CRT themes** that can be toggled instantly via the header dropdown or the `theme <name>` CLI command:

---

### 🟢 1. Phosphor Green (`green`)

> Classic vintage terminal phosphor glow inspired by 1980s green-screen CRT monitors and early monochrome Hacker workstations.

| UI Element          | CSS Variable     | Hex Color | Visual Swatch                                                 |
| :------------------ | :--------------- | :-------- | :------------------------------------------------------------ |
| **Main Text**       | `--fg-main`      | `#00FF66` | ![](https://img.shields.io/badge/-%2300FF66-00FF66) `#00FF66` |
| **Bright Text**     | `--fg-bright`    | `#66FF99` | ![](https://img.shields.io/badge/-%2366FF99-66FF99) `#66FF99` |
| **Accent Glow**     | `--accent`       | `#00FFCC` | ![](https://img.shields.io/badge/-%2300FFCC-00FFCC) `#00FFCC` |
| **Background**      | `--bg-main`      | `#0A120B` | ![](https://img.shields.io/badge/-%230A120B-0A120B) `#0A120B` |
| **Card Background** | `--bg-card`      | `#0D1A0E` | ![](https://img.shields.io/badge/-%230D1A0E-0D1A0E) `#0D1A0E` |
| **Border Line**     | `--border-color` | `#00441B` | ![](https://img.shields.io/badge/-%2300441B-00441B) `#00441B` |



---

### 🟠 2. Amber Monitor (`amber`)

> Warm amber CRT glow reminiscent of VT100, IBM 3180, and classic amber phosphor mainframe terminals.

| UI Element          | CSS Variable     | Hex Color | Visual Swatch                                                 |
| :------------------ | :--------------- | :-------- | :------------------------------------------------------------ |
| **Main Text**       | `--fg-main`      | `#FFB000` | ![](https://img.shields.io/badge/-%23FFB000-FFB000) `#FFB000` |
| **Bright Text**     | `--fg-bright`    | `#FFD066` | ![](https://img.shields.io/badge/-%23FFD066-FFD066) `#FFD066` |
| **Accent Glow**     | `--accent`       | `#FFCC00` | ![](https://img.shields.io/badge/-%23FFCC00-FFCC00) `#FFCC00` |
| **Background**      | `--bg-main`      | `#140D04` | ![](https://img.shields.io/badge/-%23140D04-140D04) `#140D04` |
| **Card Background** | `--bg-card`      | `#1D1306` | ![](https://img.shields.io/badge/-%231D1306-1D1306) `#1D1306` |
| **Border Line**     | `--border-color` | `#4A3200` | ![](https://img.shields.io/badge/-%234A3200-4A3200) `#4A3200` |



---

### 🔵 3. Cyberpunk Cyan (`cyan`)

> Electric cyber neon palette featuring vibrant cyan text with hot pink/magenta accent highlights.

| UI Element          | CSS Variable     | Hex Color | Visual Swatch                                                 |
| :------------------ | :--------------- | :-------- | :------------------------------------------------------------ |
| **Main Text**       | `--fg-main`      | `#00F0FF` | ![](https://img.shields.io/badge/-%2300F0FF-00F0FF) `#00F0FF` |
| **Bright Text**     | `--fg-bright`    | `#70F5FF` | ![](https://img.shields.io/badge/-%2370F5FF-70F5FF) `#70F5FF` |
| **Accent Pink**     | `--accent`       | `#FF007F` | ![](https://img.shields.io/badge/-%23FF007F-FF007F) `#FF007F` |
| **Background**      | `--bg-main`      | `#051014` | ![](https://img.shields.io/badge/-%23051014-051014) `#051014` |
| **Card Background** | `--bg-card`      | `#091920` | ![](https://img.shields.io/badge/-%23091920-091920) `#091920` |
| **Border Line**     | `--border-color` | `#003D47` | ![](https://img.shields.io/badge/-%23003D47-003D47) `#003D47` |



---

### 🟣 4. Dracula Synth (`dracula`)

> Modern dark synthwave palette with soft purple text, pastel pink accents, and mint green indicators.

| UI Element          | CSS Variable         | Hex Color | Visual Swatch                                                 |
| :------------------ | :------------------- | :-------- | :------------------------------------------------------------ |
| **Main Text**       | `--fg-main`          | `#BD93F9` | ![](https://img.shields.io/badge/-%23BD93F9-BD93F9) `#BD93F9` |
| **Bright Text**     | `--fg-bright`        | `#D6BBFB` | ![](https://img.shields.io/badge/-%23D6BBFB-D6BBFB) `#D6BBFB` |
| **Accent Pink**     | `--accent`           | `#FF79C6` | ![](https://img.shields.io/badge/-%23FF79C6-FF79C6) `#FF79C6` |
| **Accent Green**    | `--accent-secondary` | `#50FA7B` | ![](https://img.shields.io/badge/-%2350FA7B-50FA7B) `#50FA7B` |
| **Background**      | `--bg-main`          | `#110E1B` | ![](https://img.shields.io/badge/-%23110E1B-110E1B) `#110E1B` |
| **Card Background** | `--bg-card`          | `#191428` | ![](https://img.shields.io/badge/-%23191428-191428) `#191428` |
| **Border Line**     | `--border-color`     | `#3B2C59` | ![](https://img.shields.io/badge/-%233B2C59-3B2C59) `#3B2C59` |



---

### ⚪ 5. Retro Monochrome (`mono`)


> Crisp minimalist monochrome high-contrast theme designed for maximum readability and paper terminal aesthetics.

| UI Element          | CSS Variable     | Hex Color | Visual Swatch                                                 |
| :------------------ | :--------------- | :-------- | :------------------------------------------------------------ |
| **Main Text**       | `--fg-main`      | `#EEEEEE` | ![](https://img.shields.io/badge/-%23EEEEEE-EEEEEE) `#EEEEEE` |
| **Bright Text**     | `--fg-bright`    | `#FFFFFF` | ![](https://img.shields.io/badge/-%23FFFFFF-FFFFFF) `#FFFFFF` |
| **Accent Cyan**     | `--accent`       | `#00E5FF` | ![](https://img.shields.io/badge/-%2300E5FF-00E5FF) `#00E5FF` |
| **Background**      | `--bg-main`      | `#0F0F0F` | ![](https://img.shields.io/badge/-%230F0F0F-0F0F0F) `#0F0F0F` |
| **Card Background** | `--bg-card`      | `#191919` | ![](https://img.shields.io/badge/-%23191919-191919) `#191919` |
| **Border Line**     | `--border-color` | `#333333` | ![](https://img.shields.io/badge/-%23333333-333333) `#333333` |



---

### ☕ 6. Cappuccino (`cappuccino`)

> Warm roasted espresso brown & creamy golden caramel CRT glow inspired by cozy coffee shop aesthetics.

| UI Element          | CSS Variable     | Hex Color | Visual Swatch                                                 |
| :------------------ | :--------------- | :-------- | :------------------------------------------------------------ |
| **Main Text**       | `--fg-main`      | `#F5E6D3` | ![](https://img.shields.io/badge/-%23F5E6D3-F5E6D3) `#F5E6D3` |
| **Bright Text**     | `--fg-bright`    | `#FFFFFF` | ![](https://img.shields.io/badge/-%23FFFFFF-FFFFFF) `#FFFFFF` |
| **Accent Caramel**  | `--accent`       | `#E69A58` | ![](https://img.shields.io/badge/-%23E69A58-E69A58) `#E69A58` |
| **Background**      | `--bg-main`      | `#1B1411` | ![](https://img.shields.io/badge/-%231B1411-1B1411) `#1B1411` |
| **Card Background** | `--bg-card`      | `#251C18` | ![](https://img.shields.io/badge/-%23251C18-251C18) `#251C18` |
| **Border Line**     | `--border-color` | `#4A352C` | ![](https://img.shields.io/badge/-%234A352C-4A352C) `#4A352C` |



---

## ⚙️ Manual way Setup

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/tui-portfolio.git
cd tui-portfolio

# Install dependencies
npm install
```

### 2. Start Local Development Server

```bash
npm run dev
```

Open **`http://localhost:4321`** in your browser to view your live portfolio!

### 3. Build for Production

```bash
npm run build
```

Generates a 100% static production build in the `dist/` directory.

---

## 🐳 Running with Docker & Docker Compose (Lazy way)

This project includes a complete Docker setup with two modes: **Live Development** (with Hot-Reloading) and **Production**.

> PS : If you don't know what the heck is Docker , Just Skip this section for your mental health and sanity. You can still run the website locally using `npm run dev` and `npm run build` commands.

### Prerequisites

Make sure you have [Docker Desktop](https://www.docker.com/) or [OrbStack](https://orbstack.dev/) installed on your system.

### 1. 🚀 Development Mode (Hot-Reloading)

Use this mode while actively editing your portfolio content. It runs a live development server with hot-reloading.

```bash
docker-compose up tui-portfolio-dev
```

- **Local URL:** `http://localhost:4321`
- **OrbStack URL:** `http://tui-portfolio-dev.tuiportfolio.orb.local`

---

### 2. 📦 Production Mode (Ultra-lean Nginx Build)

Use this mode to test the final compiled build in a lightweight, high-performance Nginx web server.

```bash
docker compose up -d --build tui-portfolio-prod
```

- **Local URL:** `http://localhost:8080`
- **OrbStack URL:** `https://tui-portfolio-prod.tuiportfolio.orb.local`

---

### 🧹 Useful Commands

| Action                           | Command                                           |
| :------------------------------- | :------------------------------------------------ |
| **Stop and remove containers**   | `docker compose down`                             |
| **View development logs**        | `docker compose logs -f tui-portfolio-dev`        |
| **Rebuild production container** | `docker compose up -d --build tui-portfolio-prod` |

---

## ✏️ How to Customize Your Content

All portfolio content is centrally managed in **`src/data/portfolio.ts`**. You do not need to touch complex layout code to update your personal details!

### 1. Update Personal Info & Neofetch Specs

Open `src/data/portfolio.ts` and edit the `developer` object:

```typescript
export const PORTFOLIO_DATA = {
  developer: {
    name: "Your Name",
    handle: "yourhandle",
    title: "Full Stack & Systems Engineer",
    alias: "root@your-hostname",
    email: "your.email@domain.com",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    location: "San Francisco, CA",
    status: "🟢 OPEN FOR COLLABORATIONS",
    CLI_EMOJI: "🫐",
    palette: [
      "#0f0f0f", "#ef4444", "#22c55e", "#eab308",
      "#3b82f6", "#a855f7", "#06b6d4", "#f8fafc"
    ],
    bio: "Write your personal bio and engineering background here...",
    quote: "\"Code is like humor. When you have to explain it, it’s bad.\"",
    specs: {
      OS: "Arch Linux x86_64 / macOS Darwin",
      Kernel: "6.10.8-zen1",
      Shell: "zsh 5.9",
      Editor: "Neovim / VS Code",
      CPU: "Apple M3 Max",
      Memory: "24.5GiB / 64.0GiB"
    }
  },
```

> [!WARNING]
> **Color Palette Limit**: The `palette` array supports a **maximum of 8 hex colors**.

### 2. Edit Your Skills Matrix

Update the `skills` array in `src/data/portfolio.ts`:

```typescript
skills: [
  {
    category: "Core Languages",
    icon: "⚡",
    skills: [
      { name: "TypeScript", level: 95, experience: "7 yrs", tag: "EXPERT" },
      { name: "Rust", level: 85, experience: "4 yrs", tag: "ADVANCED" },
    ],
  },
];
```

- `level`: Integer from `0` to `100` (renders progress bars `[████████░░]`).
- `tag`: Badge text (e.g. `EXPERT`, `PRO`, `ADVANCED`).

### 3. Add Your Collaborations & Projects

Update the `collabs` array in `src/data/portfolio.ts`:

```typescript
collabs: [
  {
    id: "collab-1",
    partner: "Organization / Partner Name",
    partnerType: "Open Source Org",
    title: "Project Title",
    role: "Lead Engineer",
    period: "2024 - PRESENT",
    status: "ACTIVE",
    description: "Overview of joint project or collaboration...",
    contributions: ["Key contribution 1", "Key contribution 2"],
    techStack: ["Astro.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-project",
  },
];
```

### 4. How to Edit Your ASCII Art Banner

1. Open **`src/data/portfolio.ts`**.
2. Locate `asciiBanner` inside `PORTFOLIO_DATA.developer`:
   ```typescript
   asciiBanner: `
       _    _     _______  __
      / \\  | |   | ____\\ \\/ /
     / _ \\ | |   |  _|  \\  / 
    / ___ \\| |___| |___ /  \\ 
   /_/   \\_\\_____|_____/_/\\_\\
   `,
   ```
3. Generate your own custom ASCII text using a free online tool like [FIGlet Generator](https://patorjk.com/software/taag/) (recommended fonts: _ANSI Shadow_, _Slant_, or _Standard_).
4. Paste your new ASCII string inside the backticks of `asciiBanner`.

### 5. Customizing & Adding Custom Themes

Custom themes are centrally managed in **`src/config/themeConfig.ts`**. To add your own custom theme:

1. Open `src/config/themeConfig.ts`.
2. Add a new theme object to the `CUSTOM_THEMES` array:
   ```typescript
   export const CUSTOM_THEMES: ThemeConfig[] = [
     {
       id: "gold",
       name: "Matrix Gold",
       emoji: "🟡",
       description: "Golden digital rain phosphor glow",
       colors: {
         bgMain: "#141004",
         bgCard: "#1f1906",
         bgCardHover: "#2d2409",
         fgMain: "#ffd700",
         fgDim: "#b39700",
         fgBright: "#ffea70",
         accent: "#ffae00",
         accentSecondary: "#ffaa00",
         borderColor: "#4a3b00",
         borderActive: "#ffd700",
         glowColor: "rgba(255, 215, 0, 0.25)",
         selectionBg: "#4a3b00",
         selectionFg: "#ffd700",
         statusBarBg: "#0a0802",
       },
     },
   ];
   ```
3. Your new theme will automatically appear in the header dropdown menu and be recognized by the `theme <id>` CLI command!

### 6. Customizing Global CRT Filter Strength & Intensity

CRT Filter scanline intensity and vignette shadows apply globally across **all themes**. You can adjust the default preconfigured values in **`src/config/themeConfig.ts`**:

```typescript
export const GLOBAL_CRT_CONFIG: CRTConfig = {
  enabled: true,
  intensity: "medium", // Presets: "low" | "medium" | "high" | "ultra"
  scanlineOpacity: 0.20, // 0.0 (clean) to 1.0 (heavy scanlines)
  vignetteOpacity: 0.65,  // 0.0 (clean) to 1.0 (dark corner shadow)
};
```

### 7. Customizing Favicon

Replace `public/favicon.svg` with your own SVG logo or icon.

### 8. Live Spotify Activity & Discord Lanyard Integration

The portfolio includes a **Live Spotify Now Playing / Last Played Activity Widget** and `spotify` CLI command powered by real-time WebSockets (`wss://api.lanyard.rest/socket`).

Open **`src/config/spotifyConfig.ts`** to configure your Discord User ID:

```typescript
export const SPOTIFY_CONFIG: SpotifyConfig = {
  enabled: true,
  // Provide your Discord User ID here to automatically stream live Spotify activity!
  lanyardUserId: "YOUR_DISCORD_USER_ID_HERE",
};
```

> [!NOTE]
> - **Disabled by Default**: The Spotify Activity widget is **disabled by default** (`lanyardUserId: ""`). Simply set your Discord User ID in `src/config/spotifyConfig.ts` to activate it. Leaving `lanyardUserId: ""` empty automatically keeps the widget hidden.
> - **Join Lanyard Server (Required)**: You **must join the Lanyard Discord Server** ([discord.gg/lanyard](https://discord.gg/lanyard)) for Lanyard to monitor your Discord presence and stream your Spotify RPC data.
> - **Discord Running in Background**: Discord (Desktop or Web) must be running on your machine while playing Spotify so Discord can broadcast your live listening activity to Lanyard.
> - **How to get your Discord User ID**: Enable Developer Mode in Discord settings (User Settings > Advanced > Developer Mode), then right-click your profile picture and select **Copy User ID**.
> - **Cookie Persistence**: When offline or not actively playing music, the widget automatically restores your most recently played song from browser cookies (`tui_last_played_track`).

### 9. Live Gaming Activity & RAWG Game Icon Integration

The portfolio includes a **Live Gaming Activity Widget** that automatically streams your active PC/Mac game activity via Discord Lanyard WebSockets (`wss://api.lanyard.rest/socket`).


Open **`src/config/gamesConfig.ts`** to configure your Discord User ID:

```typescript
export const GAMES_CONFIG: GamesConfig = {
  enabled: true,
  // Provide your Discord User ID here to automatically stream live gaming activity!
  lanyardUserId: "YOUR_DISCORD_USER_ID_HERE",
};
```

> [!NOTE]
> - **Disabled by Default**: The Games widget is **disabled by default** (`lanyardUserId: ""`). Set your Discord User ID in `src/config/gamesConfig.ts` to activate it.
> - **Auto-Hiding Widget**: The Games Widget automatically hides from the GUI dashboard sidebar when you are not actively playing a game, and smoothly pops up the moment you launch any game (Roblox, Minecraft, Valorant, GTA V, CS2, etc.).
> - **Automatic Game Cover Resolution**: Automatically resolves official game icons and high-resolution cover art via RAWG Games API search and Discord application asset endpoints.

### 10. Contact Form Mail Setup (FormSubmit Integration)

The contact form in the **TRANSMIT MAIL // CONTACT** section is pre-configured with [FormSubmit.co](https://formsubmit.co) AJAX endpoint — **no backend code or API keys required!**

#### 1. Set Your Email Address
Open `src/data/portfolio.ts` and update `email` inside `PORTFOLIO_DATA.developer`:

```typescript
export const PORTFOLIO_DATA = {
  developer: {
    email: "your.real.email@domain.com",
    // ...
  }
};
```

#### 2. First-Time 1-Click Email Activation
1. Once deployed, submit a test message using the contact form on your portfolio website.
2. Check your inbox (`your.real.email@domain.com`) for an activation email sent by **FormSubmit.co**.
3. Click **"Activate Form"**.
4. That's it! All future messages submitted by site visitors will be delivered directly to your inbox instantly.

---

## 💻 CLI Commands Reference

Visitors can execute the following interactive commands inside CLI Mode:

| Command    | Description                                    | Usage                                       |
| :--------- | :--------------------------------------------- | :------------------------------------------ |
| `help`     | List all available terminal commands           | `help`                                      |
| `about`    | Display bio, background & location             | `about` (or `cat bio.txt`)                  |
| `skills`   | Display interactive skill progress meters      | `skills` (or `cat skills.sh`)               |
| `collabs`  | Display team collaborations & partner projects | `collabs` (or `cat collabs.md`)             |
| `neofetch` | Display ASCII banner & system hardware specs   | `neofetch`                                  |
| `contact`  | Display email & social links                   | `contact` (or `mail`)                       |
| `links`    | Display interactive links to GitHub, LinkedIn, 𝕏 & Email | `links` (or `socials`, `urls`)   |
| `spotify`  | Display Spotify Now Playing & Audio RPC status | `spotify` (or `np`)                         |
| `theme`    | Switch color theme                             | `theme <green\|amber\|cyan\|dracula\|mono>` |
| `matrix`   | Toggle digital rain CRT canvas animation       | `matrix`                                    |
| `crt`      | Toggle CRT scanlines screen overlay            | `crt`                                       |
| `sfx`      | Toggle audio keypress feedback sounds          | `sfx`                                       |
| `clear`    | Clear terminal buffer screen                   | `clear` (or `cls`)                          |
| `gui`      | Switch layout to TUI Visual Dashboard          | `gui`                                       |
| `cli`      | Switch layout to Interactive CLI Mode          | `cli`                                       |

---

## 🌐 Deployment

This Astro portfolio outputs a 100% static site that can be hosted anywhere:

### Vercel / Netlify / Cloudflare Pages

- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 📄 License

MIT License © 2026
