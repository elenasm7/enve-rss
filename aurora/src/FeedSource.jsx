import React, { Component } from 'react';
import './App.css';

class FeedSource extends Component {

	udateStories = () => {
		this.props.updateStoriesProp(this.props.feedsource);
	};

	render() {
		return (
			<div className="source-container">
				<button className="feedsource" onClick={this.updateStories} id={this.props.id}>{this.props.name}</button>
			</div>
		);
	}

}

export default FeedSource;