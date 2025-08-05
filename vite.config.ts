import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: mode === "production" ? "/awx-test/" : "/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/b2api": {
          target: "https://awx.pro",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/b2api/, "/b2api"),
        },
        "/api": env.VITE_API_URL,
      },
    },
  };
});
