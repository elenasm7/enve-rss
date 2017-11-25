import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "count": 0,
      "readerText": "Elena Morais: I’m leaving my place now Matchers I went to Portugal in my dream last night and cried when i saw my aunt cause she’s the one who picks me up from the airport lol Komran Ghahremani: Haha would you in real life Elena Morais: Maybe haha definitely with my other aunts, not positive with Isabel, but i think so In my dream i was also really excited about your gift idea lol we were hanging out with regy and i asked his opinion and then of course you had to walk into the room so i was scared you heard, i can’t remember if a murder took place in the other chapter of my dream? Feel like it did"
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
          <div className="article">
            {this.state.readerText}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
