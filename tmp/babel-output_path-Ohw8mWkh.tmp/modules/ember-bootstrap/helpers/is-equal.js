export { isEqual };
import Ember from 'ember';

function isEqual(params) {
  return params[0] === params[1];
}

export default Ember.Helper.helper(isEqual);