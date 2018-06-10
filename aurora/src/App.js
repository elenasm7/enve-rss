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
          {
            'id': 'sixth',
            'name': 'utilitydive',
            'url': 'http://www.utilitydive.com/feeds/news/'
          },
          {
            'id': 'sixth',
            'name': 'theguardian',
            'url': 'http://www.theguardian.com/us/environment/rss'
          },
          {
            'id': 'sixth',
            'name': 'WRI',
            'url': 'http://feeds.feedburner.com/WRI_News_and_Views'
          },
          {
            'id': 'sixth',
            'name': 'NRDC',
            'url': 'http://www.nrdc.org/rss.xml'
          },
          {
            'id': 'sixth',
            'name': 'sciencedaily',
            'url': 'http://www.sciencedaily.com/rss/top/environment.xml'
          }
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


  loadfeedsources = (source) => {
    Feed.load(source.url, function(err, rss) {
      return (this.state.feedsources.map((source) => {
        return (
          <li key={source.name}>
            <FeedSource updateStoriesProp={this.updateStories} stories={source.url} name={source.name} id={source.id}/>
          </li>
        )
      }));
    })
  };

  loadfeedstories = (name, url) => {
      Feed.load(url.url, function(err, rss) {
        return(rss.items.map((item) => {
          return (
            <div className="slide-list">
                <li key={item.name}>
                  <FeedStory updateArticle={this.updateArticle} name={item.name} 
                  subtitle={moment(item.created).fromNow()} author={item.author} url={item.readerArticle}/>
                </li> 
            </div>
          );
        }));
      })
  };

  render() {
    let feedsources = this.state.feedsources.map((source) => {  
      return (
        <li key={source.name}>
          <FeedSource updateStoriesProp={this.updateStories} stories={source.url} name={source.name} id={source.id}/>
        </li>
      )
    });


    let feedstories = this.state.feedsources.map((name, url) => {
        return(
          <div className="slide-list">
            {this.loadfeedstories(name, url)}
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
      slidesToScroll: 7
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
            {feedsources}
          </Slider>
        </div>
        <div className="inner-body">
          <div className="article-list">
            <ul>
              {stories}
              {feedstories}
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
