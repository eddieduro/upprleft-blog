define('stumptown-beans/routes/shop/product', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      console.log(params);
      return this.store.findRecord('product', params.product_id);
    }
  });
});