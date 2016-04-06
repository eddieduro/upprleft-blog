define('ember-disqus/utils/observers/set-on-window', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = setOnWindow;

  function setOnWindow(dependentKey, propertyName) {
    return _ember['default'].on('init', _ember['default'].observer(dependentKey, function () {
      window[propertyName] = this.get(dependentKey);
    }));
  }
});