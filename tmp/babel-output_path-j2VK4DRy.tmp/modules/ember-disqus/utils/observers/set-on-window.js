

export default setOnWindow;
import Ember from 'ember';
function setOnWindow(dependentKey, propertyName) {
  return Ember.on('init', Ember.observer(dependentKey, function () {
    window[propertyName] = this.get(dependentKey);
  }));
}