import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    updatePost() {
      this.set('updatePost', true);
    },
    update(post) {
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
