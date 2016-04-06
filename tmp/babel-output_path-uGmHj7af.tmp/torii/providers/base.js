define('torii/providers/base', ['exports', 'torii/lib/required-property'], function (exports, _toriiLibRequiredProperty) {
  'use strict';

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
    name: (0, _toriiLibRequiredProperty['default'])(),

    /**
     * The name of the configuration property
     * that holds config information for this provider.
     * @property {string} configNamespace
     */
    configNamespace: computed('name', function () {
      return 'providers.' + this.get('name');
    })

  });

  exports['default'] = Base;
});