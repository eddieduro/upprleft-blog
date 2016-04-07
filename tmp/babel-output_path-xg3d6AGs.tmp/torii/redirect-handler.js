define("torii/redirect-handler", ["exports", "torii/lib/popup-id-serializer", "torii/services/popup"], function (exports, _toriiLibPopupIdSerializer, _toriiServicesPopup) {
  /**
   * RedirectHandler will attempt to find
   * these keys in the URL. If found,
   * this is an indication to Torii that
   * the Ember app has loaded inside a popup
   * and should postMessage this data to window.opener
   */

  "use strict";

  var RedirectHandler = Ember.Object.extend({

    run: function run() {
      var windowObject = this.windowObject;

      return new Ember.RSVP.Promise(function (resolve, reject) {
        var pendingRequestKey = windowObject.localStorage.getItem(_toriiServicesPopup.CURRENT_REQUEST_KEY);
        windowObject.localStorage.removeItem(_toriiServicesPopup.CURRENT_REQUEST_KEY);
        if (pendingRequestKey) {
          var url = windowObject.location.toString();
          windowObject.localStorage.setItem(pendingRequestKey, url);

          windowObject.close();
        } else {
          reject('Not a torii popup');
        }
      });
    }

  });

  RedirectHandler.reopenClass({
    // untested
    handle: function handle(windowObject) {
      var handler = RedirectHandler.create({ windowObject: windowObject });
      return handler.run();
    }
  });

  exports["default"] = RedirectHandler;
});