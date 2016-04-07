QUnit.module('JSHint - components/comment-tile.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/comment-tile.js should pass jshint.\ncomponents/comment-tile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/comment-tile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
