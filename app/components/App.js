
import React from 'react';

class App extends React.Component {
    constructor(){
        super()
        this.myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUpdate() {
        
    }
    render() {
        return <span style={this.myStyle}>Hello, My name is {this.props.name}</span>;
    }
}

App.propTypes = {
    name: React.PropTypes.string.isRequired
}

App.defaultProps = {
    name: 'Stranger'
}

export default App;