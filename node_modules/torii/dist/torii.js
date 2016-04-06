/**
 * Torii version: 0.6.1
 * Built: Thu Oct 01 2015 11:31:40 GMT-0400 (EDT)
 */
(function() {

var define, requireModule, require, requirejs;

(function() {

  var _isArray;
  if (!Array.isArray) {
    _isArray = function (x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    };
  } else {
    _isArray = Array.isArray;
  }

  var registry = {};
  var seen = {};
  var FAILED = false;

  var uuid = 0;

  function tryFinally(tryable, finalizer) {
    try {
      return tryable();
    } finally {
      finalizer();
    }
  }

  function unsupportedModule(length) {
    throw new Error("an unsupported module was defined, expected `define(name, deps, module)` instead got: `" + length + "` arguments to define`");
  }

  var defaultDeps = ['require', 'exports', 'module'];

  function Module(name, deps, callback, exports) {
    this.id       = uuid++;
    this.name     = name;
    this.deps     = !deps.length && callback.length ? defaultDeps : deps;
    this.exports  = exports || { };
    this.callback = callback;
    this.state    = undefined;
    this._require  = undefined;
  }


  Module.prototype.makeRequire = function() {
    var name = this.name;

    return this._require || (this._require = function(dep) {
      return require(resolve(dep, name));
    });
  }

  define = function(name, deps, callback) {
    if (arguments.length < 2) {
      unsupportedModule(arguments.length);
    }

    if (!_isArray(deps)) {
      callback = deps;
      deps     =  [];
    }

    registry[name] = new Module(name, deps, callback);
  };

  // we don't support all of AMD
  // define.amd = {};
  // we will support petals...
  define.petal = { };

  function Alias(path) {
    this.name = path;
  }

  define.alias = function(path) {
    return new Alias(path);
  };

  function reify(mod, name, seen) {
    var deps = mod.deps;
    var length = deps.length;
    var reified = new Array(length);
    var dep;
    // TODO: new Module
    // TODO: seen refactor
    var module = { };

    for (var i = 0, l = length; i < l; i++) {
      dep = deps[i];
      if (dep === 'exports') {
        module.exports = reified[i] = seen;
      } else if (dep === 'require') {
        reified[i] = mod.makeRequire();
      } else if (dep === 'module') {
        mod.exports = seen;
        module = reified[i] = mod;
      } else {
        reified[i] = requireFrom(resolve(dep, name), name);
      }
    }

    return {
      deps: reified,
      module: module
    };
  }

  function requireFrom(name, origin) {
    var mod = registry[name];
    if (!mod) {
      throw new Error('Could not find module `' + name + '` imported from `' + origin + '`');
    }
    return require(name);
  }

  function missingModule(name) {
    throw new Error('Could not find module ' + name);
  }
  requirejs = require = requireModule = function(name) {
    var mod = registry[name];

    if (mod && mod.callback instanceof Alias) {
      mod = registry[mod.callback.name];
    }

    if (!mod) { missingModule(name); }

    if (mod.state !== FAILED &&
        seen.hasOwnProperty(name)) {
      return seen[name];
    }

    var reified;
    var module;
    var loaded = false;

    seen[name] = { }; // placeholder for run-time cycles

    tryFinally(function() {
      reified = reify(mod, name, seen[name]);
      module = mod.callback.apply(this, reified.deps);
      loaded = true;
    }, function() {
      if (!loaded) {
        mod.state = FAILED;
      }
    });

    var obj;
    if (module === undefined && reified.module.exports) {
      obj = reified.module.exports;
    } else {
      obj = seen[name] = module;
    }

    if (obj !== null &&
        (typeof obj === 'object' || typeof obj === 'function') &&
          obj['default'] === undefined) {
      obj['default'] = obj;
    }

    return (seen[name] = obj);
  };

  function resolve(child, name) {
    if (child.charAt(0) !== '.') { return child; }

    var parts = child.split('/');
    var nameParts = name.split('/');
    var parentBase = nameParts.slice(0, -1);

    for (var i = 0, l = parts.length; i < l; i++) {
      var part = parts[i];

      if (part === '..') {
        if (parentBase.length === 0) {
          throw new Error('Cannot access parent module of root');
        }
        parentBase.pop();
      } else if (part === '.') {
        continue;
      } else { parentBase.push(part); }
    }

    return parentBase.join('/');
  }

  requirejs.entries = requirejs._eak_seen = registry;
  requirejs.unsee = function(moduleName) {
    delete seen[moduleName];
  };

  requirejs.clear = function() {
    requirejs.entries = requirejs._eak_seen = registry = {};
    seen = state = {};
  };
})();

define("torii/adapters/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ApplicationAdapter = Ember.Object.extend({

      open: function(){
        return new Ember.RSVP.Promise(function(){
          throw new Error(
            'The Torii adapter must implement `open` for a session to be opened');
        });
      },

      fetch: function(){
        return new Ember.RSVP.Promise(function(){
          throw new Error(
            'The Torii adapter must implement `fetch` for a session to be fetched');
        });
      },

      close: function(){
        return new Ember.RSVP.Promise(function(){
          throw new Error(
            'The Torii adapter must implement `close` for a session to be closed');
        });
      }

    });

    __exports__["default"] = ApplicationAdapter;
  });
define("torii/bootstrap/routing", 
  ["torii/routing/application-route-mixin","torii/routing/authenticated-route-mixin","torii/lib/container-utils","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var ApplicationRouteMixin = __dependency1__["default"];
    var AuthenticatedRouteMixin = __dependency2__["default"];
    var lookup = __dependency3__.lookup;
    var lookupFactory = __dependency3__.lookupFactory;
    var register = __dependency3__.register;

    var AuthenticatedRoute = null;

    function reopenOrRegister(applicationInstance, factoryName, mixin) {
      var factory = lookup(applicationInstance, factoryName);
      var basicFactory;

      if (factory) {
        factory.reopen(mixin);
      } else {
        basicFactory = lookupFactory(applicationInstance, 'route:basic');
        if (!AuthenticatedRoute) {
          AuthenticatedRoute = basicFactory.extend(AuthenticatedRouteMixin);
        }
        register(applicationInstance, factoryName, AuthenticatedRoute);
      }
    }

    __exports__["default"] = function(applicationInstance, authenticatedRoutes){
      reopenOrRegister(applicationInstance, 'route:application', ApplicationRouteMixin);
      for (var i = 0; i < authenticatedRoutes.length; i++) {
        var routeName = authenticatedRoutes[i];
        var factoryName = 'route:' + routeName;
        reopenOrRegister(applicationInstance, factoryName, AuthenticatedRouteMixin);
      }
    }
  });
define("torii/bootstrap/session", 
  ["torii/services/torii-session","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ToriiSessionService = __dependency1__["default"];

    __exports__["default"] = function(application, sessionName){
      var sessionFactoryName = 'service:' + sessionName;
      application.register(sessionFactoryName, ToriiSessionService);
      application.inject(sessionFactoryName, 'torii', 'service:torii');
      application.inject('route',      sessionName, sessionFactoryName);
      application.inject('controller', sessionName, sessionFactoryName);
    }
  });
