define('stumptown-beans/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'stumptown-beans/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _stumptownBeansConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_stumptownBeansConfigEnvironment['default'].APP.name, _stumptownBeansConfigEnvironment['default'].APP.version)
  };
});