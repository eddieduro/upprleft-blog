define('stumptown-beans/routes/shop', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.query('product', {
        limitToFirst: 6
      });
    },
    actions: {
      toggleModal: function toggleModal() {
        this.toggleProperty('enabled');
      }
    }
  });
});