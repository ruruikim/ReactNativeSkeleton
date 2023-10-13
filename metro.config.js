const jsObfuscatorConfig = require('./plugin/metro/obfuscator-config');
const {getDefaultConfig} = require('metro-config');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

module.exports = async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      sourceExts: ['svg', ...sourceExts],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
    },
    ...jsObfuscatorConfig,
  };
};
