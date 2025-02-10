import { builtinModules } from 'module';
import type { RollupOptions } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3';
import pkg from './package.json' assert { type: 'json' };

const external = [
  ...builtinModules,
  ...(pkg.dependencies == null ? [] : Object.keys(pkg.dependencies)),
  ...(pkg.devDependencies == null ? [] : Object.keys(pkg.devDependencies)),
];

const commonOptions = {
  input: 'src/index.ts',
  external,
};

const options: RollupOptions[] = [
  {
    ...commonOptions,
    output: { file: pkg.types },
    plugins: [dts({
      compilerOptions: {
        stripInternal: true,
      }
    })]
  },
  {
    ...commonOptions,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      }
    ],
    plugins: [
      swc(
        defineRollupSwcOption({
          tsconfig: 'tsconfig.json',
          sourceMaps: true,
          jsc: {
            keepClassNames: true,
            target: 'es2022',
            parser: {
              syntax: 'typescript',
              decorators: true,
            },
            transform: {
              decoratorVersion: '2022-03',
              useDefineForClassFields: true,
            },
          },
        }),
      ),
    ],
  },
];

export default options;
