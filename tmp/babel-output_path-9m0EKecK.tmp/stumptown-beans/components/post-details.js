define('stumptown-beans/components/post-details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      deleteComment: function deleteComment(comment) {
        if (confirm('Are you sure you want to delete this comment?')) {
          this.sendAction('deleteComment', comment);
        }
      }
    }
  });
});