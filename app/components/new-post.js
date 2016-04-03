import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    newPostFormShow(){
      this.set('newPostForm', true);
    },
    savePost(){
      var params = {
        title: this.get('title') ? this.get('title'): "",
        body: this.get('body') ? this.get('body'): "",
        image: this.get('image') ? this.get('image'): "",
        date: this.get('date') ? this.get('date'): "",
      };
      this.set('newPostForm', false);
      this.sendAction('savePost', params);
    }
  }
});