define("torii/bootstrap/torii", 
  ["torii/providers/linked-in-oauth2","torii/providers/google-oauth2","torii/providers/google-oauth2-bearer","torii/providers/facebook-connect","torii/providers/facebook-oauth2","torii/adapters/application","torii/providers/twitter-oauth1","torii/providers/github-oauth2","torii/providers/azure-ad-oauth2","torii/providers/stripe-connect","torii/providers/edmodo-connect","torii/services/torii","torii/services/popup","torii/lib/container-utils","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __exports__) {
    "use strict";
    var LinkedInOauth2Provider = __dependency1__["default"];
    var GoogleOauth2Provider = __dependency2__["default"];
    var GoogleOauth2BearerProvider = __dependency3__["default"];
    var FacebookConnectProvider = __dependency4__["default"];
    var FacebookOauth2Provider = __dependency5__["default"];
    var ApplicationAdapter = __dependency6__["default"];
    var TwitterProvider = __dependency7__["default"];
    var GithubOauth2Provider = __dependency8__["default"];
    var AzureAdOauth2Provider = __dependency9__["default"];
    var StripeConnectProvider = __dependency10__["default"];
    var EdmodoConnectProvider = __dependency11__["default"];

    var ToriiService = __dependency12__["default"];
    var PopupService = __dependency13__["default"];

    var hasRegistration = __dependency14__.hasRegistration;

    __exports__["default"] = function(application) {
      application.register('service:torii', ToriiService);

      application.register('torii-provider:linked-in-oauth2', LinkedInOauth2Provider);
      application.register('torii-provider:google-oauth2', GoogleOauth2Provider);
      application.register('torii-provider:google-oauth2-bearer', GoogleOauth2BearerProvider);
      application.register('torii-provider:facebook-connect', FacebookConnectProvider);
      application.register('torii-provider:facebook-oauth2', FacebookOauth2Provider);
      application.register('torii-provider:twitter', TwitterProvider);
      application.register('torii-provider:github-oauth2', GithubOauth2Provider);
      application.register('torii-provider:azure-ad-oauth2', AzureAdOauth2Provider);
      application.register('torii-provider:stripe-connect', StripeConnectProvider);
      application.register('torii-provider:edmodo-connect', EdmodoConnectProvider);
      application.register('torii-adapter:application', ApplicationAdapter);

      application.register('torii-service:popup', PopupService);

      application.inject('torii-provider', 'popup', 'torii-service:popup');

      if (window.DS) {
        var storeFactoryName = 'store:main';
        if (hasRegistration(application, 'service:store')) {
          storeFactoryName = 'service:store';
        }
        application.inject('torii-provider', 'store', storeFactoryName);
        application.inject('torii-adapter', 'store', storeFactoryName);
      }
    }
  });
define("torii/configuration", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var get = Ember.get;

    var configuration       = get(window, 'ENV.torii') || {};
    configuration.providers = configuration.providers || {};

    function configurable(configKey, defaultValue){
      return Ember.computed(function configurableComputed(){
        // Trigger super wrapping in Ember 2.1.
        // See: https://github.com/emberjs/ember.js/pull/12359
        this._super = this._super || (function(){ throw new Error('should always have _super'); })();
        var namespace = this.get('configNamespace'),
            fullKey   = namespace ? [namespace, configKey].join('.') : configKey,
            value     = get(configuration, fullKey);
        if (typeof value === 'undefined') {
          if (typeof defaultValue !== 'undefined') {
            if (typeof defaultValue === 'function') {
              return defaultValue.call(this);
            } else {
              return defaultValue;
            }
          } else {
            throw new Error("Expected configuration value "+fullKey+" to be defined!");
          }
        }
        return value;
      });
    }

    __exports__.configurable = configurable;

    __exports__["default"] = configuration;
  });
define("torii/initializers/initialize-torii-callback", 
  ["torii/redirect-handler","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var RedirectHandler = __dependency1__["default"];

    __exports__["default"] = {
      name: 'torii-callback',
      before: 'torii',
      initialize: function(application) {
        if (arguments[1]) { // Ember < 2.1
          application = arguments[1];
        }
        application.deferReadiness();
        RedirectHandler.handle(window).catch(function(){
          application.advanceReadiness();
        });
      }
    };
  });
define("torii/initializers/initialize-torii-session", 
  ["torii/configuration","torii/bootstrap/session","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];
    var bootstrapSession = __dependency2__["default"];

    __exports__["default"] = {
      name: 'torii-session',
      after: 'torii',

      initialize: function(application) {
        if (arguments[1]) { // Ember < 2.1
          application = arguments[1];
        }
        if (configuration.sessionServiceName) {
          bootstrapSession(application, configuration.sessionServiceName);

          var sessionFactoryName = 'service:' + configuration.sessionServiceName;
          application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
        }
      }
    };
  });
define("torii/initializers/initialize-torii", 
  ["torii/bootstrap/torii","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var bootstrapTorii = __dependency1__["default"];
    var configuration = __dependency2__["default"];

    var initializer = {
      name: 'torii',
      initialize: function(application) {
        if (arguments[1]) { // Ember < 2.1
          application = arguments[1];
        }
        bootstrapTorii(application);
        application.inject('route', 'torii', 'service:torii');
      }
    };

    if (window.DS) {
      initializer.after = 'store';
    }

    __exports__["default"] = initializer;
  });
define("torii/instance-initializers/setup-routes", 
  ["torii/configuration","torii/bootstrap/routing","torii/router-dsl-ext","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];
    var bootstrapRouting = __dependency2__["default"];

    __exports__["default"] = {
      name: 'torii-setup-routes',
      initialize: function(applicationInstance, registry){
        if (configuration.sessionServiceName) {
          var router = applicationInstance.get('router');
          var setupRoutes = function(){
            var authenticatedRoutes = router.router.authenticatedRoutes;
            var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
            if (hasAuthenticatedRoutes) {
              bootstrapRouting(applicationInstance, authenticatedRoutes);
            }
            router.off('willTransition', setupRoutes);
          };
          router.on('willTransition', setupRoutes);
        }
      }
    };
  });
define("torii/instance-initializers/walk-providers", 
  ["torii/configuration","torii/lib/container-utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];
    var lookup = __dependency2__.lookup;

    __exports__["default"] = {
      name: 'torii-walk-providers',
      initialize: function(applicationInstance){
        // Walk all configured providers and eagerly instantiate
        // them. This gives providers with initialization side effects
        // like facebook-connect a chance to load up assets.
        for (var key in  configuration.providers) {
          if (configuration.providers.hasOwnProperty(key)) {
            lookup(applicationInstance, 'torii-provider:'+key);
          }
        }

      }
    };
  });
define("torii/lib/container-utils", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function hasRegistration(application, name) {
      if (application && application.hasRegistration) {
        return application.hasRegistration(name);
      } else {
        return application.registry.has(name);
      }
    }

    __exports__.hasRegistration = hasRegistration;
    function register(applicationInstance, name, factory) {
      if (applicationInstance && applicationInstance.application) {
        return applicationInstance.application.register(name, factory);
      } else {
        return applicationInstance.registry.register(name, factory);
      }
    }

    __exports__.register = register;
    function lookupFactory(applicationInstance, name) {
      if (applicationInstance && applicationInstance.lookupFactory) {
        return applicationInstance.lookupFactory(name);
      } else if (applicationInstance && applicationInstance.application) {
        return applicationInstance.application.__container__.lookupFactory(name);
      } else {
        return applicationInstance.container.lookupFactory(name);
      }
    }

    __exports__.lookupFactory = lookupFactory;
    function lookup(applicationInstance, name) {
      if (applicationInstance && applicationInstance.lookup) {
        return applicationInstance.lookup(name);
      } else if (applicationInstance && applicationInstance.application) {
        return applicationInstance.application.__container__.lookup(name);
      } else {
        return applicationInstance.container.lookup(name);
      }
    }

    __exports__.lookup = lookup;
  });
