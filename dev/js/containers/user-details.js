import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {
  render() {
    if (!this.props.user) {
      return (<h5>Select a User...</h5>);
    }
    return (
      <div>
        <img src={this.props.user.thumbnail}/>
        <h3>{this.props.user.first} {this.props.user.last}</h3>
        <h4>Description: {this.props.user.description}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}


export default connect(mapStateToProps)(UserDetails);
