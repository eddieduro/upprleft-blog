QUnit.module('JSHint - models/comment.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/comment.js should pass jshint.\nmodels/comment.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/comment.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
