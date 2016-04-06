define('ember-bootstrap/mixins/component-child', ['exports', 'ember', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _emberBootstrapMixinsComponentParent) {
  'use strict';

  /**
   * Mixin for components that act as a child component in a parent-child relationship of components
   *
   * @class ComponentChild
   * @namespace Mixins
   * @public
   */
  exports['default'] = _ember['default'].Mixin.create({

    _didInsertElement: _ember['default'].on('didInsertElement', function () {
      var parent = this.nearestOfType(_emberBootstrapMixinsComponentParent['default']);
      if (parent) {
        parent.registerChild(this);
      }
    }),

    _willDestroyElement: _ember['default'].on('willDestroyElement', function () {
      var parent = this.nearestOfType(_emberBootstrapMixinsComponentParent['default']);
      if (parent) {
        parent.removeChild(this);
      }
    })
  });
});