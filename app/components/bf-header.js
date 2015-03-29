import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  appName: Ember.String.capitalize(ENV.APP.name)
});
