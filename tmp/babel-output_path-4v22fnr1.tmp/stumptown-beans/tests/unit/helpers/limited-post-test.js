define('stumptown-beans/tests/unit/helpers/limited-post-test', ['exports', 'stumptown-beans/helpers/limited-post', 'qunit'], function (exports, _stumptownBeansHelpersLimitedPost, _qunit) {

  (0, _qunit.module)('Unit | Helper | limited post');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _stumptownBeansHelpersLimitedPost.limitedPost)([42]);
    assert.ok(result);
  });
});