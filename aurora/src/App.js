import React, { Component } from 'react';
import * as firebase from 'firebase';
import Source from './Source.jsx';
import FeedSource from './FeedSource.jsx';
import Story from './Story.jsx';
import FeedStory from './FeedStory.jsx';
import './App.css';
import './import_carousel.css';
import Slider from 'react-slick';
import Feed from 'rss-to-json';
import moment from 'moment';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'currentArticle': "http://www.utilitydive.com/news/with-artificial-intelligence-its-a-brave-new-world-for-utilities/511008/",
      'sources': [], 
      'stories': [],
      'feedsources': [
        'utilitydive':'https://www.utilitydive.com/feeds/news/',
        'theguardian':'https://www.theguardian.com/us/environment/rss',
        'WRI':'http://feeds.feedburner.com/WRI_News_and_Views',
        'NRDC':'https://www.nrdc.org/rss.xml',
        'sciencedaily':'https://www.sciencedaily.com/rss/top/environment.xml'    
        ]
    };

    const dbRef = firebase.database().ref().child('sources');
    dbRef.on('value',  (snap) => {
      console.log(snap.val())
      this.setState({ "sources": snap.val() });
    }); 
  }

  // the job of the source
  updateStories = (stories) => {
      this.setState({"stories": stories}); //stories will need to be changed to items
  };

  // the job of the story
  updateArticle = (url) => {
      this.setState({ "currentArticle": url });
  };


  loadfeedsources = (name, url) => {
    Feed.load(url, function(err, rss) {
      let feedsources = rss.items.map((item) => {
        return (
          <li key={feedsources.name}>
            <FeedSource updateStoriesProp={this.updateStories} stories={feedsources.url} name={feedsources.name} id={feedsources.id}/>
          </li>
        )
      });
    })
  };



  loadFeedStories = (name, url) => {
      Feed.load(url, function(err, rss) {
        let feedstories = rss.items.map((item) => {
          return (
            <div className="slide-list">
                <li key={feedstories.name}>
                  <FeedStory updateArticle={this.updateArticle} name={feedstories.name} 
                  subtitle={moment(feedstories.created).fromNow()} author={feedstories.author} url={feedstories.readerArticle}/>
                </li> 
            </div>
          );
        });
      })
  };

  render() {


    let feedsources = this.state.feedsources.map((name, feedsource) => {
      return(
        <div>
          {feedsources.loadfeedsources(name, feedsource)}
        </div>
      )
    });

    /*
      Not sure if we need to go further into this.state.feedsources? The artcles are the items that were mapped
      in the feedsources part. 
    */

    let feedstories = this.state.feedsources.map((name, feedstory) => {
      return(
        <div className="slide-list">
          {feedstories.loadRssStories(name, feedstory)}
        </div>
      )
    });
    

    //the objective of these blocks is to create the series of list items of those types (sources & stories)
    
    let sources = this.state.sources.map((source) => {
      return (
          <li key={source.name}>
            <Source updateStoriesProp={this.updateStories} stories={source.stories} name={source.name} id={source.id}/>
          </li>
      );
    });
  
    /*let feedStories= this.state.feedSources.map(())*/

    let stories = this.state.stories.map((story) => {
      return (
        <div className="slide-list">
            <li key={story.name}>
              <Story updateArticle={this.updateArticle} name={story.name} subtitle={story.subtitle} author={story.author} url={story.readerArticle}/>
            </li> 
        </div>
      );
    });

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1
    };

    // iframe takes src prop to say what website to render inside aka whatever is in this.state.currentArticle
    //at first I had {feedsources} and {feedstories} in this section, but since I think we can use the same function 
    //to updated them, we may not need to?

    return (
      <div className="App">
        <div className="header">
          aurora
        </div>
        <div className="source-list">
          <Slider {...settings}>
            {sources}
          </Slider>
        </div>
        <div className="inner-body">
          <div className="article-list">
            <ul>
              {stories}
            </ul>
          </div>
          <div className="reader">
            <iframe className="article" scrolling="yes" frameBorder="0" allowFullScreen title={this.state.currentArticle} src={this.state.currentArticle}></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
