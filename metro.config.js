const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {getDefaultConfig: getMetroDefaultConfig} = require('metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getMetroDefaultConfig();

  // Merge the default Metro configuration with custom settings
  const baseConfig = getDefaultConfig(__dirname);

  return mergeConfig(baseConfig, {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  });
})();
