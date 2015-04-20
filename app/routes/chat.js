import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.controllerFor('chat').set('users', this.store.filter('user'));
    return this.store.find('chat');
  }
});
