define('ember-disqus/components/disqus-comments', ['exports', 'ember', 'ember-disqus/utils/default-for', 'ember-disqus/templates/components/disqus-comments', 'ember-disqus/utils/load-disqus-api', 'ember-disqus/utils/observers/set-on-window'], function (exports, _ember, _emberDisqusUtilsDefaultFor, _emberDisqusTemplatesComponentsDisqusComments, _emberDisqusUtilsLoadDisqusApi, _emberDisqusUtilsObserversSetOnWindow) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    elementId: 'disqus_thread',
    classNames: ['disqus-comments'],

    /**
    Options that can be passed to identify the requested Disqus comment thread
    */

    categoryId: null,
    identifier: null,
    title: null,
    layout: _emberDisqusTemplatesComponentsDisqusComments['default'],

    /**
    Assert that all required properties have been passed to this component and, if required, load the `embed.js` script.
     The `#disqus_thread` element (this component) must be on the page before the `embed.js` script is loaded. Thus, we run this method on `didInsertElement`.
     @method setup
    */

    setup: _ember['default'].on('didInsertElement', function () {
      _ember['default'].assert('A Disqus identifier must be set on the {{disqus-comments}} component', this.get('identifier'));

      if (!window.DISQUS) {
        (0, _emberDisqusUtilsLoadDisqusApi['default'])(this, 'embed');
      } else {
        this.reset();
      }
    }),

    /**
    Adds ajax functionality to the comment thread. This method tells Disqus to load the comment thread with the given attributes.
     Usually you don't need to manually call this method - `ember-disqus` calls it in private methods.
     @method reset
    @param [identifier] the Disqus identifier to request the thread with. If not passed, will default to the component's current `identifier` property
    @param [title] the Disqus title to request the thread with. If not passed, will default to the component's current `title` property
    */

    reset: function reset(identifier, title) {
      _ember['default'].run.debounce(this, function () {
        identifier = (0, _emberDisqusUtilsDefaultFor['default'])(identifier, this.get('identifier'));
        title = (0, _emberDisqusUtilsDefaultFor['default'])(title, this.get('title'));

        /** @ref https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites */

        window.DISQUS.reset({
          reload: true,
          config: function config() {
            this.page.identifier = identifier;
            this.page.url = window.location.href;

            if (title) {
              this.page.title = title;
            }
          }
        });
      }, 100);
    },

    /**
    Disqus requires that all it's properties be set on the window. These methods observe the Disqus attributes and set them as required when they change.
    */

    _setCategoryId: (0, _emberDisqusUtilsObserversSetOnWindow['default'])('categoryId', 'disqus_category_id'),
    _setIdentifier: (0, _emberDisqusUtilsObserversSetOnWindow['default'])('identifier', 'disqus_identifier'),
    _setTitle: (0, _emberDisqusUtilsObserversSetOnWindow['default'])('title', 'disqus_title'),

    /**
    Update the disqus comment thread when one of the thread attributes being passed to this component changes.
     @method _updateDisqusComments
    @private
     @todo - need a better way of identifying if DISQUS is already loaded here
    */

    _updateDisqusComments: _ember['default'].observer('categoryId', 'identifier', 'shortname', 'title', function () {
      if (window.DISQUS) {
        _ember['default'].run.debounce(this, this.reset, 100);
      }
    })

  });
});