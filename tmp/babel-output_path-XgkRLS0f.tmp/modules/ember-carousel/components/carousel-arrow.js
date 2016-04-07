import Ember from 'ember';
import layout from '../templates/components/carousel-arrow';

var carouselArrowClassMap = {
  left: 'carousel-left-arrow',
  right: 'carousel-right-arrow'
};

var carouselSlideActionMap = {
  left: 'slideLeft',
  right: 'slideRight'
};

var computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
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