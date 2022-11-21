import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    exports: "auto"
  },
  plugins: [commonjs(), terser()]
}
