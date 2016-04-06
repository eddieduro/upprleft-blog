define('lodash/utility/times', ['exports', 'lodash/internal/bindCallback', 'lodash/internal/root'], function (exports, _lodashInternalBindCallback, _lodashInternalRoot) {
  'use strict';

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeFloor = Math.floor,
      nativeIsFinite = _lodashInternalRoot['default'].isFinite,
      nativeMin = Math.min;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /**
   * Invokes the iteratee function `n` times, returning an array of the results
   * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
   * one argument; (index).
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Array} Returns the array of results.
   * @example
   *
   * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
   * // => [3, 6, 4]
   *
   * _.times(3, function(n) {
   *   mage.castSpell(n);
   * });
   * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
   *
   * _.times(3, function(n) {
   *   this.cast(n);
   * }, mage);
   * // => also invokes `mage.castSpell(n)` three times
   */
  function times(n, iteratee, thisArg) {
    n = nativeFloor(n);

    // Exit early to avoid a JSC JIT bug in Safari 8
    // where `Array(0)` is treated as `Array(1)`.
    if (n < 1 || !nativeIsFinite(n)) {
      return [];
    }
    var index = -1,
        result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

    iteratee = (0, _lodashInternalBindCallback['default'])(iteratee, thisArg, 1);
    while (++index < n) {
      if (index < MAX_ARRAY_LENGTH) {
        result[index] = iteratee(index);
      } else {
        iteratee(index);
      }
    }
    return result;
  }

  exports['default'] = times;
});