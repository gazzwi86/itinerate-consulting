import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist/', 'node_modules/'] },

  // TypeScript rules scoped to .ts files only (not .astro inline scripts)
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.ts'],
  })),

  // Astro parser + recommended rules for .astro files
  ...eslintPluginAstro.configs.recommended,
]
