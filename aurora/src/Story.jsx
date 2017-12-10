import React, { Component } from 'react';
import './App.css';

class Story extends Component {
	updateArticleComponent = () => {
      this.props.updateArticle(this.props.url);
  	};

	render() {
		return (
			<div className="story-container" onClick={this.updateArticleComponent} >
				<div className="story-title">{this.props.name}</div>
				<p className="time">{this.props.subtitle} | {this.props.author}</p>
			</div>
		);
	}
}


export default Story;