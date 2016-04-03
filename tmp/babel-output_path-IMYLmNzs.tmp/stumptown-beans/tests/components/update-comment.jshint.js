define('stumptown-beans/tests/components/update-comment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/update-comment.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/update-comment.js should pass jshint.\ncomponents/update-comment.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/update-comment.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});