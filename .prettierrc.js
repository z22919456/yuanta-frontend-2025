/** @type {import("prettier").Config} */

module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  semi: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  bracketSameLine: false,
  bracketSpacing: true,
  arrowParens: 'always',
  tailwindAttributes: ['className'],
  tailwindFunctions: ['cn'],
  endOfLine: 'lf',
};