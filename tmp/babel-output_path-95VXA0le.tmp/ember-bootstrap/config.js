define('ember-bootstrap/config', ['exports'], function (exports) {
  'use strict';

  var Config = {
    formValidationSuccessIcon: 'glyphicon glyphicon-ok',
    formValidationErrorIcon: 'glyphicon glyphicon-remove',
    formValidationWarningIcon: 'glyphicon glyphicon-warning-sign',
    formValidationInfoIcon: 'glyphicon glyphicon-info-sign',
    insertEmberWormholeElementToDom: true,

    load: function load(config) {
      for (var property in this) {
        if (this.hasOwnProperty(property) && typeof this[property] !== 'function' && typeof config[property] !== 'undefined') {
          this[property] = config[property];
        }
      }
    }
  };

  exports['default'] = Config;
});