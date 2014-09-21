/** @jsx React.DOM */

var React           = require('react');
var AppActions      = require('../actions/app-actions');

var ChatRemoveUser  =

  React.createClass({

    render:function(){
      return (
        <span className="mobile__header-remove" onClick={this._onClick}>X</span>
      );
    },

    _onClick: function( event ) {
      if ( !confirm('Are you sure ?') ) {
        return false;
      }
      AppActions.removeUser( this.props.userIndex );
    }

  });

module.exports = ChatRemoveUser;
