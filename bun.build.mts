import type { BuildConfig } from 'bun';
import dts from 'bun-plugin-dts';

const defaultBuildConfig: BuildConfig = {
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  target: 'node',
  packages: 'external',
}

await Promise.all([
  Bun.build({
    ...defaultBuildConfig,
    format: 'cjs',
    naming: "[dir]/[name].cjs",
  }),
  Bun.build({
    ...defaultBuildConfig,
    format: 'esm',
    naming: "[dir]/[name].js",
    plugins: [dts()],
  }),
])
