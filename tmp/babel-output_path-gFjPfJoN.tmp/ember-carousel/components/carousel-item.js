define('ember-carousel/components/carousel-item', ['exports', 'ember', 'ember-carousel/templates/components/carousel-item'], function (exports, _ember, _emberCarouselTemplatesComponentsCarouselItem) {
  'use strict';

  var on = _ember['default'].on;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberCarouselTemplatesComponentsCarouselItem['default'],
    carousel: _ember['default'].inject.service(),
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
});