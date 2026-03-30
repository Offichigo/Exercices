import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/lba": {
        target: "https://api.apprentissage.beta.gouv.fr",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/lba/, "")
      }
    }
  }
});