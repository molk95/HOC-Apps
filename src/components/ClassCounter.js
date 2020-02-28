import React, { Component } from 'react'

export class ClassCounter extends Component {
    state={
        counter:0
    }
    icrementCount = ()=> {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.icrementCount}>+</button> {this.state.count}
            </div>
        )
    }
}

export default ClassCounter
