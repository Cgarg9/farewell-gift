import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

// Vercel needs Nitro's Build Output adapter. The default Vite configuration
// intentionally remains Cloudflare/OpenAI Sites-oriented for local development.
export default defineConfig({
  plugins: [tailwindcss(), vinext(), nitro()],
});
