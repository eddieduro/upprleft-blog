define('stumptown-beans/routes/comment', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('comment', params.commment_id);
    }
  });
});