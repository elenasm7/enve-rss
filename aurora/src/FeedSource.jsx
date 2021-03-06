import React, { Component } from 'react';
import './App.css';

class FeedSource extends Component {

	updateStories = () => {
		this.props.updateStoriesProp(this.props.feedsource);
	};

	render() {
		return (
			<div className="source-container">
				<button className="source" onClick={this.updateStories} id={this.props.id}>{this.props.name}</button>
			</div>
		);
	}

}

export default FeedSource;