define("torii/lib/load-initializer", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global Ember */
    __exports__["default"] = function(initializer){
      Ember.onLoad('Ember.Application', function(Application){
        Application.initializer(initializer);
      });
    }
  });
define("torii/lib/load-instance-initializer", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global Ember */
    __exports__["default"] = function(instanceInitializer){
      Ember.onLoad('Ember.Application', function(Application){
        Application.instanceInitializer(instanceInitializer);
      });
    }
  });
define("torii/lib/parse-query-string", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Object.extend({
      init: function() {
        this.validKeys = this.keys;
      },

      parse: function(){
        var url       = this.url,
            validKeys = this.validKeys,
            data      = {};

        for (var i = 0; i < validKeys.length; i++) {
          var key = validKeys[i],
              regex = new RegExp(key + "=([^&#]*)"),
              match = regex.exec(url);
          if (match) {
            data[key] = match[1];
          }
        }
        return data;
      }
    });
  });
define("torii/lib/popup-id-serializer", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PopupIdSerializer = {
      serialize: function(popupId){
        return "torii-popup:" + popupId;
      },

      deserialize: function(serializedPopupId){
        if (!serializedPopupId){
          return null;
        }

        var match = serializedPopupId.match(/^(torii-popup:)(.*)/);
        return match ? match[2] : null;
      },
    };


    __exports__["default"] = PopupIdSerializer;
  });
define("torii/lib/query-string", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var camelize = Ember.String.camelize,
        get      = Ember.get;

    function isValue(value){
      return (value || value === false);
    }

    function getParamValue(obj, paramName, optional){
      var camelizedName = camelize(paramName),
          value         = get(obj, camelizedName);

      if (!optional) {
        if ( !isValue(value) && isValue(get(obj, paramName))) {
          throw new Error(
            'Use camelized versions of url params. (Did not find ' +
            '"' + camelizedName + '" property but did find ' +
            '"' + paramName + '".');
        }

        if (!isValue(value)) {
          throw new Error(
            'Missing url param: "'+paramName+'". (Looked for: property named "' +
            camelizedName + '".'
          );
        }
      }

      return isValue(value) ? encodeURIComponent(value) : undefined;
    }

    function getOptionalParamValue(obj, paramName){
      return getParamValue(obj, paramName, true);
    }

    __exports__["default"] = Ember.Object.extend({
      init: function() {
        this.obj               = this.provider;
        this.urlParams         = Ember.A(this.requiredParams).uniq();
        this.optionalUrlParams = Ember.A(this.optionalParams || []).uniq();

        this.optionalUrlParams.forEach(function(param){
          if (this.urlParams.indexOf(param) > -1) {
            throw new Error("Required parameters cannot also be optional: '" + param + "'");
          }
        }, this);
      },

      toString: function() {
        var urlParams         = this.urlParams,
            optionalUrlParams = this.optionalUrlParams,
            obj               = this.obj,
            keyValuePairs     = Ember.A([]);

        urlParams.forEach(function(paramName){
          var paramValue = getParamValue(obj, paramName);

          keyValuePairs.push( [paramName, paramValue] );
        });

        optionalUrlParams.forEach(function(paramName){
          var paramValue = getOptionalParamValue(obj, paramName);

          if (isValue(paramValue)) {
            keyValuePairs.push( [paramName, paramValue] );
          }
        });

        return keyValuePairs.map(function(pair){
          return pair.join('=');
        }).join('&');
      }
    });
  });
define("torii/lib/random-url-safe", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function randomUrlSafe(length) {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';

      for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return result;
    }
  });
define("torii/lib/required-property", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function requiredProperty(){
      return Ember.computed(function(key){
        throw new Error("Definition of property "+key+" by a subclass is required.");
      });
    }

    __exports__["default"] = requiredProperty;
  });
define("torii/lib/state-machine", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /*
     * Modification of Stefan Penner's StateMachine.js: https://github.com/stefanpenner/state_machine.js/
     *
     * This modification requires Ember.js to be loaded first
     */

    var a_slice = Array.prototype.slice;
    var o_keys = Object.keys;

    function makeArray(entry){
      if (entry.constructor === Array) {
        return entry;
      }else if(entry) {
        return [entry];
      }else{
        return [];
      }
    }

    function StateMachine(options){
      var initialState = options.initialState;
      this.states = options.states;

      if (!this.states) {
        throw new Error('StateMachine needs states');
      }

      this.state  = this.states[initialState];

      if (!this.state) {
        throw new Error('Missing initial state');
      }

      this.currentStateName = initialState;

      this._subscriptions = {};

      var beforeTransitions = (options.beforeTransitions ||[]);
      var afterTransitions  = (options.afterTransitions ||[]);
      var rule;

      var i, length;
      for(i = 0, length = beforeTransitions.length; length > i; i++){
        rule = beforeTransitions[i];
        this.beforeTransition.call(this, rule, rule.fn);
      }

      for(i = 0, length = afterTransitions.length; length > i; i++){
        rule = afterTransitions[i];
        this.afterTransition.call(this, rule, rule.fn);
      }
    }

    var SPLAT = StateMachine.SPLAT = '*';

    StateMachine.transitionTo = function(state){
      return function(){
        this.transitionTo(state);
      };
    };

    StateMachine.prototype = {
      states: {},
      toString: function(){
        return "<StateMachine currentState:'" + this.currentStateName +"' >";
      },

      transitionTo: function(nextStateName){
        if (nextStateName.charAt(0) === '.') {
          var splits = this.currentStateName.split('.').slice(0,-1);

          // maybe all states should have an implicit leading dot (kinda like dns)
          if (0 < splits.length){
            nextStateName = splits.join('.') + nextStateName;
          } else {
            nextStateName = nextStateName.substring(1);
          }
        }

        var state = this.states[nextStateName],
        stateName = this.currentStateName;

        if (!state) {
          throw new Error('Unknown State: `' + nextStateName + '`');
        }
        this.willTransition(stateName, nextStateName);

        this.state = state;

        this.currentStateName = nextStateName;
        this.didTransition(stateName, nextStateName);
      },

      beforeTransition: function(options, fn) {
        this._transition('willTransition', options, fn);
      },

      afterTransition: function(options, fn) {
        this._transition('didTransition', options, fn);
      },

      _transition: function(event, filter, fn) {
        var from = filter.from || SPLAT,
          to = filter.to || SPLAT,
          context = this,
          matchingTo, matchingFrom,
          toSplatOffset, fromSplatOffset,
          negatedMatchingTo, negatedMatchingFrom;

        if (to.indexOf('!') === 0) {
          matchingTo = to.substr(1);
          negatedMatchingTo = true;
        } else {
          matchingTo = to;
          negatedMatchingTo = false;
        }

        if (from.indexOf('!') === 0) {
          matchingFrom = from.substr(1);
          negatedMatchingFrom = true;
        } else {
          matchingFrom = from;
          negatedMatchingFrom = false;
        }

        fromSplatOffset = matchingFrom.indexOf(SPLAT);
        toSplatOffset = matchingTo.indexOf(SPLAT);

        if (fromSplatOffset >= 0) {
          matchingFrom = matchingFrom.substring(fromSplatOffset, 0);
        }

        if (toSplatOffset >= 0) {
          matchingTo = matchingTo.substring(toSplatOffset, 0);
        }

        this.on(event, function(currentFrom, currentTo) {
          var currentMatcherTo = currentTo,
            currentMatcherFrom = currentFrom,
            toMatches, fromMatches;

          if (fromSplatOffset >= 0){
            currentMatcherFrom = currentFrom.substring(fromSplatOffset, 0);
          }

          if (toSplatOffset >= 0){
            currentMatcherTo = currentTo.substring(toSplatOffset, 0);
          }

          toMatches = (currentMatcherTo === matchingTo) !== negatedMatchingTo;
          fromMatches = (currentMatcherFrom === matchingFrom) !== negatedMatchingFrom;

          if (toMatches && fromMatches) {
            fn.call(this, currentFrom, currentTo);
          }
        });
      },

      willTransition: function(from, to) {
        this._notify('willTransition', from, to);
      },

      didTransition: function(from, to) {
        this._notify('didTransition', from, to);
      },

      _notify: function(name, from, to) {
        var subscriptions = (this._subscriptions[name] || []);

        for( var i = 0, length = subscriptions.length; i < length; i++){
          subscriptions[i].call(this, from, to);
        }
      },

      on: function(event, fn) {
        this._subscriptions[event] = this._subscriptions[event] || [];
        this._subscriptions[event].push(fn);
      },

      off: function(event, fn) {
        var idx = this._subscriptions[event].indexOf(fn);

        if (fn){
          if (idx) {
            this._subscriptions[event].splice(idx, 1);
          }
        }else {
          this._subscriptions[event] = null;
        }
      },

      send: function(eventName) {
        var event = this.state[eventName];
        var args = a_slice.call(arguments, 1);

        if (event) {
          return event.apply(this, args);
        } else {
          this.unhandledEvent(eventName);
        }
      },

      trySend: function(eventName) {
        var event = this.state[eventName];
        var args = a_slice.call(arguments,1);

        if (event) {
          return event.apply(this, args);
        }
      },

      event: function(eventName, callback){
        var states = this.states;

        var eventApi = {
          transition: function() {
            var length = arguments.length,
            first = arguments[0],
            second = arguments[1],
            events = normalizeEvents(eventName, first, second);

            o_keys(events).forEach(function(from){
              var to = events[from];
              compileEvent(states, eventName, from, to, StateMachine.transitionTo(to));
            });
          }
        };

        callback.call(eventApi);
      },

      unhandledEvent: function(event){
        var currentStateName = this.currentStateName,
        message = "Unknown Event: `" + event + "` for: " + this.toString();

        throw new Error(message);
      }
    };

    function normalizeEvents(eventName, first, second){
      var events;
      if (!first) { throw new Error('invalid Transition'); }

      if (second) {
        var froms = first, to = second;
        events = expandArrayEvents(froms, to);
      } else {
        if (first.constructor === Object) {
          events = first;
        } else {
          throw new Error('something went wrong');
        }
      }

      return events;
    }

    function expandArrayEvents(froms, to){
      return  makeArray(froms).reduce(function(events, from){
         events[from] = to;
         return events;
       }, {});
    }

    function compileEvent(states, eventName, from, to, fn){
      var state = states[from];

      if (from && to && state) {
        states[from][eventName] = fn;
      } else {
        var message = "invalid transition state: " + (state && state.currentStateName) + " from: " + from+ " to: " + to ;
        throw new Error(message);
      }
    }

    __exports__["default"] = StateMachine;
  });
