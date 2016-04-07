define('stumptown-beans/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'stumptown-beans/tests/helpers/start-app', 'stumptown-beans/tests/helpers/destroy-app'], function (exports, _qunit, _stumptownBeansTestsHelpersStartApp, _stumptownBeansTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _stumptownBeansTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _stumptownBeansTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});