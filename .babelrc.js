/** Babel 7 is used to transpile ES6 modules */
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
    }],
  ],
}
