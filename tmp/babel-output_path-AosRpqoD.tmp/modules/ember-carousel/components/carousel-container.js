import Ember from 'ember';
import layout from '../templates/components/carousel-container';

var computed = Ember.computed;
var on = Ember.on;
var run = Ember.run;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['carousel-container'],
  'transition-interval': 500,

  isCarouselParentContainer: true,

  carouselItems: null,
  totalCarouselItems: computed.reads('carouselItems.length'),

  initializeCarouselItems: on('init', function () {
    this.set('carouselItems', Ember.A());
  }),

  activeCarouselItem: computed('carouselItems.length', 'carouselItems.@each.isActive', {
    get: function get() {
      return this.get('carouselItems').findBy('isActive');
    }
  }),

  registerCarouselItem: function registerCarouselItem(carouselItem) {
    this.get('carouselItems').pushObject(carouselItem);
  },

  slide: function slide(newActiveIndex, direction) {
    var carouselItems = this.get('carouselItems');
    var activeCarouselItem = this.get('activeCarouselItem');
    var newActiveCarouselItem = carouselItems[newActiveIndex];
    var transitionInterval = this.get('transition-interval');
    var transitionOffset = 50;

    run(function () {
      activeCarouselItem.set('from', direction);
      newActiveCarouselItem.set('from', direction);
    });

    run.later(function () {
      activeCarouselItem.set('slidingOut', true);
      newActiveCarouselItem.set('slidingIn', true);
    }, transitionOffset);

    run.later(function () {
      activeCarouselItem.setProperties({
        slidingOut: false,
        from: null,
        isActive: false
      });

      newActiveCarouselItem.setProperties({
        slidingIn: false,
        from: null,
        isActive: true
      });
    }, transitionInterval + transitionOffset);
  },

  slideRight: function slideRight() {
    var activeIndex = this.get('activeCarouselItem.index');
    var newActiveIndex = activeIndex - 1;

    if (activeIndex === 0) {
      newActiveIndex = this.get('totalCarouselItems') - 1;
    }

    this.slide(newActiveIndex, 'right');
  },

  slideLeft: function slideLeft() {
    var activeIndex = this.get('activeCarouselItem.index');
    var newActiveIndex = activeIndex + 1;

    if (activeIndex === this.get('totalCarouselItems') - 1) {
      newActiveIndex = 0;
    }

    this.slide(newActiveIndex, 'left');
  }
});