import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CardQuery extends Component {

	componentWillMount(){
  	this.props.queryCards();
	}

	render () {		
		return (
			<div>
				<h1>{this.props.cardQuery}</h1>
			</div>    
		);
	}
}

function mapStateToProps(state) {
	return {
		cardQuery: state.cardQuery
	};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({queryCards: getCardss}, dispatch);
}

export default connect(mapStateToProps)(CardQuery);

