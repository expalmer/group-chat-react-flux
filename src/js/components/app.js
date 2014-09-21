/** @jsx React.DOM */

var React    = require('react');
var AppStore = require('../stores/app-store');
var Users    = require('./users');
var AddUser  = require('./add-user');
var Chat     = require('./chat');

var getStores = function() {
  return {
    users      : AppStore.getUsers(),
    activeUser : AppStore.getActiveUser()
  };
};

var APP =
  React.createClass({
    getInitialState:function(){
      return getStores();
    },
    componentWillMount:function(){
      AppStore.addChangeListener( this._onChange );
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener( this._onChange );
    },
    _onChange:function(){
      this.setState( getStores() );
    },
    render:function(){

      var chat = {};
      if ( !!this.state.activeUser ) {
        chat = <Chat user={this.state.activeUser} />;
      }

      return (
        <div className="container">
          <div className="mobile">
            <div className="mobile__users">
              <Users users={this.state.users} />
              <AddUser />
            </div>
            <div className="mobile__body">
              <div className="mobile__screen">
                {chat}
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

module.exports = APP;
