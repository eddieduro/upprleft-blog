export { isNot };
import Ember from 'ember';

function isNot(params /*, hash*/) {
  return !params[0];
}

export default Ember.Helper.helper(isNot);