define('stumptown-beans/services/shopping-cart', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    products: [],

    totalPrice: _ember['default'].computed('products.length', function () {
      var totalPrice = 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.get('products')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var product = _step.value;

          totalPrice += product.get('price');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return totalPrice;
    }),
    add: function add(product) {
      this.get('products').pushObject(product);
    },
    remove: function remove(product) {
      this.get('products').removeObject(product);
    }
  });
});