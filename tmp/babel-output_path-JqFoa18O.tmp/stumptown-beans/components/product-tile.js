define('stumptown-beans/components/product-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    shoppingCart: _ember['default'].inject.service(),

    actions: {
      add: function add(item) {
        this.get('shoppingCart').add(item);
      }
    }
  });
});