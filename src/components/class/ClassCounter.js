import React, { Component } from "react";

export class ClassCounter extends Component {
  state = {
    count: 0
  };
  // icrementCount = ()=> {
  //     this.setState({
  //         count: this.state.count + 1
  //     })
  // }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count ==! this.state.count) {
      console.log("Update Doc");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>{" "}
        Count {this.state.count}
      </div>
    );
  }
}

export default ClassCounter;
