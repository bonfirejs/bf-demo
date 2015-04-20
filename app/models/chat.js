import DS from 'ember-data';
import Model from './couch';

export default Model.extend({
  message: DS.attr('string'),
  timestamp: DS.attr('number'),
  user: DS.belongsTo('user', { async: true })
});
