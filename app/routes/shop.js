 import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.query('product',{
      limitToFirst: 6
    });
  },
  actions: {
    toggleModal() {
      this.toggleProperty('enabled');
    },
  }
});