define("torii/lib/uuid-generator", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var UUIDGenerator = {
      generate: function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c==='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
      },


    };

    __exports__["default"] = UUIDGenerator;
  });
define("torii/load-initializers", 
  ["torii/lib/load-initializer","torii/lib/load-instance-initializer","torii/initializers/initialize-torii","torii/initializers/initialize-torii-callback","torii/initializers/initialize-torii-session","torii/instance-initializers/setup-routes","torii/instance-initializers/walk-providers","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    var loadInitializer = __dependency1__["default"];
    var loadInstanceInitializer = __dependency2__["default"];
    var initializeTorii = __dependency3__["default"];
    var initializeToriiCallback = __dependency4__["default"];
    var initializeToriiSession = __dependency5__["default"];
    var setupRoutes = __dependency6__["default"];
    var walkProviders = __dependency7__["default"];

    __exports__["default"] = function(){
      loadInitializer(initializeToriiCallback);
      loadInitializer(initializeTorii);
      loadInitializer(initializeToriiSession);
      loadInstanceInitializer(walkProviders);
      loadInstanceInitializer(setupRoutes);
    }
  });
define("torii/providers/azure-ad-oauth2", 
  ["torii/providers/oauth2-code","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Oauth2 = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    var computed = Ember.computed;

    /**
     * This class implements authentication against AzureAD
     * using the OAuth2 authorization flow in a popup window.
     * @class
     */
    var AzureAdOauth2 = Oauth2.extend({
      name: 'azure-ad-oauth2',

      baseUrl: computed(function() {
        return 'https://login.windows.net/' + this.get('tennantId') + '/oauth2/authorize';
      }),

      tennantId: configurable('tennantId', 'common'),

      // additional url params that this provider requires
      requiredUrlParams: ['api-version', 'client_id'],

      optionalUrlParams: ['scope', 'nonce', 'response_mode'],

      responseMode: configurable('responseMode', null),

      responseParams: computed(function () {
        return [ this.get('responseType'), 'state' ];
      }),

      apiVersion: '1.0',

      responseType: configurable('responseType', 'code'),

      redirectUri: configurable('redirectUri', function azureRedirectUri(){
        // A hack that allows redirectUri to be configurable
        // but default to the superclass
        return this._super();
      })
    });

    __exports__["default"] = AzureAdOauth2;
  });
define("torii/providers/base", 
  ["torii/lib/required-property","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var requiredProperty = __dependency1__["default"];

    var computed = Ember.computed;

    /**
     * The base class for all torii providers
     * @class BaseProvider
     */
    var Base = Ember.Object.extend({

     /**
      * The name of the provider
      * @property {string} name
      */
      name: requiredProperty(),

      /**
       * The name of the configuration property
       * that holds config information for this provider.
       * @property {string} configNamespace
       */
      configNamespace: computed('name', function(){
        return 'providers.'+this.get('name');
      })

    });

    __exports__["default"] = Base;
  });
define("torii/providers/edmodo-connect", 
  ["torii/providers/oauth2-bearer","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Oauth2Bearer = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    /*
    * This class implements authentication against Edmodo
    * with the token flow. For more information see
    * https://developers.edmodo.com/edmodo-connect/docs/#connecting-your-application
    * */
    __exports__["default"] = Oauth2Bearer.extend({
      name: 'edmodo-connect',
      baseUrl: 'https://api.edmodo.com/oauth/authorize',
      responseParams: ['access_token'],

      /* Configurable parameters */
      redirectUri: configurable('redirectUri'),
      // See https://developers.edmodo.com/edmodo-connect/docs/#connecting-your-application for the full list of scopes
      scope: configurable('scope', 'basic')
    });
  });
