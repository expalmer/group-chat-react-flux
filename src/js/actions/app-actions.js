var AppConstants  = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {

  addUser: function( name ) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_USER,
      name: name
    });
  },

  removeUser: function( index ) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_USER,
      index: index
    });
  },

  changeActiveUsers: function ( index ) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CHANGE_ACTIVE_USER,
      index: index
    });
  },

  addMessage: function ( text, index ) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_MESSAGE,
      text: text,
      index: index
    });
  }

};

module.exports = AppActions;
