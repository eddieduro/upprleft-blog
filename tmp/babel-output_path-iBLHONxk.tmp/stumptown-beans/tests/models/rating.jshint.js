define('stumptown-beans/tests/models/rating.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/rating.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/rating.js should pass jshint.\nmodels/rating.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/rating.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});