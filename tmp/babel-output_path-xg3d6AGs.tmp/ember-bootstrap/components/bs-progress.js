define('ember-bootstrap/components/bs-progress', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Use to group one (or more) {{#crossLink "Components.ProgressBar"}}{{/crossLink}} components inside it.
  
   @class Progress
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['progress']
  });
});