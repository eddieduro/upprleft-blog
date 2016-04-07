import Ember from 'ember';

export default Ember.Service.extend({
  ratings: [],
  totalRating: Ember.computed('ratings.length', function() {
    var totalRating = 0;

    for(let product of this.get('products')){
      totalRating += product.get('rating');
    }
    return totalRating;
  }),
  add(rating){
    this.get('ratings').push(rating)
  },
});
