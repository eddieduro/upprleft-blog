define('stumptown-beans/models/comment', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    author: _emberData['default'].attr(),
    message: _emberData['default'].attr(),
    date: _emberData['default'].attr(),
    post: _emberData['default'].belongsTo('post', { async: true })
  });
});