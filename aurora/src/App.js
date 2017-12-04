import React, { Component } from 'react';
import Source from './Source.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'count': 0,
      'readerArticle': "http://www.utilitydive.com/news/with-artificial-intelligence-its-a-brave-new-world-for-utilities/511008/",
      'sources': 
      [
        {
          'id': 'first', 
          'name': 'EIA', 
          'readerArticle': 'https://www.eia.gov'
        },
        { 
          'id': 'second', 
          'name': 'The Guardian Environment', 
          'readerArticle': 'https://www.theguardian.com/technology/2017/nov/27/bitcoin-mining-consumes-electricity-ireland'
        },
        { 
          'id': 'third', 
          'name': 'IEA', 
          'readerArticle': 'https://www.iea.org'
        },
        { 'id': 'fourth', 
          'name': 'Medium', 
          'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
        },
        { 'id': 'fifth', 
          'name': 'Medium4', 
          'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
        },
        { 
          'id': 'sixth', 
          'name': 'Medium3', 
          'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
        },
        { 
          'id': 'seventh', 
          'name': 'Medium2', 
          'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
        },
        { 
          'id': 'eighth', 
          'name': 'Medium1', 
          'readerArticle': 'https://medium.com/natural-resources-defense-council/the-big-lie-behind-the-trump-assault-on-our-environment-and-health-854b20051da7'
        }
      ]
    };
  }

  updateArticle = (url) => {
      this.setState({ "readerArticle": url });
  };

  render() {
    let sources = this.state.sources.map((source) => {
      return (
        <li key={source.name}>
          <Source updateArticle={this.updateArticle} name={source.name} url={source.readerArticle} />
        </li> 
      );
    });

    return (
      <div className="App">
        <div className="source-list">
          <ul>
            {sources}
          </ul>
        </div>
        <div className="article-list">
          <ul>
            //these will be the stories
          </ul>
        </div>
        <div className="reader">
          <iframe className="article" scrolling="yes" frameBorder="0" allowFullScreen title={this.state.readerArticle} src={this.state.readerArticle}></iframe>
        </div>
      </div>
    );
  }
}

export default App;
