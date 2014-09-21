/** @jsx React.DOM */

var React        = require('react');
var AppActions   = require('../actions/app-actions');
var ChatMessage  = require('./chat-message');

var ChatMessages  =
  React.createClass({
    render:function(){

      var messagesNodes = this.props.messages.map(function( message, index ) {
        return <ChatMessage message={message} key={index} />
      });

      return (
        <div className="chat__display clearfix" ref="chatDisplay">
          {messagesNodes}
        </div>
      );
    },

    componentDidUpdate: function() {
      this._scrollToBottom();
    },

    _scrollToBottom: function() {
      var el = this.refs.chatDisplay.getDOMNode();
      el.scrollTop = el.scrollHeight;
    }

  });

module.exports = ChatMessages;
