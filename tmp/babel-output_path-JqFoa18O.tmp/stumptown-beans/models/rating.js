define('stumptown-beans/models/rating', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    rating: _emberData['default'].attr(),
    product: _emberData['default'].belongsTo('product', { async: true })
  });
});