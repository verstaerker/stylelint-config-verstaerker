import selectorClassPattern from './rules/selector-class-pattern.js';

export default {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    '@stylistic/stylelint-plugin'
  ],
  extends: [
    'stylelint-config-standard',
    // Needed to be able to parse vue files, see https://github.com/ota-meshi/stylelint-config-html#book-usage
    // 'stylelint-config-html/vue'
  ],
  overrides: [
    {
      // Needed to be able to parse scss files, as we don't want to use the stylelint-config-standard-scss
      // see https://stylelint.io/migration-guide/to-14/
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
    {
      files: '**/*.vue',
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: 'else',
        except: ['blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': null, // Handled by stylelint-scss at-rule-no-unknown,
    'color-hex-length': 'long',
    'color-named': 'never',
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['after-comment'],
      },
    ],
    'custom-property-empty-line-before': [
      'never',
      {
        ignore: ['after-custom-property'],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-template'],
      },
    ],
    'declaration-no-important': true,
    'function-no-unknown': null, // Accept SCSS functions.
    'import-notation': 'string',
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'], // Allow 0px for variables and calc().
      },
    ],
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'no-irregular-whitespace': true,
    'selector-attribute-quotes': 'always',
    ...selectorClassPattern,
    'selector-max-id': 0,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['property'],
      },
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'order/order': [
      'dollar-variables',
      'custom-properties',
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: null,
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
      'rules',
    ],
    'value-keyword-case': null,

    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'text-decoration-skip'],
      },
    ],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: ['::-webkit-input-placeholder', ':-moz-placeholder', 'box'],
      },
    ],
    'custom-property-pattern': null,
  },
};
