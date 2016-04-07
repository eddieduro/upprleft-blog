define('stumptown-beans/controllers/shop', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    shoppingCart: _ember['default'].inject.service(),
    actions: {
      add: function add() {
        this.get('shoppingCart').add(this.get('model'));
      }
    }
  });
});