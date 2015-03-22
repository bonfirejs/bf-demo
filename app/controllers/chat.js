import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitMessage: function() {
      var chat = this.store.createRecord('chat', {
        name: this.get('name'),
        message: this.get('message')
      });
      chat.save().always(() => {
        this.send('clearInput');
      });
    },
    clearInput: function() {
      this.set('name', '');
      this.set('message', '');
    }
  }
});
