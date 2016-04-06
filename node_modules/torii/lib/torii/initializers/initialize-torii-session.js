import configuration from 'torii/configuration';
import bootstrapSession from 'torii/bootstrap/session';

export default {
  name: 'torii-session',
  after: 'torii',

  initialize: function(application) {
    if (arguments[1]) { // Ember < 2.1
      application = arguments[1];
    }
    if (configuration.sessionServiceName) {
      bootstrapSession(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  }
};
