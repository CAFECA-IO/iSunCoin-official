module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020, // 支援 ECMAScript2020
    sourceType: 'module', // 使用 ECMAScript ****module
    ecmaFeatures: {
      jsx: true, // 支援 JSX
      experimentalObjectRestSpread: true,
    },
    project: './tsconfig.eslint.json',
  },
  // 加上 ts 相關規則
  overrides: [
    {
      files: ['*.ts', '*.tsx', '**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'object-curly-newline': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-console': 'error',
        'tailwindcss/no-contradicting-classname': 'error',
        'tailwindcss/classnames-order': 'off',
        'tailwindcss/enforces-negative-arbitrary-values': 'error',
        'tailwindcss/enforces-shorthand': 'off',
        'tailwindcss/migration-from-tailwind-2': 'error',
        'tailwindcss/no-arbitrary-value': 'error',
        'tailwindcss/no-custom-classname': 'warn',
        'react/react-in-jsx-scope': 'off',
        'max-len': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'operator-linebreak': 'off',
        'prefer-template': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        // 'arrow-parens': 'off',
        'react/self-closing-comp': 'off',
        'react/function-component-definition': 'off',
        'arrow-body-style': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/quotes': 'off',
        // 關閉 Airbnb 排版相關的規則
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-wrap-multilines': 'off',
        'no-else-return': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-nested-ternary': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'off',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-arbitrary-value': 'error',
    'tailwindcss/no-custom-classname': 'warn',
    'react/react-in-jsx-scope': 'off',
    'max-len': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'operator-linebreak': 'off',
    'prefer-template': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    // 'arrow-parens': 'off',
    'react/self-closing-comp': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/quotes': 'off',
    // 關閉 Airbnb 排版相關的規則
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
  },

  // 整合 prettier 和解決 prettier 衝突問題
  plugins: ['tailwindcss', '@babel', 'prettier', 'react'],
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl'],
      config: 'tailwind.config.ts',
      cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
      cssFilesRefreshRate: '5_000',
      removeDuplicates: true,
      whitelist: [],
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  // 讓 eslint 知道我們在使用 jest ，這樣在跑 test.js 時 eslint 就不會報 jest 關鍵字的錯誤了
  env: { browser: true, node: true, es6: true, jest: true },
};
