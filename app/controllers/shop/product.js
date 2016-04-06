import Ember from 'ember';

export default Ember.Controller.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    add(){
      this.get('shoppingCart').add(this.get('model'))
    }
  }
});
