const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("obj");
config.resolver.assetExts.push("xpng");
config.resolver.assetExts.push("xjpg");

module.exports = config;