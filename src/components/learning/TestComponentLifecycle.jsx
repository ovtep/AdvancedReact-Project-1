import React from 'react';

class TestComponentLifecycle extends React.Component {
    intervalId;
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log('Component constructor')
    }

    componentDidMount() {
        console.log('Component did mount')
        this.intervalId = setInterval(() => {
            console.log('Incrementing....');
            this.setState({counter: this.state.counter + 1})
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Component did update')
    }

    componentWillUnmount() {
        console.log('Component did unmount')
        console.log(this.intervalId);
        clearInterval(this.intervalId);
    }

    render() {
        console.log('Component did render');
        return <div>{this.state.counter}</div>;
    }
}

export default TestComponentLifecycle;