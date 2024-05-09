module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      //reanimated should always be last in the list
      'react-native-reanimated/plugin',
    ],
  };
};
