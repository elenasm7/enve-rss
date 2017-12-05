import React, { Component } from 'react';
import './Source.css';

class Source extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'stories': 
			[
			  {
			    'id': 'first', 
			    'name': 'EIA-1', 
			    'readerArticle': 'https://www.eia.gov'
			  },
			  { 
			    'id': 'second', 
			    'name': 'EIA-2', 
			    'readerArticle': 'https://www.theguardian.com/technology/2017/nov/27/bitcoin-mining-consumes-electricity-ireland'
			  },
			  { 
			    'id': 'third', 
			    'name': 'EIA-3', 
			    'readerArticle': 'https://www.iea.org'
			  },
			  { 
			    'id': 'fourth', 
			    'name': 'EIA-4', 
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'fifth', 
			    'name': 'EIA-5', 
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'sixth', 
			    'name': 'EIA-6', 
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'seventh', 
			    'name': 'EIA-7', 
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'eighth', 
			    'name': 'EIA-8', 
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			]
		};
	}

	updateStories = () => {
      this.props.updateStoriesProp(this.state.stories);
  	};

	render() {
		return (
			<div>
				<button className="source" onClick={this.updateStories} id="first">{this.props.name}</button>
			</div>
		);
	}
}


export default Source;
