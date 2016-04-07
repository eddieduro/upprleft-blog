import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    remove(product){
      this.get('shoppingCart').remove(product);
    },
    
  }
});
