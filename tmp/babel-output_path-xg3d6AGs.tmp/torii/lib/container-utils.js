define("torii/lib/container-utils", ["exports"], function (exports) {
  "use strict";

  exports.hasRegistration = hasRegistration;
  exports.register = register;
  exports.lookupFactory = lookupFactory;
  exports.lookup = lookup;

  function hasRegistration(application, name) {
    if (application && application.hasRegistration) {
      return application.hasRegistration(name);
    } else {
      return application.registry.has(name);
    }
  }

  function register(applicationInstance, name, factory) {
    if (applicationInstance && applicationInstance.application) {
      return applicationInstance.application.register(name, factory);
    } else {
      return applicationInstance.registry.register(name, factory);
    }
  }

  function lookupFactory(applicationInstance, name) {
    if (applicationInstance && applicationInstance.lookupFactory) {
      return applicationInstance.lookupFactory(name);
    } else if (applicationInstance && applicationInstance.application) {
      return applicationInstance.application.__container__.lookupFactory(name);
    } else {
      return applicationInstance.container.lookupFactory(name);
    }
  }

  function lookup(applicationInstance, name) {
    if (applicationInstance && applicationInstance.lookup) {
      return applicationInstance.lookup(name);
    } else if (applicationInstance && applicationInstance.application) {
      return applicationInstance.application.__container__.lookup(name);
    } else {
      return applicationInstance.container.lookup(name);
    }
  }
});