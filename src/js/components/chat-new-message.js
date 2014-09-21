/** @jsx React.DOM */

var React           = require('react');
var AppActions      = require('../actions/app-actions');

var ENTER_KEY_CODE  = 13;

var ChatNewMessage  =

  React.createClass({

    getInitialState: function() {
      return {text: ''};
    },

    render:function(){
      return (
        <div className="chat__form clearfix">
          <textarea className="chat__form-txta"
            value={this.state.text}
            onChange={this._onChange}
            onKeyDown={this._onKeyDown} />
          <span className="chat__form-send">SEND</span>
        </div>
      );
    },

    _onChange: function( event ) {
      this.setState({text: event.target.value});
    },

    _onKeyDown: function(event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();
        var text = this.state.text.trim();
        if ( text ) {
          AppActions.addMessage( text, this.props.userIndex );
        }
        this.setState({text: ''});
      }
    }

  });

module.exports = ChatNewMessage;
