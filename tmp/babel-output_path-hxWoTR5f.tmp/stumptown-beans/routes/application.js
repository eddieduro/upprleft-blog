define('stumptown-beans/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      return this.get('session').fetch()['catch'](function () {});
    },
    actions: {
      signIn: function signIn(provider) {
        this.get('session').open('firebase', {
          provider: provider
        }).then(function (data) {
          console.log(data.currentUser);
        });
      },

      signOut: function signOut() {
        this.get('session').close();
      }
    }
  });
});