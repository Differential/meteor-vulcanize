Package.describe({
  name: 'differential:vulcanize',
  summary: 'Vulcanize',
  version: '0.0.5',
  git: 'https://github.com/Differential/meteor-vulcanize'
});

Package.registerBuildPlugin({
  name: 'vulcanize',
  use: [],
  sources: [
    'vulcanize.js'
  ],
  npmDependencies: {'vulcanize': '1.8.1'}
});
