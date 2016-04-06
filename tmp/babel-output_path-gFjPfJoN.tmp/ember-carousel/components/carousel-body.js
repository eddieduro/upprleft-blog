define('ember-carousel/components/carousel-body', ['exports', 'ember', 'ember-carousel/templates/components/carousel-body'], function (exports, _ember, _emberCarouselTemplatesComponentsCarouselBody) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberCarouselTemplatesComponentsCarouselBody['default'],
    classNames: ['carousel-body']
  });
});