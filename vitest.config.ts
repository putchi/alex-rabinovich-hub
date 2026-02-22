import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
      exclude: [
        "node_modules",
        "src/test/setup.ts",
        "*.config.*",
        "src/main.tsx",
        "src/App.tsx",
        "src/vite-env.d.ts",
        "src/components/ui/**",
        "src/components/NavLink.tsx",
        "src/hooks/**",
        "src/sanity/**",
        "studio/**",
      ],
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
