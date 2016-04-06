define('stumptown-beans/components/shopping-cart', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    shoppingCart: _ember['default'].inject.service()
  });
});