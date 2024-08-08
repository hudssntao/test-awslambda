import * as esbuild from "esbuild";

await Promise.all([
  esbuild.build(
    {
      entryPoints: ["./src/firstLambda/index.ts"],
      outfile: "./dist/firstLambda/index.js",
      bundle: true,
      platform: "node",
      target: "node14",
      minify: true,
    },
    esbuild.build({
      entryPoints: ["./src/secondLambda/index.ts"],
      outfile: "./dist/secondLambda/index.js",
      bundle: true,
      platform: "node",
      target: "node14",
      minify: true,
    })
  ),
]);
