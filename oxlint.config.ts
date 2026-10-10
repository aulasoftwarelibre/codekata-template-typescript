import { defineConfig } from 'oxlint'
import core from 'ultracite/oxlint/core'
import vitest from 'ultracite/oxlint/vitest'

export default defineConfig({
  extends: [core, vitest],
  ignorePatterns: core.ignorePatterns,
  options: { typeAware: true, typeCheck: true },
  overrides: [
    {
      files: [
        '**/*.{test,spec,test-d,spec-d}.{ts,tsx,js,jsx,mts,cts,mjs,cjs}',
        '**/__tests__/**/*.{ts,tsx,js,jsx,mts,cts,mjs,cjs}',
      ],
      plugins: ['vitest'],
      rules: {
        'vitest/consistent-test-filename': [
          'error',
          { pattern: String.raw`.*\.spec\.[tj]sx?$` },
        ],
        'vitest/consistent-test-it': ['error', { fn: 'it' }],
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/require-top-level-describe': 'off',
      },
    },
  ],
  rules: {
    'func-style': ['error', 'declaration'],
  },
})
