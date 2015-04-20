import DS from 'ember-data';
import Model from './couch';
import md5 from 'npm:blueimp-md5/js/md5';

export default Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  image: function() {
    var hash = this.get('email') ? md5(this.get('email')) : '';
    return 'http://www.gravatar.com/avatar/' + hash + '?s=60&d=identicon';
  }.property('email')
});
