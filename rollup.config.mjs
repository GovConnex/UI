import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

import packageJson from "./package.json" assert { type: "json" };

const isDev = process.env.NODE_ENV === "development";

export default [
  {
    input: "src/index.ts",
    output: [
      isDev ? null : {
        file: packageJson.exports["."].require,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.exports["."].import,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      isDev ? null : terser(),
      json(),
      isDev ? null : visualizer({
        filename: "./dist/stats.html",
        title: "Bundle Stats",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    external: [
      "styled-components",
      "react",
      "react-dom",
      // Don-t export these as they're under license AND they blow up the bundle size
      "@fortawesome/react-fontawesome",
      "@fortawesome/pro-duotone-svg-icons",
      "@fortawesome/pro-light-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-thin-svg-icons",
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, "styled-components", "react", "react-dom"],
  },
];
