define('stumptown-beans/routes/admin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('post');
    },
    actions: {
      update: function update(post, params) {
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            post.set(key, params[key]);
          }
        });
        post.save();
        this.transitionTo('admin');
      },
      destroyPost: function destroyPost(post) {
        post.destroyRecord();
        this.transitionTo('admin');
      },
      savePost: function savePost(params) {
        var newPost = this.store.createRecord('post', params);
        newPost.save();
        this.transitionTo('admin');
      }
    }
  });
});