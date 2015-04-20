import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    window.route = this;
    window.store = this.store;
    window.clearDB = function() {
      window.indexedDB.deleteDatabase('_pouch_hello');
      window.indexedDB.deleteDatabase('_pouch_local_pouch');
    };
  }
});
