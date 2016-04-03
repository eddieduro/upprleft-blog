define('stumptown-beans/components/update-post', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    updatePost: false,
    actions: {
      updatePost: function updatePost() {
        this.set('updatePost', true);
      },
      update: function update(post) {
        var params = {
          title: this.get('title'),
          body: this.get('body'),
          image: this.get('image'),
          date: this.get('date')
        };
        this.set('updatePost', false);
        this.sendAction('update', post, params);
      }
    }
  });
});