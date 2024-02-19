module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 70,
  tabWidth: 2,
  useTabs: false,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports'
  ],
  importOrder: [
    '<TYPES>',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '',
    '<TYPES>^[.|..|~]',
    '^@/',
    '^[../]',
    '^[./]'
  ],
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'decorators-legacy'
  ],
  importOrderTypeScriptVersion: '4.4.0'
}
