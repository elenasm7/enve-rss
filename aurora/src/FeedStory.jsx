import React, { Component } from 'react';
import './App.css';

class FeedStory extends Component {

	updateArticleComponent = () => {
      this.props.updateArticle(this.props.feedsources.items);
  	};

	render() {
		return (
			<div className="story-container" onClick={this.updateArticleComponent} >
				<div className="story-title">{this.props.name}</div>
				<p className="time">{this.props.subtitle} | {this.props.author}</p>
				<img className="story-share" alt="share" src="https://image.flaticon.com/icons/svg/97/97930.svg" />
			</div>
		);
	}
}

export default FeedStory;