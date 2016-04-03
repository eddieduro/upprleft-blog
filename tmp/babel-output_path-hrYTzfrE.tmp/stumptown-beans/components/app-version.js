define('stumptown-beans/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'stumptown-beans/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _stumptownBeansConfigEnvironment) {

  var name = _stumptownBeansConfigEnvironment['default'].APP.name;
  var version = _stumptownBeansConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});