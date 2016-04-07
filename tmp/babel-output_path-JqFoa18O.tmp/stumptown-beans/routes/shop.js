define('stumptown-beans/routes/shop', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('product');
    },
    actions: {
      toggleModal: function toggleModal() {
        this.toggleProperty('enabled');
      }
    }
  });
});