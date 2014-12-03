Package.describe({
  name: 'schnie:vulcanize',
  summary: 'Vulcanize',
  version: '0.0.1'
});

Package.registerBuildPlugin({
  name: 'vulcanize',
  use: [],
  sources: [
    'schnie:vulcanize.js'
  ],
  npmDependencies: {'vulcanize': '0.7.1'}
});
