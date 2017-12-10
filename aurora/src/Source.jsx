import React, { Component } from 'react';
import './Source.css';

class Source extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'stories': 
			[
			  {
			    'id': 'eia', 
			    'name': 'The EIA Energy Efficiency Indicators Database', 
			    'subtitle': '34 minutes ago',
			    'author': 'Elena Morais',
			    'readerArticle': 'https://www.eia.gov'
			  },
			  { 
			    'id': 'guardian', 
			    'name': 'EIA-2', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://www.theguardian.com/technology/2017/nov/27/bitcoin-mining-consumes-electricity-ireland'
			  },
			  { 
			    'id': 'iea', 
			    'name': 'EIA-3', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://www.iea.org'
			  },
			  { 
			    'id': 'fourth', 
			    'name': 'EIA-4', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'fifth', 
			    'name': 'EIA-5', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'sixth', 
			    'name': 'EIA-6', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'seventh', 
			    'name': 'EIA-7', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  { 
			    'id': 'eighth', 
			    'name': 'EIA-8', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  {
			  'id': 'ninth', 
			    'name': 'EIA-9', 
			    'subtitle': '34 minutes ago',
			    'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
			  },
			  {
			  'id': 'tenth', 
			    'name': 'EIA-10', 
			    'subtitle': '34 minutes ago',
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
			<div className="source-container">
				<button className="source" onClick={this.updateStories} id={this.props.id}>{this.props.name}</button>
			</div>
		);
	}
}


export default Source;
