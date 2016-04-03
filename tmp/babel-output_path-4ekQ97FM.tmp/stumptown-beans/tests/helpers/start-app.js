define('stumptown-beans/tests/helpers/start-app', ['exports', 'ember', 'stumptown-beans/app', 'stumptown-beans/config/environment'], function (exports, _ember, _stumptownBeansApp, _stumptownBeansConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _stumptownBeansConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _stumptownBeansApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});