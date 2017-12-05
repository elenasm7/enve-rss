import React, { Component } from 'react';
import './Story.css';

class Story extends Component {
	updateArticleComponent = () => {
      this.props.updateArticle(this.props.url);
  	};

	render() {
		return (
			<div>
				<button className="source" onClick={this.updateArticleComponent} id="first">{this.props.name}</button>
			</div>
		);
	}
}


export default Story;