import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist/', 'node_modules/'] },

  // TypeScript rules for .ts files
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.ts'],
  })),

  // Astro recommended rules (covers .astro files)
  ...eslintPluginAstro.configs.recommended,
]
