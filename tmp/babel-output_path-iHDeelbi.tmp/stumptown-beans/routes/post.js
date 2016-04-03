define('stumptown-beans/routes/post', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('post', params.post_id);
    },
    actions: {
      saveComment: function saveComment(params) {
        var newComment = this.store.createRecord('comment', params);
        var post = params.post;
        post.get('comments').addObject(newComment);
        newComment.save().then(function () {
          return post.save();
        });
        this.transitionTo('post', params.post);
      },
      deleteComment: function deleteComment(comment) {
        comment.destroyRecord();
        this.transitionTo('post', params.post);
      }
    }
  });
});