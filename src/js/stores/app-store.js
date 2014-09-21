
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants  = require('../constants/app-constants');
var merge         = require('react/lib/merge');
var EventEmitter  = require('events').EventEmitter;
var Seed          = require('./seed');

var CHANGE_EVENT  = "change";

var _users  = Seed.users;
var _avatar = Seed.avatar;

var _store = {

  changeActiveUser: function( index ) {
    _users = _users.map( function( user, userIndex ) {
      user.active = userIndex === index ? true : false;
      return user;
    });
  },

  addMessage: function( text, index ) {
    var user = _users[index];
    _users = _users.map( function( userData, userIndex ) {
      if ( userIndex !== index ) {
        userData.last = {
          name: user.name + ' said:',
          message: text.slice(0,20) + '...'
        };
        userData.notifications = (userData.notifications || 0) + 1;
      }
      userData.messages.push({
          name    : user.name,
          avatar  : user.avatar,
          message : text,
          owner   : userIndex === index ? true : false
        });
      return userData;
    });
  },

  addUser: function ( name ) {

    _users.push({
      name          : name,
      avatar        : _store.getRandomAvatar(),
      notifications : 0,
      last: {
        name        : '',
        message     : ''
      },
      active: false,
      messages: []
    });

    _store.changeActiveUser( _users.length - 1 );

  },

  removeUser: function ( index ) {
    _users.splice(index,1);
    _store.changeActiveUser( _users.length - 1 );
  },

  getRandomAvatar: function() {
    var max = _avatar.length - 1;
    var index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return _avatar[ index ];
  }

};

var AppStore = merge(EventEmitter.prototype, {

  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getUsers: function () {
    return _users;
  },

  getActiveUser: function() {

    var active;
    _users.forEach( function( user, index ) {
      if ( user.active === true ) {
        user.notifications = 0;
        user.index = index;
        active = user;
        return false;
      }
    });
    return active;

  },


  dispatcherIndex:AppDispatcher.register(function(payload){

    // this is our action from handleViewAction
    var action = payload.action;

    switch(action.actionType){

      case AppConstants.ADD_USER:
        _store.addUser( payload.action.name );
        break;

      case AppConstants.REMOVE_USER:
        _store.removeUser( payload.action.index );
        break;

      case AppConstants.CHANGE_ACTIVE_USER:
        _store.changeActiveUser( payload.action.index );
        break;

      case AppConstants.ADD_MESSAGE:
        _store.addMessage( payload.action.text, payload.action.index );
        break;

    };

    AppStore.emitChange();

    return true;

  })

});

module.exports = AppStore;
