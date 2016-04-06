import bootstrapTorii from 'torii/bootstrap/torii';
import configuration from 'torii/configuration';

var initializer = {
  name: 'torii',
  initialize: function(application) {
    if (arguments[1]) { // Ember < 2.1
      application = arguments[1];
    }
    bootstrapTorii(application);
    application.inject('route', 'torii', 'service:torii');
  }
};

if (window.DS) {
  initializer.after = 'store';
}

export default initializer;
