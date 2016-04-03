define('stumptown-beans/app', ['exports', 'ember', 'stumptown-beans/resolver', 'ember-load-initializers', 'stumptown-beans/config/environment'], function (exports, _ember, _stumptownBeansResolver, _emberLoadInitializers, _stumptownBeansConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _stumptownBeansConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _stumptownBeansConfigEnvironment['default'].podModulePrefix,
    Resolver: _stumptownBeansResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _stumptownBeansConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});