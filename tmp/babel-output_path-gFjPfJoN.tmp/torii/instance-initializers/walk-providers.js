define('torii/instance-initializers/walk-providers', ['exports', 'torii/configuration', 'torii/lib/container-utils'], function (exports, _toriiConfiguration, _toriiLibContainerUtils) {
  'use strict';

  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in _toriiConfiguration['default'].providers) {
        if (_toriiConfiguration['default'].providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});