define('stumptown-beans/services/shopping-cart', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    products: [],
    add: function add(product) {
      this.get('products').pushObject(product);
    },
    remove: function remove(product) {
      this.get('products').removeObject(product);
    }
  });
});