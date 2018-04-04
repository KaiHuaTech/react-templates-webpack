module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
      arrowFunctions: true,
      classes: true,
      modules: true,
      defaultParams: true
    },
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: "airbnb",
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    "import/newline-after-import": 0,
    // jsx 文件允许 .js
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    "space-before-function-paren": 0,
    "arrow-body-style": 0,
    "global-require": 0,
    "react/forbid-prop-types": 0,
    "import/extensions": 0,
    "import/extensions": 0,
    "import/no-unresolved": [
      2,
      { ignore: ['^@'] }
    ],
    "react/require-default-props": 0,
    "arrow-parens": 0,
    "max-len": 0
  }
};
