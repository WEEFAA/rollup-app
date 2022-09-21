import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/main.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    exports: "auto"
  },
  plugins: [commonjs()]
}
