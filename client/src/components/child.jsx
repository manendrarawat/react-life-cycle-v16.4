import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      seed: 0
    };

    console.log("Child constructor invoked..");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("prevState :", prevState);
    console.log("nextProps :", nextProps);

    if (prevState.seed !== nextProps.seed) {
      return {
        seed: nextProps.seed,
        counter: nextProps.seed
      };
    }

    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot Before Update");
    return null;
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }

  componentDidMount() {
    console.log("Child componentDidMount invoked..");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("newProps : ", newProps, "newState : ", newState);
    console.log("child shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
    console.log("prevProps : ", prevProps.test.hello);
    console.log("prevState : ", prevState);
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount :");
  }

  render() {
    console.log("Child render invoked..");
    return (
      <div>
        <h2>Counter : {this.state.counter}</h2>
      </div>
    );
  }
}

export default Child;
