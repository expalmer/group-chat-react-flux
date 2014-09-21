/** @jsx React.DOM */

var React       = require('react');
var AppActions  = require('../actions/app-actions');
var addons      = require('react/addons');

var Notification = React.createClass({
  render: function() {
    return (
      <i>{this.props.total}</i>
    );
  }
});

var User = React.createClass({

  render: function() {

    var user = this.props.user;
    var notifications = !!user.notifications
                        ? <Notification total={user.notifications} />
                        : '';

    var classes = React.addons.classSet({
        'user'      : true,
        'showRight' : true,
        'clearfix'  : true,
        'active'    : user.active
      });

    return (
        <li className={classes} onClick={this._onClick} ref="oneRefCool">
          <img src={user.avatar} />
          <div className="user__info">
            <h4>{user.name}</h4>
            <span>{user.last.name}</span>
            <strong>{user.last.message}</strong>
            {notifications}
          </div>
        </li>
    );
  },

  _onClick: function() {

    AppActions.changeActiveUsers( this.props.userIndex );

  }

});

module.exports = User;

