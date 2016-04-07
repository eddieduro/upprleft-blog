define('ember-bootstrap/helpers/is-equal', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.isEqual = isEqual;

  function isEqual(params) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(isEqual);
});