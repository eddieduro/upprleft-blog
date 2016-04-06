define('ember-bootstrap/components/bs-accordion', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Bootstrap-style accordion group, with collapsible/expandable items.
   See http://getbootstrap.com/components/#btn-groups
  
   Use as a block level component with any number of {{#crossLink "Components.AccordionItem"}}{{/crossLink}} components as children:
  
   ```handlebars
    \{{#bs-accordion selected=selected}}
        \{{#bs-accordion-item value="1" title="First item"}}
          <p>Lorem ipsum...</p>
        \{{/bs-accordion-item}}
        \{{#bs-accordion-item value="2" title="Second item"}}
          <p>Lorem ipsum...</p>
        \{{/bs-accordion-item}}
        \{{#bs-accordion-item value="3" title="Third item"}}
          <p>Lorem ipsum...</p>
        \{{/bs-accordion-item}}
    \{{/bs-accordion}}
  
    <p>Selected accordion item: \{{selected}}</p>
   ```
  
  
   @class Accordion
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['panel-group'],
    ariaRole: 'tablist',

    /**
     * The value of the currently selected accordion item
     *
     * @property selected
     * @public
     */
    selected: null,

    actions: {
      selected: function selected(currentValue, previousValue) {
        this.sendAction('action', currentValue, previousValue);
      }
    }

  });
});