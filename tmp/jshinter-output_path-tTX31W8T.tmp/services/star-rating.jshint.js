QUnit.module('JSHint - services/star-rating.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/star-rating.js should pass jshint.\nservices/star-rating.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/star-rating.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/star-rating.js: line 8, col 21, \'for of\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/star-rating.js: line 8, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/star-rating.js: line 13, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/star-rating.js: line 14, col 37, Missing semicolon.\n\n6 errors');
});
