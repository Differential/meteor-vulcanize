Package.describe({
  name: 'differential:vulcanize',
  summary: 'Vulcanize',
  version: '1.1.0',
  git: 'https://github.com/Differential/meteor-vulcanize'
});

Package.registerBuildPlugin({
  name: 'vulcanize',
  use: [
    "underscore@1.0.3"
  ],
  sources: [
    'vulcanize.js'
  ],
  npmDependencies: {'vulcanize': '1.9.1'}
});