define("torii/providers/facebook-connect", 
  ["torii/providers/base","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /* global FB, $ */

    /**
     * This class implements authentication against facebook
     * connect using the Facebook SDK.
     */

    var Provider = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    var on = Ember.on;
    var fbPromise;

    function fbLoad(settings){
      if (fbPromise) { return fbPromise; }

      var original = window.fbAsyncInit;
      var locale = settings.locale;
      delete settings.locale;
      fbPromise = new Ember.RSVP.Promise(function(resolve, reject){
        window.fbAsyncInit = function(){
          FB.init(settings);
          Ember.run(null, resolve);
        };
        $.getScript('//connect.facebook.net/' + locale + '/sdk.js');
      }).then(function(){
        window.fbAsyncInit = original;
        if (window.fbAsyncInit) {
          window.fbAsyncInit.hasRun = true;
          window.fbAsyncInit();
        }
      });

      return fbPromise;
    }

    function fbLogin(scope, returnScopes, authType){
      return new Ember.RSVP.Promise(function(resolve, reject){
        FB.login(function(response){
          if (response.authResponse) {
            Ember.run(null, resolve, response.authResponse);
          } else {
            Ember.run(null, reject, response.status);
          }
        }, { scope: scope, return_scopes: returnScopes, auth_type: authType });
      });
    }

    function fbNormalize(response){
      var normalized = {
        userId: response.userID,
        accessToken: response.accessToken,
        expiresIn: response.expiresIn
      };
      if (response.grantedScopes) {
        normalized.grantedScopes = response.grantedScopes;
      }
      return normalized;
    }

    var Facebook = Provider.extend({

      // Facebook connect SDK settings:
      name:  'facebook-connect',
      scope: configurable('scope', 'email'),
      returnScopes: configurable('returnScopes', false),
      appId: configurable('appId'),
      version: configurable('version', 'v2.2'),
      xfbml: configurable('xfbml', false),
      channelUrl: configurable('channelUrl', null),
      locale: configurable('locale', 'en_US'),

      // API:
      //
      open: function(options){
        if (options === undefined) options = {};
        var scope = this.get('scope');
        var authType = options.authType;
        var returnScopes = this.get('returnScopes');

        return fbLoad( this.settings() )
          .then(function(){
            return fbLogin(scope, returnScopes, authType);
          })
          .then(fbNormalize);
      },

      settings: function(){
        return {
          status: true,
          cookie: true,
          xfbml: this.get('xfbml'),
          version: this.get('version'),
          appId: this.get('appId'),
          channelUrl: this.get('channelUrl'),
          locale: this.get('locale')
        };
      },

      // Load Facebook's script eagerly, so that the window.open
      // in FB.login will be part of the same JS frame as the
      // click itself.
      loadFbLogin: on('init', function(){
        fbLoad( this.settings() );
      })

    });

    __exports__["default"] = Facebook;
  });
define("torii/providers/facebook-oauth2", 
  ["torii/configuration","torii/providers/oauth2-code","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var configurable = __dependency1__.configurable;
    var Oauth2 = __dependency2__["default"];

    __exports__["default"] = Oauth2.extend({
      name:    'facebook-oauth2',
      baseUrl: 'https://www.facebook.com/dialog/oauth',

      // Additional url params that this provider requires
      requiredUrlParams: ['display'],

      responseParams: ['code', 'state'],

      scope:        configurable('scope', 'email'),

      display: 'popup',
      redirectUri: configurable('redirectUri', function(){
        // A hack that allows redirectUri to be configurable
        // but default to the superclass
        return this._super();
      }),

      open: function() {
        return this._super().then(function(authData){
          if (authData.authorizationCode && authData.authorizationCode === '200') {
            // indication that the user hit 'cancel', not 'ok'
            throw new Error('User canceled authorization');
          }

          return authData;
        });
      }
    });
  });
define("torii/providers/github-oauth2", 
  ["torii/providers/oauth2-code","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Oauth2 = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    /**
     * This class implements authentication against Github
     * using the OAuth2 authorization flow in a popup window.
     * @class
     */
    var GithubOauth2 = Oauth2.extend({
      name:       'github-oauth2',
      baseUrl:    'https://github.com/login/oauth/authorize',

      responseParams: ['code', 'state'],

      redirectUri: configurable('redirectUri', function(){
        // A hack that allows redirectUri to be configurable
        // but default to the superclass
        return this._super();
      })
    });

    __exports__["default"] = GithubOauth2;
  });
define("torii/providers/google-oauth2-bearer", 
  ["torii/providers/oauth2-bearer","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /**
     * This class implements authentication against google
     * using the client-side OAuth2 authorization flow in a popup window.
     */

    var Oauth2Bearer = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    var GoogleOauth2Bearer = Oauth2Bearer.extend({

      name:    'google-oauth2-bearer',
      baseUrl: 'https://accounts.google.com/o/oauth2/auth',

      // additional params that this provider requires
      optionalUrlParams: ['scope', 'request_visible_actions'],

      requestVisibleActions: configurable('requestVisibleActions', ''),

      responseParams: ['access_token'],

      scope: configurable('scope', 'email'),

      redirectUri: configurable('redirectUri',
                                'http://localhost:8000/oauth2callback')
    });

    __exports__["default"] = GoogleOauth2Bearer;
  });
define("torii/providers/google-oauth2", 
  ["torii/providers/oauth2-code","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /**
     * This class implements authentication against google
     * using the OAuth2 authorization flow in a popup window.
     */

    var Oauth2 = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    var GoogleOauth2 = Oauth2.extend({

      name:    'google-oauth2',
      baseUrl: 'https://accounts.google.com/o/oauth2/auth',

      // additional params that this provider requires
      optionalUrlParams: ['scope', 'request_visible_actions', 'access_type', 'approval_prompt', 'hd'],

      requestVisibleActions: configurable('requestVisibleActions', ''),

      accessType: configurable('accessType', ''),

      responseParams: ['code', 'state'],

      scope: configurable('scope', 'email'),

      approvalPrompt: configurable('approvalPrompt', 'auto'),

      redirectUri: configurable('redirectUri',
                                'http://localhost:8000/oauth2callback'),

      hd: configurable('hd', '')
    });

    __exports__["default"] = GoogleOauth2;
  });
define("torii/providers/linked-in-oauth2", 
  ["torii/providers/oauth2-code","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Oauth2 = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    /**
     * This class implements authentication against Linked In
     * using the OAuth2 authorization flow in a popup window.
     *
     * @class LinkedInOauth2
     */
    var LinkedInOauth2 = Oauth2.extend({
      name:       'linked-in-oauth2',
      baseUrl:    'https://www.linkedin.com/uas/oauth2/authorization',

      responseParams: ['code', 'state'],

      redirectUri: configurable('redirectUri', function(){
        // A hack that allows redirectUri to be configurable
        // but default to the superclass
        return this._super();
      })

    });

    __exports__["default"] = LinkedInOauth2;
  });
define("torii/providers/oauth1", 
  ["torii/providers/base","torii/configuration","torii/lib/query-string","torii/lib/required-property","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    /*
     * This class implements authentication against an API
     * using the OAuth1.0a request token flow in a popup window.
     */

    var Provider = __dependency1__["default"];
    var configurable = __dependency2__.configurable;
    var QueryString = __dependency3__["default"];
    var requiredProperty = __dependency4__["default"];

    function currentUrl(){
      return [window.location.protocol,
              "//",
              window.location.host,
              window.location.pathname].join('');
    }

    var Oauth1 = Provider.extend({
      name: 'oauth1',

      requestTokenUri: configurable('requestTokenUri'),

      buildRequestTokenUrl: function(){
        var requestTokenUri = this.get('requestTokenUri');
        return requestTokenUri;
      },

      open: function(){
        var name        = this.get('name'),
            url         = this.buildRequestTokenUrl();

        return this.get('popup').open(url, ['code']).then(function(authData){
          authData.provider = name;
          return authData;
        });
      }
    });

    __exports__["default"] = Oauth1;
  });
