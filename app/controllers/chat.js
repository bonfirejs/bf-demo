import Ember from 'ember';
import md5 from 'npm:blueimp-md5/js/md5';

export default Ember.Controller.extend({
  users: [
    {
      name: 'Nathan Ward',
      email: 'ward@digivine.com',
      image: 'http://www.gravatar.com/avatar/' + md5('ward@digivine.com') + '?s=60'
    },
    {
      name: 'Murali Sundar',
      email: 'murali.sundar@intel.com',
      image: 'http://www.gravatar.com/avatar/' + md5('murali.sundar@intel.com') + '?s=60'
    }
  ],
  chats: [
    {
      user: {
        name: 'Nathan Ward',
        image: 'http://www.gravatar.com/avatar/' + md5('ward@digivine.com') + '?s=60',
        isCurrentUser: true
      },
      message: 'Does this chat interface actually work?',
      timestamp: Date.now()
    },
    {
      user: {
        name: 'Murali Sundar',
        image: 'http://www.gravatar.com/avatar/' + md5('murali.sundar@intel.com') + '?s=60',
        isCurrentUser: false
      },
      message: 'I guess so. Cool, dude.',
      timestamp: Date.now()
    }
  ],
  chatsLabel: function() {
    return this.get('chats.length') + ' messages';
  }.property('chats.length'),
  usersLabel: function() {
    return this.get('users.length') + ' users';
  }.property('users.length'),
  actions: {
    sendMessage: function() {
      var chat = {
        user: {
          name: this.get('name'),
          image: 'http://www.gravatar.com/avatar/' + md5(this.get('email')) + '?s=60',
          isCurrentUser: false
        },
        message: this.get('message'),
        timestamp: Date.now()
      };
      this.get('chats').pushObject(chat);
      this.set('message', '');
    }
  }
});
