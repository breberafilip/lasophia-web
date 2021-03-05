module.exports = {
  extends: 'stylelint-config-recommended-scss',
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    // recommended rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^foo',
    'selector-pseudo-element-colon-notation': null,
    'length-zero-no-unit': null,
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
