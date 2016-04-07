define('stumptown-beans/tests/unit/helpers/eq-test', ['exports', 'stumptown-beans/helpers/eq', 'qunit'], function (exports, _stumptownBeansHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _stumptownBeansHelpersEq.eq)([42]);
    assert.ok(result);
  });
});