define("torii/providers/oauth2-bearer", 
  ["torii/providers/oauth2-code","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Provider = __dependency1__["default"];

    var Oauth2Bearer = Provider.extend({
      responseType: 'token',

      /**
       * @method open
       * @return {Promise<object>} If the authorization attempt is a success,
       * the promise will resolve an object containing the following keys:
       *   - authorizationToken: The `token` from the 3rd-party provider
       *   - provider: The name of the provider (i.e., google-oauth2)
       *   - redirectUri: The redirect uri (some server-side exchange flows require this)
       * If there was an error or the user either canceled the authorization or
       * closed the popup window, the promise rejects.
       */
      open: function(){
        var name        = this.get('name'),
            url         = this.buildUrl(),
            redirectUri = this.get('redirectUri'),
            responseParams = this.get('responseParams');

        return this.get('popup').open(url, responseParams).then(function(authData){
          var missingResponseParams = [];

          responseParams.forEach(function(param){
            if (authData[param] === undefined) {
              missingResponseParams.push(param);
            }
          });

          if (missingResponseParams.length){
            throw new Error("The response from the provider is missing " +
                  "these required response params: " + missingResponseParams.join(', '));
          }

          return {
            authorizationToken: authData,
            provider: name,
            redirectUri: redirectUri
          };
        });
      }
    });

    __exports__["default"] = Oauth2Bearer;
  });
define("torii/providers/oauth2-code", 
  ["torii/providers/base","torii/configuration","torii/lib/query-string","torii/lib/required-property","torii/lib/random-url-safe","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Provider = __dependency1__["default"];
    var configurable = __dependency2__.configurable;
    var QueryString = __dependency3__["default"];
    var requiredProperty = __dependency4__["default"];
    var randomUrlSafe = __dependency5__["default"];

    var computed = Ember.computed;

    function currentUrl(){
      return [window.location.protocol,
              "//",
              window.location.host,
              window.location.pathname].join('');
    }

    /**
     * Implements authorization against an OAuth2 API
     * using the OAuth2 authorization flow in a popup window.
     *
     * Subclasses should extend this class and define the following properties:
     *   - requiredUrlParams: If there are additional required params
     *   - optionalUrlParams: If there are additional optional params
     *   - name: The name used in the configuration `providers` key
     *   - baseUrl: The base url for OAuth2 code-based flow at the 3rd-party
     *
     *   If there are any additional required or optional url params,
     *   include default values for them (if appropriate).
     *
     * @class Oauth2Provider
     */
    var Oauth2 = Provider.extend({
      concatenatedProperties: ['requiredUrlParams','optionalUrlParams'],

      /**
       * The parameters that must be included as query params in the 3rd-party provider's url that we build.
       * These properties are in the format that should be in the URL (i.e.,
       * usually underscored), but they are looked up as camelCased properties
       * on the instance of this provider. For example, if the 'client_id' is
       * a required url param, when building the URL we look up the value of
       * the 'clientId' (camel-cased) property and put it in the URL as
       * 'client_id=' + this.get('clientId')
       * Subclasses can add additional required url params.
       *
       * @property {array} requiredUrlParams
       */
      requiredUrlParams: ['response_type', 'client_id', 'redirect_uri', 'state'],

      /**
       * Parameters that may be included in the 3rd-party provider's url that we build.
       * Subclasses can add additional optional url params.
       *
       * @property {array} optionalUrlParams
       */
      optionalUrlParams: ['scope'],

      /**
       * The base url for the 3rd-party provider's OAuth2 flow (example: 'https://github.com/login/oauth/authorize')
       *
       * @property {string} baseUrl
       */
      baseUrl:      requiredProperty(),

      /**
       * The apiKey (sometimes called app id) that identifies the registered application at the 3rd-party provider
       *
       * @property {string} apiKey
       */
      apiKey:       configurable('apiKey'),

      scope:        configurable('scope', null),
      clientId:     configurable('clientId', function () { return this.get('apiKey'); }),

      state:        configurable('state', function () { return this.get('randomState'); }),

      _randomState: null,
      randomState: computed('_randomState', function() {
        var state = this.get('_randomState');

        if (!state) {
          state = randomUrlSafe(16);
          this.set('_randomState', state);
        }

        return state;
      }),

      /**
       * The oauth response type we expect from the third party provider. Hardcoded to 'code' for oauth2-code flows
       * @property {string} responseType
       */
      responseType: 'code',

     /**
      * List of parameters that we expect
      * to see in the query params that the 3rd-party provider appends to
      * our `redirectUri` after the user confirms/denies authorization.
      * If any of these parameters are missing, the OAuth attempt is considered
      * to have failed (usually this is due to the user hitting the 'cancel' button)
      *
      * @property {array} responseParams
      */
      responseParams: requiredProperty(),

      redirectUri: computed(function defaultRedirectUri(){
        return currentUrl();
      }),

      buildQueryString: function(){
        var requiredParams = this.get('requiredUrlParams'),
            optionalParams = this.get('optionalUrlParams');

        var qs = QueryString.create({
          provider: this,
          requiredParams: requiredParams,
          optionalParams: optionalParams
        });
        return qs.toString();
      },

      buildUrl: function(){
        var base = this.get('baseUrl'),
            qs   = this.buildQueryString();

        return [base, qs].join('?');
      },

      /**
       * @method open
       * @return {Promise<object>} If the authorization attempt is a success,
       * the promise will resolve an object containing the following keys:
       *   - authorizationCode: The `code` from the 3rd-party provider
       *   - provider: The name of the provider (i.e., google-oauth2)
       *   - redirectUri: The redirect uri (some server-side exchange flows require this)
       * If there was an error or the user either canceled the authorization or
       * closed the popup window, the promise rejects.
       */
      open: function(){
        var name        = this.get('name'),
            url         = this.buildUrl(),
            redirectUri = this.get('redirectUri'),
            responseParams = this.get('responseParams'),
            responseType = this.get('responseType'),
            state = this.get('state'),
            shouldCheckState = responseParams.indexOf('state') !== -1;

        return this.get('popup').open(url, responseParams).then(function(authData){
          var missingResponseParams = [];

          responseParams.forEach(function(param){
            if (authData[param] === undefined) {
              missingResponseParams.push(param);
            }
          });

          if (missingResponseParams.length){
            throw new Error("The response from the provider is missing " +
                  "these required response params: " + missingResponseParams.join(', '));
          }

          if (shouldCheckState && authData.state !== state) {
            throw new Error('The response from the provider has an incorrect ' +
                            'session state param: should be "' + state + '", ' +
                            'but is "' + authData.state + '"');
          }

          return {
            authorizationCode: authData[responseType],
            provider: name,
            redirectUri: redirectUri
          };
        });
      }
    });

    __exports__["default"] = Oauth2;
  });
define("torii/providers/stripe-connect", 
  ["torii/providers/oauth2-code","torii/configuration","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Oauth2 = __dependency1__["default"];
    var configurable = __dependency2__.configurable;

    __exports__["default"] = Oauth2.extend({
      name:       'stripe-connect',
      baseUrl:    'https://connect.stripe.com/oauth/authorize',

      // additional url params that this provider requires
      requiredUrlParams: [],
      optionalUrlParams: ['stripe_landing', 'always_prompt'],

      responseParams: ['code', 'state'],

      scope: configurable('scope', 'read_write'),
      stripeLanding: configurable('stripeLanding', ''),
      alwaysPrompt: configurable('alwaysPrompt', 'false'),

      redirectUri: configurable('redirectUri', function() {
        // A hack that allows redirectUri to be configurable
        // but default to the superclass
        return this._super();
      })
    });
  });
