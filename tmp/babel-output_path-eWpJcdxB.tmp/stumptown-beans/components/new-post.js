define('stumptown-beans/components/new-post', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newPostForm: false,
    actions: {
      newPostFormShow: function newPostFormShow() {
        this.set('newPostForm', true);
      },
      savePost: function savePost() {
        var params = {
          title: this.get('title') ? this.get('title') : "",
          body: this.get('body') ? this.get('body') : "",
          image: this.get('image') ? this.get('image') : "",
          date: this.get('date') ? this.get('date') : ""
        };
        this.set('newPostForm', false);
        this.sendAction('savePost', params);
      }
    }
  });
});