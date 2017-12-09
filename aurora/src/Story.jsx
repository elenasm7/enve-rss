import React, { Component } from 'react';
import './App.css';

class Story extends Component {
	updateArticleComponent = () => {
      this.props.updateArticle(this.props.url);
  	};

	render() {
		return (
			<div className="story" onClick={this.updateArticleComponent} >
				<h3 className="source">{this.props.name}</h3>
				<p className="time">{this.props.subtitle} | {this.props.author}</p>
			</div>
		);
	}
}


export default Story;