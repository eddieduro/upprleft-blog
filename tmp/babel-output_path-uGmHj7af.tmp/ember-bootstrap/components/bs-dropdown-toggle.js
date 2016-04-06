define('ember-bootstrap/components/bs-dropdown-toggle', ['exports', 'ember', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _ember, _emberBootstrapMixinsDropdownToggle) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
   Anchor element that triggers the parent dropdown to open.
   Use {{#crossLink "Components.DropdownButton"}}{{/crossLink}} if you want a button instead of an anchor tag.
  
   See {{#crossLink "Components.Dropdown"}}{{/crossLink}} for examples.
  
  
   @class DropdownToggle
   @namespace Components
   @extends Ember.Component
   @uses Mixins.DropdownToggle
   @public
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsDropdownToggle['default'], {
    /**
     * Defaults to a `<a>` tag. Change for other types of dropdown toggles.
     *
     * @property tagName
     * @type string
     * @default a
     * @public
     */
    tagName: 'a',

    attributeBindings: ['href'],

    /**
     * Computed property to generate a `href="#"` attribute when `tagName` is "a".
     *
     * @property href
     * @type string
     * @readonly
     * @protected
     */
    href: computed('tagName', function () {
      if (this.get('tagName').toUpperCase() === 'A') {
        return '#';
      }
    }),

    click: function click(e) {
      e.preventDefault();
      this.sendAction();
    }

  });
});