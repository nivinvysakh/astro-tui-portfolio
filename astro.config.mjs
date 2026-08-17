// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://juancho.github.io", // o tu dominio
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["tui-portfolio-dev.tuiportfolio.orb.local", ".orb.local"],
    },
  },
});
