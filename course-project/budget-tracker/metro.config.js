// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

/* Allows to recognise the .db extension */
/* metro.config.js id generated by npx expo customize metro.config.js*/
config.resolver.assetExts.push('db');

module.exports = config;
