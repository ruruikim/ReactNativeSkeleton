module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.tsx', '.ts'],
        alias: {
          '^@/(.+)$': './app/\\1',
          '@styles': './app/styles',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : 'env',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
};
