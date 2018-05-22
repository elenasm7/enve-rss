import React, { Component } from 'react';


class Source extends Component {


	updateStories = () => {
      this.props.updateStoriesProp(this.props.stories);
  	};

	render() {
		return (
			<div className="source-container">
				<button className="source" onClick={this.updateStories} id={this.props.id}>{this.props.name}</button>
			</div>
		);
	}
}


export default Source;
