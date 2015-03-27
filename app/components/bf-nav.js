import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service(),
  routes: function() {
    var routes = Object.keys(this.get('router.router.recognizer.names'));
    routes = routes.filter(function(item) {
      return !item.endsWith('index') && !item.endsWith('loading') && !item.endsWith('error') && item !== 'application';
    }).map(function(item) {
      return {
        routeName: item,
        name: item.capitalize()
      };
    }).sortBy('name');
    routes.unshiftObject({route: 'index', name: 'Home'});
    return routes;
  }.property('router')
});
