define('torii/instance-initializers/setup-routes', ['exports', 'torii/configuration', 'torii/bootstrap/routing', 'torii/router-dsl-ext'], function (exports, _toriiConfiguration, _toriiBootstrapRouting, _toriiRouterDslExt) {
  'use strict';

  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      if (_toriiConfiguration['default'].sessionServiceName) {
        var router = applicationInstance.get('router');
        var setupRoutes = function setupRoutes() {
          var authenticatedRoutes = router.router.authenticatedRoutes;
          var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
          if (hasAuthenticatedRoutes) {
            (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
          }
          router.off('willTransition', setupRoutes);
        };
        router.on('willTransition', setupRoutes);
      }
    }
  };
});