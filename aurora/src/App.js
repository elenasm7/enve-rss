import React, { Component } from 'react';
import * as firebase from 'firebase';
import Source from './Source.jsx';
import Story from './Story.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'currentArticle': "http://www.utilitydive.com/news/with-artificial-intelligence-its-a-brave-new-world-for-utilities/511008/",
      'sources': [], 
      'stories': []    
    };

    const dbRef = firebase.database().ref().child('sources');
    dbRef.on('value',  (snap) => {
      console.log(snap.val())
      this.setState({ "sources": snap.val() });
    });
  }

  // the job of the source
  updateStories = (stories) => {
      this.setState({"stories": stories});
  };

  // the job of the story
  updateArticle = (url) => {
      this.setState({ "currentArticle": url });
  };

  render() {
    // the objective of these blocks is to create the series of list items of those types (sources & stories)
    let sources = this.state.sources.map((source) => {
        return (
          <li key={source.name}>
              <Source updateStoriesProp={this.updateStories} name={source.name} id={source.id} />
          </li> 
        );
      }
    );

    let stories = this.state.stories.map((story) => {
      return (
        <li key={story.name}>
          <Story updateArticle={this.updateArticle} name={story.name} subtitle={story.subtitle} author={story.author} url={story.readerArticle}/>
        </li> 
      );
    });

    function load() {
      var document = 'App.js';
      var prg = document.getElementById('bar');
      var width = 1;
      var id = setInterval(id);

      function frame(){
        if (width >= 100) {
          clearInterval(id);
        } else {
          width ++;
          prg.style.width = width + '%';
        }
      };
    };

    //progress bar
    /*function progressCondition(){
      var document = 'App.js';
      var prg = document.getElementById('bar');
      var width = 1;
      var id = setInterval(id);
      var name = document.getElementById("progressBar");
      if (width >= 100) {
        name = "progressBar-Inactive"
      } else {
        name = "progressBar"
      }
    };*/

    // iframe takes src prop to say what website to render inside aka whatever is in this.state.currentArticle
    return (
      <div className="App">
        <div className="header">
          aurora
        </div>
        <div className="source-list">
          <ul>
            {sources}
          </ul>
        </div>
        <div className="article-list">
          <ul>
            {stories}
          </ul>
        </div>
        <div className="reader">
          <iframe className="article" scrolling="yes" frameBorder="0" allowFullScreen title={this.state.currentArticle} src={this.state.currentArticle}></iframe>
        </div>
      </div>
    );
  }

}

export default App;
