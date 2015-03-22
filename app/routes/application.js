import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    window.route = this;
    window.store = this.store;
  },
  model: function() {
    // Auto-generate navigation from routes
    var routes = Object.keys(this.router.router.recognizer.names);
    routes = routes.filter(function(item) {
      return !item.endsWith('index') && !item.endsWith('loading') && !item.endsWith('error') && item !== 'application';
    }).map(function(item) {
      return {
        route: item,
        name: item.capitalize()
      };
    }).sortBy('name');
    routes.unshiftObject({route: 'index', name: 'Home'});
    this.controllerFor('navigation').set('routes', routes);
  }
});
