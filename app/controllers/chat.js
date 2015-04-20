import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['timestamp'],
  sortAscending: true,
  chats: Ember.computed.alias('arrangedContent'),
  chatsLabel: function() {
    return this.get('chats.length') + ' messages';
  }.property('chats.length'),
  usersLabel: function() {
    return this.get('users.length') + ' users';
  }.property('users.length'),
  currentUser: null,
  actions: {
    addUser: function() {
      var user = this.store.createRecord('user', {
        name: this.get('name'),
        email: this.get('email'),
      });
      user.save().then(user => {
        console.log('user:', user);
        this.set('currentUser', user);
      }).catch(reason => {
        window.console.log('Error saving user', reason);
      });
    },
    sendMessage: function() {
      var user = this.store.all('user').filterBy('email', this.get('email')).get('firstObject');
      var chat = this.store.createRecord('chat', {
        name: this.get('name'),
        message: this.get('message'),
        timestamp: Date.now(),
        user: user
      });
      chat.save().then(() => {
        this.set('message', '');
        Ember.$('.direct-chat-messages .direct-chat-msg:last-child').get(0).scrollIntoView();
      }).catch(reason => {
        window.console.log('Error sending message', reason);
      });
    }
  }
});
