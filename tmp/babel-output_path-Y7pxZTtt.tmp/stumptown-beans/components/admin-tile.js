define('stumptown-beans/components/admin-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete(post) {
        if (confirm('Are you sure you want to delete this post?')) {
          this.sendAction('destroyPost', post);
        }
      },
      update: function update(post, params) {
        this.sendAction('update', post, params);
      }
    }
  });
});