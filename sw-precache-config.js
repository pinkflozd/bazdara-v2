/* Config for offline caching with Service Worker Precache
   https://www.polymer-project.org/1.0/toolbox/service-worker
   https://github.com/GoogleChrome/sw-precache/blob/master/GettingStarted.md */

module.exports = {

  cacheId: 'bazdara-app-v1',

  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/spinner.css',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/data/**/*.*',
    '/fonts/**/*.*',
    '/images/**/*.*'
  ],

  navigateFallback: '/index.html',

  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/|\/__\/).*/],

  runtimeCaching: [{
    /* Google Analytics */
    urlPattern: /https?:\/\/((www|ssl)\.)?google-analytics\.com\/analytics.js/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/x\.bazdara\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/beta\.bazdara\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /^https:\/\/www\.bazdara\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /\/data\/.*/,
    handler: 'cacheFirst',
    options: {
      cache: {
        maxEntries: 200,
        name: 'data-cache'
      }
    }
  }]

};
