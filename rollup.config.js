import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

export default [
  {
    input: [
      "src/index.ts",
      "src/hooks/index.ts"
    ],
    output: [
      {
        dir: "dist",
        preserveModules: true,
        preserveModulesRoot: 'src',
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist",
        preserveModules: true,
        preserveModulesRoot: 'src',
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
      terser(),
      json()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, "styled-components"],
  },
];
