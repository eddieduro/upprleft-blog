define('torii/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration'], function (exports, _toriiBootstrapTorii, _toriiConfiguration) {
  'use strict';

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  if (window.DS) {
    initializer.after = 'store';
  }

  exports['default'] = initializer;
});