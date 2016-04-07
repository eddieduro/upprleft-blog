define('stumptown-beans/tests/torii-adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - torii-adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'torii-adapters/application.js should pass jshint.\ntorii-adapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ntorii-adapters/application.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ntorii-adapters/application.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});