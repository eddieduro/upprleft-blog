define('ember-cli-star-rating/components/star-rating', ['exports', 'ember', 'ember-cli-star-rating/templates/components/star-rating'], function (exports, _ember, _emberCliStarRatingTemplatesComponentsStarRating) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['rating-panel'],

    layout: _emberCliStarRatingTemplatesComponentsStarRating['default'],

    rating: 0,
    maxRating: 5,
    item: null,
    "on-click": null,

    fullClassNames: 'glyphicon glyphicon-star',
    emptyClassNames: 'glyphicon glyphicon-star-empty',

    stars: _ember['default'].computed('rating', 'maxRating', function () {
      var rating = Math.round(this.get('rating'));
      var fullStars = this.starRange(1, rating, 'full');
      var emptyStars = this.starRange(rating + 1, this.get('maxRating'), 'empty');
      return fullStars.concat(emptyStars);
    }),

    starRange: function starRange(start, end, type) {
      var starsData = [];
      for (var i = start; i <= end; i++) {
        starsData.push({ rating: i, full: type === 'full' });
      }
      return starsData;
    },

    actions: {
      set: function set(newRating) {
        var actionType = typeof this.attrs['on-click'];
        if (actionType === 'function') {
          this.attrs['on-click']({
            item: this.get('item'),
            rating: newRating
          });
        } else {
          this.sendAction('on-click', {
            item: this.get('item'),
            rating: newRating
          });
        }
      }
    }
  });
});