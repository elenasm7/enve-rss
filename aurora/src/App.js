import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "count": 0
    };
  }

  increment = () => {
      this.setState({ "count": this.state.count + 1 });
  };

  render() {
    return (
      <div className="App">
        <button className="first" onClick={this.increment}>{this.state.count}</button>
        <button className="second" onClick={this.increment}>{this.state.count}</button>
        <button className="third" onClick={this.increment}>{this.state.count}</button>
        <button className="fourth" onClick={this.increment}>{this.state.count}</button>
        <button className="five" onClick={this.increment}>{this.state.count}</button>
        <button className="six" onClick={this.increment}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;
