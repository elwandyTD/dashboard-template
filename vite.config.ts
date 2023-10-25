import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
import { fileURLToPath } from "url";
// import devtools from "solid-devtools/vite";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/configs": path.resolve(__dirname, "./src/configs"),
      "@/pages": path.resolve(__dirname, "./src/pages")
    }
  }
});
