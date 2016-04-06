define('stumptown-beans/router', ['exports', 'ember', 'stumptown-beans/config/environment'], function (exports, _ember, _stumptownBeansConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _stumptownBeansConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('admin');
    this.route('post', { path: '/post/:post_id' });
    this.route('about');
    this.route('contact');
    this.route('comment', { path: '/comment/:comment_id' });
    this.route('shop');
  });

  exports['default'] = Router;
});