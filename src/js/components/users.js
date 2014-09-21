/** @jsx React.DOM */

var React = require('react');
var User  = require('./user');

var Users  =
  React.createClass({

    render:function() {
      var usersNodes = {};

      if ( this.props.users.length ) {
        usersNodes = this.props.users.map( function( user, index ) {
          return <User user={user} key={index} userIndex={index} />;
        });
      }

      return (
        <div>
          <h3>Users On Chat</h3>
          <div className="mobile__users-display" ref="usersDisplay">
            <ul className="users">
              {usersNodes}
            </ul>
          </div>
        </div>
      );
    },

    componentDidUpdate: function() {
      // I know, it's not elegant. Then help me :)
      var node = this.getDOMNode().childNodes[1].childNodes[0].childNodes;
      var clientHeight = 0;
      for ( var x in node ) {
        if ( node[x].className && node[x].className.match(/active/g) ) {
          this._scroll( clientHeight );
        }
        clientHeight += node[x].clientHeight;
      }
    },

    _scroll: function( clientHeight ) {
      var el = this.refs.usersDisplay.getDOMNode();
      el.scrollTop = clientHeight;
    }

  });

module.exports = Users;
