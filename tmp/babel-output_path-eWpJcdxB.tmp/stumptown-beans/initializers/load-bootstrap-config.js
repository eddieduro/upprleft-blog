define('stumptown-beans/initializers/load-bootstrap-config', ['exports', 'stumptown-beans/config/environment', 'ember-bootstrap/config'], function (exports, _stumptownBeansConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_stumptownBeansConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});