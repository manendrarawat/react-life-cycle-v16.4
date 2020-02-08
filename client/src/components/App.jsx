import React, { Component } from "react";
import Child from "src/components/child.jsx";
import ErrorBoundary from "src/error-boundary.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "john",
      seed: 40
    };

    this.changeState = this.changeState.bind(this);
    this.seedGenerator = this.seedGenerator.bind(this);
    //console.log("constructor invoked..");
  }

  seedGenerator() {
    this.setState({
      seed: Number.parseInt(Math.random() * 100)
    });
  }

  componentDidMount() {
    //console.log("componentDidMount invoked..");
  }

  shouldComponentUpdate(newProps, newState) {
    //console.log("app shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    //console.log("App componentWillUnmount :");
  }

  changeState() {
    this.setState({
      name: "Rambo11"
    });
  }

  render() {
    // console.log("render invoked..");
    return (
      <ErrorBoundary>
        <div>name : {this.state.name}</div>
        <div>seed : {this.state.seed}</div>
        <Child name={this.state.name} seed={this.state.seed} />

        <br />
        <button onClick={this.changeState}>Change state</button>
        <button onClick={this.seedGenerator}>seed Generator</button>
      </ErrorBoundary>
    );
  }
}

export default App;