define("torii/providers/twitter-oauth1", 
  ["torii/providers/oauth1","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Oauth1Provider = __dependency1__["default"];

    __exports__["default"] = Oauth1Provider.extend({
      name: 'twitter'
    });
  });
define("torii/redirect-handler", 
  ["./lib/popup-id-serializer","./services/popup","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /**
     * RedirectHandler will attempt to find
     * these keys in the URL. If found,
     * this is an indication to Torii that
     * the Ember app has loaded inside a popup
     * and should postMessage this data to window.opener
     */

    var PopupIdSerializer = __dependency1__["default"];
    var CURRENT_REQUEST_KEY = __dependency2__.CURRENT_REQUEST_KEY;

    var RedirectHandler = Ember.Object.extend({

      run: function(){
        var windowObject = this.windowObject;

        return new Ember.RSVP.Promise(function(resolve, reject){
          var pendingRequestKey = windowObject.localStorage.getItem(CURRENT_REQUEST_KEY);
          windowObject.localStorage.removeItem(CURRENT_REQUEST_KEY);
          if (pendingRequestKey) {
            var url = windowObject.location.toString();
            windowObject.localStorage.setItem(pendingRequestKey, url);

            windowObject.close();
          } else{
            reject('Not a torii popup');
          }
        });
      }

    });

    RedirectHandler.reopenClass({
      // untested
      handle: function(windowObject){
        var handler = RedirectHandler.create({windowObject: windowObject});
        return handler.run();
      }
    });

    __exports__["default"] = RedirectHandler;
  });
define("torii/router-dsl-ext", 
  [],
  function() {
    "use strict";
    var Router = Ember.Router;
    var proto = Ember.RouterDSL.prototype;

    var currentMap = null;

    proto.authenticatedRoute = function() {
      this.route.apply(this, arguments);
      currentMap.push(arguments[0]);
    };

    Router.reopen({
      _initRouterJs: function() {
        currentMap = [];
        this._super.apply(this, arguments);
        this.router.authenticatedRoutes = currentMap;
      }
    });
  });
define("torii/routing/application-route-mixin", 
  ["torii/configuration","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      beforeModel: function (transition) {
        var route = this;
        var superBefore = this._super.apply(this, arguments);
        if (superBefore && superBefore.then) {
          return superBefore.then(function() {
            return route.checkLogin(transition);
          });
        } else {
          return route.checkLogin(transition);
        }
      },
      checkLogin: function () {
        return this.get(configuration.sessionServiceName).fetch()
          .catch(function(){
            // no-op, cause no session is ok
          });
      }
    });
  });
define("torii/routing/authenticated-route-mixin", 
  ["torii/configuration","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var configuration = __dependency1__["default"];

    __exports__["default"] = Ember.Mixin.create({
      beforeModel: function (transition) {
        var route = this;
        var superBefore = this._super.apply(this, arguments);
        if (superBefore && superBefore.then) {
          return superBefore.then(function() {
            return route.authenticate(transition);
          });
        } else {
          return route.authenticate(transition);
        }
      },
      authenticate: function (transition) {
        var route = this,
          session = this.get(configuration.sessionServiceName),
          isAuthenticated = this.get(configuration.sessionServiceName + '.isAuthenticated'),
          hasAttemptedAuth = isAuthenticated !== undefined;

        if (!isAuthenticated) {
          session.attemptedTransition = transition;

          if (hasAttemptedAuth) {
            return route.accessDenied(transition);
          } else {
            return session.fetch()
              .catch(function() {
                return route.accessDenied(transition);
              });
          }
        } else {
          // no-op; cause the user is already authenticated
          return Ember.RSVP.resolve();
        }
      },
      accessDenied: function (transition) {
        transition.send('accessDenied');
      }
    });
  });
define("torii/services/popup", 
  ["torii/lib/parse-query-string","torii/lib/uuid-generator","torii/lib/popup-id-serializer","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var ParseQueryString = __dependency1__["default"];
    var UUIDGenerator = __dependency2__["default"];
    var PopupIdSerializer = __dependency3__["default"];

    var CURRENT_REQUEST_KEY = '__torii_request';
    __exports__.CURRENT_REQUEST_KEY = CURRENT_REQUEST_KEY;
    var on = Ember.on;

    function stringifyOptions(options){
      var optionsStrings = [];
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          var value;
          switch (options[key]) {
            case true:
              value = '1';
              break;
            case false:
              value = '0';
              break;
            default:
              value = options[key];
          }
          optionsStrings.push(
            key+"="+value
          );
        }
      }
      return optionsStrings.join(',');
    }

    function prepareOptions(options){
      var width = options.width || 500,
          height = options.height || 500;
      return Ember.$.extend({
        left: ((screen.width / 2) - (width / 2)),
        top: ((screen.height / 2) - (height / 2)),
        width: width,
        height: height
      }, options);
    }

    function parseMessage(url, keys){
      var parser = ParseQueryString.create({url: url, keys: keys}),
          data = parser.parse();
      return data;
    }

    var Popup = Ember.Object.extend(Ember.Evented, {

      init: function() {
        this.popupIdGenerator = this.popupIdGenerator || UUIDGenerator;
      },

      // Open a popup window. Returns a promise that resolves or rejects
      // accoring to if the popup is redirected with arguments in the URL.
      //
      // For example, an OAuth2 request:
      //
      // popup.open('http://some-oauth.com', ['code']).then(function(data){
      //   // resolves with data.code, as from http://app.com?code=13124
      // });
      //
      open: function(url, keys, options){
        var service   = this,
            lastPopup = this.popup;


        return new Ember.RSVP.Promise(function(resolve, reject){
          if (lastPopup) {
            service.close();
          }

          var popupId = service.popupIdGenerator.generate();

          var optionsString = stringifyOptions(prepareOptions(options || {}));
          var pendingRequestKey = PopupIdSerializer.serialize(popupId);
          localStorage.setItem(CURRENT_REQUEST_KEY, pendingRequestKey);
          service.popup = window.open(url, pendingRequestKey, optionsString);

          if (service.popup && !service.popup.closed) {
            service.popup.focus();
          } else {
            reject(new Error(
              'Popup could not open or was closed'));
            return;
          }

          service.one('didClose', function(){
            var pendingRequestKey = localStorage.getItem(CURRENT_REQUEST_KEY);
            if (pendingRequestKey) {
              localStorage.removeItem(pendingRequestKey);
              localStorage.removeItem(CURRENT_REQUEST_KEY);
            }
            // If we don't receive a message before the timeout, we fail. Normally,
            // the message will be received and the window will close immediately.
            service.timeout = Ember.run.later(service, function() {
              reject(new Error("Popup was closed, authorization was denied, or a authentication message otherwise not received before the window closed."));
            }, 100);
          });

          Ember.$(window).on('storage.torii', function(event){
            var storageEvent = event.originalEvent;

            var popupIdFromEvent = PopupIdSerializer.deserialize(storageEvent.key);
            if (popupId === popupIdFromEvent){
              var data = parseMessage(storageEvent.newValue, keys);
              localStorage.removeItem(storageEvent.key);
              Ember.run(function() {
                resolve(data);
              });
            }
          });

          service.schedulePolling();

        }).finally(function(){
          // didClose will reject this same promise, but it has already resolved.
          service.close();
          service.clearTimeout();
          Ember.$(window).off('storage.torii');
        });
      },

      close: function(){
        if (this.popup) {
          this.popup = null;
          this.trigger('didClose');
        }
      },

      pollPopup: function(){
        if (!this.popup) {
          return;
        }
        if (this.popup.closed) {
          this.trigger('didClose');
        }
      },

      schedulePolling: function(){
        this.polling = Ember.run.later(this, function(){
          this.pollPopup();
          this.schedulePolling();
        }, 35);
      },

      // Clear the timeout, in case it hasn't fired.
      clearTimeout: function(){
        Ember.run.cancel(this.timeout);
        this.timeout = null;
      },

      stopPolling: on('didClose', function(){
        Ember.run.cancel(this.polling);
      }),

    });

    __exports__["default"] = Popup;
  });
