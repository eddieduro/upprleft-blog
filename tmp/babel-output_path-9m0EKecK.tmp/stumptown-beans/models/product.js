define('stumptown-beans/models/product', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    company: _emberData['default'].attr('string'),
    price: _emberData['default'].attr('number'),
    quantity: _emberData['default'].attr('number'),
    image: _emberData['default'].attr('string')
  });
});