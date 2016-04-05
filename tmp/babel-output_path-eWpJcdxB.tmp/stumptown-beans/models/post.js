define('stumptown-beans/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    body: _emberData['default'].attr(),
    image: _emberData['default'].attr(),
    date: _emberData['default'].attr(),
    comments: _emberData['default'].hasMany('comment', { async: true })
  });
});