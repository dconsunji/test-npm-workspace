// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
   input: 'src/index.ts',
   output: [
      {
         dir: 'lib',
         exports: 'named',
         entryFileNames: '[name].js',
         format: 'cjs',
      },
      {
         dir: 'lib',
         exports: 'named',
         entryFileNames: '[name].mjs',
         preserveModules: true,
         format: 'esm',
      },
   ],
   plugins: [
      typescript({
         tsconfig: './tsconfig.build.json',
      }),
   ],
};
