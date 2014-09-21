/** @jsx React.DOM */

var React          = require('react');
var AppActions     = require('../actions/app-actions');
var ChatMessages   = require('./chat-messages');
var ChatNewMessage = require('./chat-new-message');
var ChatRemoveUser = require('./chat-remove-user');

var Chat  =
  React.createClass({
    render:function(){
      return (
        <div>
          <div className="mobile__header">
            {this.props.user.name}
            <ChatRemoveUser userIndex={this.props.user.index} />
          </div>
          <div className="chat">
            <ChatMessages messages={this.props.user.messages}/>
            <ChatNewMessage userIndex={this.props.user.index} />
          </div>
        </div>
      );
    }
  });

module.exports = Chat;
