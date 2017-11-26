import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "count": 0,
      "readerArticle": "https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html"
    };
  }

  increment = () => {
      this.setState({ "count": this.state.count + 1 });
  };

  render() {
    return (
      <div className="App">
        <div className="source-list">
          <ul>
            <li>
              <button className="source" id="first" onClick={this.increment}>LBSTRS</button>
            </li>
            <li>
              <button className="source" id="second" onClick={this.increment}>VERGE</button>
            </li>
            <li>
              <button className="source" id="third" onClick={this.increment}>MASHABLE</button>
            </li>
            <li>
             <button className="source" id="fourth" onClick={this.increment}>HTTPSTER</button>
            </li>
            <li>
              <button className="source" id="fifth" onClick={this.increment}>MEDIUM</button>
            </li>
            <li>
              <button className="source" id="sixth" onClick={this.increment}>PTTRNS</button>
            </li>
            <li>
              <button className="source" id="first" onClick={this.increment}>LBSTRS</button>
            </li>
            <li>
              <button className="source" id="first" onClick={this.increment}>LBSTRS</button>
            </li>
            <li>
              <button className="source" id="second" onClick={this.increment}>VERGE</button>
            </li>
            <li>
              <button className="source" id="third" onClick={this.increment}>MASHABLE</button>
            </li>
            <li>
             <button className="source" id="fourth" onClick={this.increment}>HTTPSTER</button>
            </li>
            <li>
              <button className="source" id="fifth" onClick={this.increment}>MEDIUM</button>
            </li>
            <li>
              <button className="source" id="sixth" onClick={this.increment}>PTTRNS</button>
            </li>
            <li>
              <button className="source" id="first" onClick={this.increment}>LBSTRS</button>
            </li>
          </ul>
        </div>
        <div className="reader">
          <iframe className="article" src={this.state.readerArticle}></iframe>
        </div>
      </div>
    );
  }
}

export default App;
