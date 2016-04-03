QUnit.module('JSHint - components/post-details.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/post-details.js should pass jshint.\ncomponents/post-details.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/post-details.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/post-details.js: line 5, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
