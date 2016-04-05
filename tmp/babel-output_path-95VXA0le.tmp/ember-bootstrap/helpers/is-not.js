define('ember-bootstrap/helpers/is-not', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.isNot = isNot;

  function isNot(params /*, hash*/) {
    return !params[0];
  }

  exports['default'] = _ember['default'].Helper.helper(isNot);
});