const wallabyWebpack = require('wallaby-webpack')
const wallabyPostprocessor = wallabyWebpack()

module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      {
        pattern: 'src/**/*.js',
        load: false,
      },
      '!src/**/*.spec.js',
    ],
    tests: [{ pattern: 'src/**/*.spec.js', load: false }],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    setup: () => {
      window.expect = chai.expect
      window.__moduleBundler.loadTests()
    },
    postprocessor: wallabyPostprocessor,
    env: {
      kind: 'chrome',
    },
  }
}
