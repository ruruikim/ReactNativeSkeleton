module.exports = require('obfuscator-io-metro-plugin')(
  {
    compact: false,
    sourceMap: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1,
  },
  {
    runInDev: false,
    logObfuscatedFiles: true,
    sourceMapLocation: './index.android.bundle.map',
  },
);
