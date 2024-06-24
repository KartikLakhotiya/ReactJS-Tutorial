import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState => ({
            count: prevState.count + 1
        })))
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment Count</button>
            </div>
        )
    }
}

export default Counter