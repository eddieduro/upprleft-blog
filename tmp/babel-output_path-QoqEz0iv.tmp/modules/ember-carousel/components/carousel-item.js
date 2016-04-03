import Ember from 'ember';
import layout from '../templates/components/carousel-item';

var on = Ember.on;
var computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  index: 0,

  _carouselContainer: null,

  isActive: computed('_carouselContainer.carouselItems.[]', {
    get: function get() {
      return this === this.get('_carouselContainer.carouselItems.firstObject');
    },

    set: function set(key, value) {
      return value;
    }
  }),

  registerOnCarosuelBody: on('init', function () {
    var carouselContainer = this.nearestWithProperty('isCarouselParentContainer');
    this.set('_carouselContainer', carouselContainer);
    carouselContainer.registerCarouselItem(this);
    this.set('index', carouselContainer.get('totalCarouselItems') - 1);
  })
});