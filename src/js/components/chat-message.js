/** @jsx React.DOM */

var React       = require('react');
var addons      = require('react/addons');

var ChatMessage = React.createClass({

  render: function() {

    var msg = this.props.message;

    var classes = React.addons.classSet({
        'msg'      : true,
        'showLeft' : true,
        'owner'    : msg.owner,
        'guest'    : !msg.owner
      });
    return (
      <div className={classes}>
        <div className="msg__txt">
          {msg.message}
          <div className="msg__ico">
            <i className="msg__ico-arr"></i>
            <img src={msg.avatar} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ChatMessage;
