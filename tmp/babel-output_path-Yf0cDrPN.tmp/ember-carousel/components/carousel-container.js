define('ember-carousel/components/carousel-container', ['exports', 'ember', 'ember-carousel/templates/components/carousel-container'], function (exports, _ember, _emberCarouselTemplatesComponentsCarouselContainer) {
  'use strict';

  var computed = _ember['default'].computed;
  var on = _ember['default'].on;
  var run = _ember['default'].run;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberCarouselTemplatesComponentsCarouselContainer['default'],
    classNames: ['carousel-container'],
    'transition-interval': 500,

    isCarouselParentContainer: true,

    carouselItems: null,
    totalCarouselItems: computed.reads('carouselItems.length'),

    initializeCarouselItems: on('init', function () {
      this.set('carouselItems', _ember['default'].A());
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
});