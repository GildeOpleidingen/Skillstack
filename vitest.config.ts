import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import "@testing-library/jest-dom/vitest";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    //setupFiles: ["./vitest.setup.ts"],
    globals: true,
    exclude: [
      "node_modules/**",
      ".next/**",
      "testing/e2e/**",
    ],
  },
});
