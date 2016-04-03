define('ember-disqus/utils/default-for', ['exports'], function (exports) {
  'use strict';

  exports['default'] = defaultFor;

  function defaultFor(variable, defaultValue) {
    if (typeof variable !== 'undefined' && variable !== null) {
      return variable;
    } else {
      return defaultValue;
    }
  }
});