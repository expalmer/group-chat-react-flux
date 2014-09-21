/** @jsx React.DOM */

var React      = require('react');
var AppActions = require('../actions/app-actions');

var AddUser  =
  React.createClass({
    getInitialState: function() {
      return {name: ''};
    },
    render:function(){
      return (
        <div>
          <h3>Join on Chat</h3>
          <form className="form" onSubmit={this._onSubmit} >
            <input type="text" className="form__input"
              value={this.state.name}
              onChange={this._onChange} />
            <input type="submit" className="form__submit" value="Add User"/>
          </form>
        </div>
      );
    },

    _onChange: function( event ) {
      this.setState({name: event.target.value});
    },

    _onSubmit: function(event) {
      event.preventDefault();
      var name = this.state.name.trim();
      if ( name ) {
        AppActions.addUser( name );
      }
      this.setState({ name: ''} );
    }

  });

module.exports = AddUser;