define("torii/services/torii-session", 
  ["torii/session/state-machine","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var createStateMachine = __dependency1__["default"];

    var computed = Ember.computed;
    var on = Ember.on;

    function lookupAdapter(container, authenticationType){
      var adapter = container.lookup('torii-adapter:'+authenticationType);
      if (!adapter) {
        adapter = container.lookup('torii-adapter:application');
      }
      return adapter;
    }

    __exports__["default"] = Ember.Service.extend(Ember._ProxyMixin, {
      state: null,

      stateMachine: computed(function(){
        return createStateMachine(this);
      }),

      setupStateProxy: on('init', function(){
        var sm    = this.get('stateMachine'),
            proxy = this;
        sm.on('didTransition', function(){
          proxy.set('content', sm.state);
          proxy.set('currentStateName', sm.currentStateName);
        });
      }),

      // Make these properties one-way.
      setUnknownProperty: Ember.K,

      open: function(provider, options){
        var container = this.container,
            torii     = this.get('torii'),
            sm        = this.get('stateMachine');

        return new Ember.RSVP.Promise(function(resolve){
          sm.send('startOpen');
          resolve();
        }).then(function(){
          return torii.open(provider, options);
        }).then(function(authorization){
          var adapter = lookupAdapter(
            container, provider
          );

          return adapter.open(authorization);
        }).then(function(user){
          sm.send('finishOpen', user);
          return user;
        }).catch(function(error){
          sm.send('failOpen', error);
          return Ember.RSVP.reject(error);
        });
      },

      fetch: function(provider, options){
        var container = this.container,
            sm        = this.get('stateMachine');

        return new Ember.RSVP.Promise(function(resolve){
          sm.send('startFetch');
          resolve();
        }).then(function(){
          var adapter = lookupAdapter(
            container, provider
          );

          return adapter.fetch(options);
        }).then(function(data){
          sm.send('finishFetch', data);
          return;
        }).catch(function(error){
          sm.send('failFetch', error);
          return Ember.RSVP.reject(error);
        });
      },

      close: function(provider, options){
        var container = this.container,
            sm        = this.get('stateMachine');

        return new Ember.RSVP.Promise(function(resolve){
          sm.send('startClose');
          resolve();
        }).then(function(){
          var adapter = lookupAdapter(container, provider);
          return adapter.close(options);
        }).then(function(){
          sm.send('finishClose');
        }).catch(function(error){
          sm.send('failClose', error);
          return Ember.RSVP.reject(error);
        });
      }
    });
  });
define("torii/services/torii", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function lookupProvider(container, providerName){
      return container.lookup('torii-provider:'+providerName);
    }

    function proxyToProvider(methodName, requireMethod){
      return function(providerName, options){
        var container = this.container;
        var provider = lookupProvider(container, providerName);
        if (!provider) {
          throw new Error("Expected a provider named '"+providerName+"' " +
                          ", did you forget to register it?");
        }

        if (!provider[methodName]) {
          if (requireMethod) {
            throw new Error("Expected provider '"+providerName+"' to define " +
                            "the '"+methodName+"' method.");
          } else {
            return Ember.RSVP.Promise.resolve({});
          }
        }
        return new Ember.RSVP.Promise(function(resolve, reject){
          resolve( provider[methodName](options) );
        });
      };
    }

    /**
     * Torii is an engine for authenticating against various
     * providers. For example, you can open a session with
     * Linked In via Oauth2 and authorization codes by doing
     * the following:
     *
     *     Torii.open('linked-in-oauth2').then(function(authData){
     *       console.log(authData.authorizationCode);
     *     });
     *
     * For traditional authentication flows, you will often use
     * Torii via the Torii.Session API.
     *
     * @class Torii
     */
    __exports__["default"] = Ember.Service.extend({

      /**
       * Open an authorization against an API. A promise resolving
       * with an authentication response object is returned. These
       * response objects,  are found in the "torii/authentications"
       * namespace.
       *
       * @method open
       * @param {String} providerName The provider to open
       * @return {Ember.RSVP.Promise} Promise resolving to an authentication object
       */
      open:  proxyToProvider('open', true),

      /**
       * Return a promise which will resolve if the provider has
       * already been opened.
       *
       * @method fetch
       * @param {String} providerName The provider to open
       * @return {Ember.RSVP.Promise} Promise resolving to an authentication object
       */
      fetch:  proxyToProvider('fetch'),

      /**
       * Return a promise which will resolve when the provider has been
       * closed. Closing a provider may not always be a meaningful action,
       * and may be better handled by torii's session management instead.
       *
       * @method close
       * @param {String} providerName The provider to open
       * @return {Ember.RSVP.Promise} Promise resolving when the provider is closed
       */
      close:  proxyToProvider('close')
    });
  });
define("torii/session/state-machine", 
  ["torii/lib/state-machine","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var StateMachine = __dependency1__["default"];

    var transitionTo = StateMachine.transitionTo;

    function copyProperties(data, target) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          target[key] = data[key];
        }
      }
    }

    function transitionToClearing(target, propertiesToClear) {
      return function(){
        for (var i;i<propertiesToClear.length;i++) {
          this[propertiesToClear[i]] = null;
        }
        this.transitionTo(target);
      };
    }

    __exports__["default"] = function(session){
      var sm = new StateMachine({
        initialState: 'unauthenticated',

        states: {
          unauthenticated: {
            errorMessage: null,
            isAuthenticated: false,
            // Actions
            startOpen: transitionToClearing('opening', ['errorMessage']),
            startFetch: transitionToClearing('fetching', ['errorMessage'])
          },
          authenticated: {
            // Properties
            currentUser: null,
            isAuthenticated: true,
            startClose: transitionTo('closing')
          },
          opening: {
            isWorking: true,
            isOpening: true,
            // Actions
            finishOpen: function(data){
              copyProperties(data, this.states['authenticated']);
              this.transitionTo('authenticated');
            },
            failOpen: function(errorMessage){
              this.states['unauthenticated'].errorMessage = errorMessage;
              this.transitionTo('unauthenticated');
            }
          },
          fetching: {
            isWorking: true,
            isFetching: true,
            // Actions
            finishFetch: function(data){
              copyProperties(data, this.states['authenticated']);
              this.transitionTo('authenticated');
            },
            failFetch: function(errorMessage){
              this.states['unauthenticated'].errorMessage = errorMessage;
              this.transitionTo('unauthenticated');
            }
          },
          closing: {
            isWorking: true,
            isClosing: true,
            isAuthenticated: true,
            // Actions
            finishClose: function(){
              this.transitionTo('unauthenticated');
            },
            failClose: function(errorMessage){
              this.states['unauthenticated'].errorMessage = errorMessage;
              this.transitionTo('unauthenticated');
            }
          }
        }
      });
      sm.session = session;
      return sm;
    }
  });
require('torii/load-initializers').default();
})();
