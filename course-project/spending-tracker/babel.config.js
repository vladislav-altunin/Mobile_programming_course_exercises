module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      //reanimated plugin shoud be the last in the (array) of plugins
      'react-native-reanimated/plugin',
    ],
  };
};
