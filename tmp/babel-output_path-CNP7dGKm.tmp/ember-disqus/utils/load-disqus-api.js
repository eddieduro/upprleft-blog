define('ember-disqus/utils/load-disqus-api', ['exports', 'ember-disqus/utils/disqus-cache', 'ember', 'ember-disqus/utils/default-for'], function (exports, _emberDisqusUtilsDisqusCache, _ember, _emberDisqusUtilsDefaultFor) {
  'use strict';

  exports['default'] = loadFilepickerApi;

  function loadFilepickerApi(context, fileName) {
    var ENV = context.container.lookupFactory('config:environment');

    var documentIsReady = undefined,
        filePath = undefined,
        cachedValue = undefined,
        shortname = undefined,
        shouldLazyLoad = undefined;

    function tryCallback(retrievedFromCache) {
      if (_ember['default'].typeOf(context.disqusCallback) === 'function') {
        context.disqusCallback(retrievedFromCache); // Ensure context
      }
    }

    _ember['default'].assert('You must set a disqus.shortname option in your config/environment module', ENV.disqus && ENV.disqus.shortname);

    shortname = ENV.disqus.shortname;
    shouldLazyLoad = (0, _emberDisqusUtilsDefaultFor['default'])(ENV.disqus.lazyLoad, true);
    filePath = '//' + shortname + '.disqus.com/' + fileName + '.js';
    cachedValue = _emberDisqusUtilsDisqusCache['default'][filePath];

    /* Set the shortname property on the window */

    if (!window.disqus_shortname) {
      window.disqus_shortname = shortname;
    }

    documentIsReady = document.readyState === 'complete';

    /* Check to see is everything else in the app has loaded for lazy loading */

    if (cachedValue) {

      /* Allow the cache to store methods for testing purposes, etc */

      if (_ember['default'].typeOf(cachedValue) === 'function') {
        cachedValue();
      }

      /* If window has the related Disqus property, don't load anything... */

      return tryCallback(true);
    } else if (!shouldLazyLoad || documentIsReady) {

      /* ... Else if we're ready to load the Disqus API, load it... */

      _ember['default'].$.getScript(filePath).then(tryCallback(false));

      _emberDisqusUtilsDisqusCache['default'][filePath] = true; // So we know API has loaded
    } else {

        /* ... Else wait a small period and check again to see if the Ember app has fully loaded. */

        _ember['default'].run.debounce(this, function () {
          loadFilepickerApi(context, fileName);
        }, 200);
      }
  }
});