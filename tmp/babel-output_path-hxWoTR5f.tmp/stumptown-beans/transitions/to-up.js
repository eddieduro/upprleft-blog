define("stumptown-beans/transitions/to-up", ["exports", "stumptown-beans/transitions/move-over"], function (exports, _stumptownBeansTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _stumptownBeansTransitionsMoveOver["default"].call(this, 'y', -1, opts);
  };
});