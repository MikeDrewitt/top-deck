import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class CardQuery extends Component {

  render() {
    return (
      <h1>This is where we're gonna search for a card</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    card: state.activeUser
  };
}

export default connect(mapStateToProps)(CardQuery);
