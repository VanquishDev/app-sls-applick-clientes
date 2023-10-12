module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'postcss-flexbugs-fixes',
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}