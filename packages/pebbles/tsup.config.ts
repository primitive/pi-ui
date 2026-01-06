import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  clean: true,
  dts: true,
  sourcemap: true,
  esbuildOptions(options) {
    options.loader = {
      ...(options.loader ?? {}),
      ".css": "text"
    };
  }
});
