define('stumptown-beans/tests/test-helper', ['exports', 'stumptown-beans/tests/helpers/resolver', 'ember-qunit'], function (exports, _stumptownBeansTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_stumptownBeansTestsHelpersResolver['default']);
});