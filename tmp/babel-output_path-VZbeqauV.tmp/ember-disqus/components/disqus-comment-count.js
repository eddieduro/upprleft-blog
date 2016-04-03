define('ember-disqus/components/disqus-comment-count', ['exports', 'ember', 'ember-disqus/templates/components/disqus-comment-count', 'ember-disqus/utils/load-disqus-api'], function (exports, _ember, _emberDisqusTemplatesComponentsDisqusCommentCount, _emberDisqusUtilsLoadDisqusApi) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    attributeBindings: ['identifier:data-disqus-identifier'],
    classNames: ['disqus-comment-count'],
    layout: _emberDisqusTemplatesComponentsDisqusCommentCount['default'],
    removeNoun: false,
    tagName: 'span',

    /* Options */

    identifier: null,

    disqusCallback: function disqusCallback() {
      var disqusWidgets = window.DISQUSWIDGETS;

      if (disqusWidgets) {
        disqusWidgets.getCount(); // Required when transitioning between routes
      }
    },

    /**
    Assert that all required properties have been passed to this component and, if required, load the `count.js` script.
     @method setup
    */

    setup: _ember['default'].on('didInsertElement', function () {
      _ember['default'].assert('A Disqus identifier must be set on the {{disqus-comment-count}} component', this.get('identifier'));

      if (this.get('removeNoun')) {
        this.get('element').addEventListener('DOMSubtreeModified', function (event) {
          var target = event.target;

          /* Remove non-digit characters. For example '8 Comments' --> '8' */

          target.textContent = target.textContent.replace(/[\D]/g, '');
        });
      }

      (0, _emberDisqusUtilsLoadDisqusApi['default'])(this, 'count');
    })
  });
});