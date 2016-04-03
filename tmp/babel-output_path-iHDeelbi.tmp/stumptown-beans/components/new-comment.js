define('stumptown-beans/components/new-comment', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewComment: false,
    actions: {
      commentFormShow: function commentFormShow() {
        this.set('addNewComment', true);
      },
      saveComment: function saveComment() {
        var params = {
          author: this.get('author'),
          message: this.get('message'),
          date: this.get('date'),
          post: this.get('post')
        };
        this.set('addNewComment', false);
        this.sendAction('saveComment', params);
      }
    }
  });
});