import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  totalPrice: Ember.computed('products.length', function() {
    var totalPrice = 0;

    for(let product of this.get('products')){
      totalPrice += product.get('price');
    }
    return totalPrice;
  }),
  add(product){
    this.get('products').pushObject(product)
  },
  remove(product){
    this.get('products').removeObject(product)
  }
});
