var vulcan = Npm.require('vulcanize');
var _ = Npm.require('underscore');

var handler = function(compileStep) {
  var importsHtml = compileStep.read().toString('utf8');

  if (process.env.VULCANIZE) {
    log('Vulcanizing imports.html...');
    vulcanize(compileStep, importsHtml);
  } else {
    log('Adding imports.html to index.html...');
    addImports(compileStep, importsHtml);
  }

};

var vulcanize = function(compileStep, importsHtml) {

  var vulcanOutputHandler = function(filename, data) {
    compileStep.addAsset({
      path: '/vulcanized.html',
      data: data
    });

    compileStep.addHtml({
      section: 'head',
      data: '<link rel=\'import\' href=\'/vulcanized.html\'>'
    });
  };

  vulcan.setOptions({
    inputSrc: importsHtml,
    outputHandler: vulcanOutputHandler,
    abspath: 'public',
    strip: true
  }, function(error) {
    if (error) {
      log(error);
    } else {
      vulcan.processDocument();
    }
  });

};

var addImports = function(compileStep, importsHtml) {
  compileStep.addHtml({
    section: 'head',
    data: importsHtml
  });
};

var log = function() {
  args = _.values(arguments);
  args.unshift("Vulcanize:");
  console.log.apply(this, args);
};

Plugin.registerSourceHandler("imports.html", handler);
