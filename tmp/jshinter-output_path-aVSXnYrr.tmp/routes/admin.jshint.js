QUnit.module('JSHint - routes/admin.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/admin.js should pass jshint.\nroutes/admin.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin.js: line 8, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin.js: line 17, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/admin.js: line 21, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
});
