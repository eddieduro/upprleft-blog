define("stumptown-beans/transitions/to-left", ["exports", "stumptown-beans/transitions/move-over"], function (exports, _stumptownBeansTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _stumptownBeansTransitionsMoveOver["default"].call(this, 'x', -1, opts);
  };
});