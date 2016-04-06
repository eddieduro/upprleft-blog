define('stumptown-beans/services/firebase', ['exports', 'emberfire/services/firebase', 'stumptown-beans/config/environment'], function (exports, _emberfireServicesFirebase, _stumptownBeansConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _stumptownBeansConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});