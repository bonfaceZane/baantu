const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');

const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

// Create the default Metro config
const config = getDefaultConfig(projectRoot);

// Add the additional `cjs` extension to the resolver
config.resolver.sourceExts.push('cjs');

// Add support for importing workspace projects
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Configure for SVG support
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// Configure expo-router to use app directory
config.resolver.roots = [
  path.resolve(projectRoot, 'app'),
  path.resolve(projectRoot, '.'),
];

module.exports = withNxMetro(config, projectRoot);
