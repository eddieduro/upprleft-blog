define('stumptown-beans/tests/components/update-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/update-post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/update-post.js should pass jshint.\ncomponents/update-post.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/update-post.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/update-post.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/update-post.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});