module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead'],
      grid: true,
    },
    'postcss-replace': {
      from: /color-adjust/g,
      to: 'print-color-adjust',
    },
  },
};
