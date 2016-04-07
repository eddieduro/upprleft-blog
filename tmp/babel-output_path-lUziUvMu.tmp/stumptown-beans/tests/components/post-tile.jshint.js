define('stumptown-beans/tests/components/post-tile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/post-tile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/post-tile.js should pass jshint.\ncomponents/post-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/post-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});