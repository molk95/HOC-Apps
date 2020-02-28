import React, { Component } from "react";

export class ClassCouterTwo extends Component {
  state = {
    count: 0
  };
  icrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.icrementCount}>+</button> Count {this.state.count}
      </div>
    );
  }
}

export default ClassCouterTwo;
