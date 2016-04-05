define('stumptown-beans/tests/components/new-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/new-post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/new-post.js should pass jshint.\ncomponents/new-post.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-post.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-post.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/new-post.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});