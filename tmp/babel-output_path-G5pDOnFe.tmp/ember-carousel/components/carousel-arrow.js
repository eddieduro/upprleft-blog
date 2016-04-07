define('ember-carousel/components/carousel-arrow', ['exports', 'ember', 'ember-carousel/templates/components/carousel-arrow'], function (exports, _ember, _emberCarouselTemplatesComponentsCarouselArrow) {
  'use strict';

  var carouselArrowClassMap = {
    left: 'carousel-left-arrow',
    right: 'carousel-right-arrow'
  };

  var carouselSlideActionMap = {
    left: 'slideLeft',
    right: 'slideRight'
  };

  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberCarouselTemplatesComponentsCarouselArrow['default'],
    carousel: _ember['default'].inject.service(),
    classNamesBindings: ['carousel-arrow-class'],
    direction: 'left',

    'carousel-arrow-class': computed('direction', {
      get: function get() {
        return carouselArrowClassMap[this.get('direction')];
      }
    }),

    click: function click() {
      var method = carouselSlideActionMap[this.get('direction')];
      this.nearestWithProperty('isCarouselParentContainer')[method]();
    }
  });
});