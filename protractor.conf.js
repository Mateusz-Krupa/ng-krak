exports.config = {
 baseUrl: 'http://localhost:8080/',
 specs: [
   'src/test/e2e/**/*.js'
 ],
 exclude: [],
 framework: 'jasmine2',
 allScriptsTimeout: 110000,
 jasmineNodeOpts: {
   showTiming: true,
   showColors: true,
   isVerbose: false,
   includeStackTrace: false,
   defaultTimeoutInterval: 400000
 },
 directConnect: true,

 capabilities: {
   'browserName': 'chrome',
 } ,

 onPrepare: function () {
   var SpecReporter = require('jasmine-spec-reporter');
   // add jasmine spec reporter
   jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
  //  export LANG=en_US.UTF-8 fix for stupid protractor error on iOS
  //    browser.ignoreSynchronization = true;
 },


 /**
  * Angular 2 configuration
  *
  * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
  * `rootEl`
  *
  */
//   useAllAngular2AppRoots: true
};