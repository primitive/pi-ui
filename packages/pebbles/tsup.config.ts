import { defineConfig } from "tsup";
import inlineImport from "esbuild-plugin-inline-import";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  clean: true,
  dts: true,
  sourcemap: true,
  esbuildPlugins: [
    inlineImport({
      filter: /\.css$/
    })
  ]
});
