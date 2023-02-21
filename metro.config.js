const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Remove all console logs in production...
config.resolver.assetExts.push("obj");
config.resolver.assetExts.push("png");
config.resolver.assetExts.push("jpg");

module.exports = config;