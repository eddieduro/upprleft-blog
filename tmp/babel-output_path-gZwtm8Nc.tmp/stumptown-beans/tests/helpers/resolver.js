define('stumptown-beans/tests/helpers/resolver', ['exports', 'stumptown-beans/resolver', 'stumptown-beans/config/environment'], function (exports, _stumptownBeansResolver, _stumptownBeansConfigEnvironment) {

  var resolver = _stumptownBeansResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _stumptownBeansConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _stumptownBeansConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});