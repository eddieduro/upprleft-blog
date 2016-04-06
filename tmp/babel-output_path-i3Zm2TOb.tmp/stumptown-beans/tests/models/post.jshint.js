define('stumptown-beans/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/post.js should pass jshint.\nmodels/post.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/post.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});