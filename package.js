Package.describe({
  name: 'differential:vulcanize',
  summary: 'Vulcanize',
  version: '3.0.0',
  git: 'https://github.com/Differential/meteor-vulcanize'
});

Package.registerBuildPlugin({
  name: 'vulcanize',
  use: [
    "underscore@1.0.4"
  ],
  sources: [
    'vulcanize.js'
  ],
  npmDependencies: { 'vulcanize': '1.14.0' }
});

Package.onUse(function (api) {
  api.use('underscore');
  api.use('isobuild:compiler-plugin@1.0.0');
});
