define('ember-bootstrap/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _emberBootstrapComponentsBsButton, _emberBootstrapMixinsDropdownToggle) {
  'use strict';

  /**
   Button component with that can act as a dropdown toggler.
  
   See {{#crossLink "Components.Dropdown"}}{{/crossLink}} for examples.
  
   @class DropdownButton
   @namespace Components
   @extends Components.Button
   @uses Mixins.DropdownToggle
   @public
   */
  exports['default'] = _emberBootstrapComponentsBsButton['default'].extend(_emberBootstrapMixinsDropdownToggle['default']);
});