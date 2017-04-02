import React from 'react'
export default class TextFieldCounter extends React.Component {
    constructor() {
        super();
        this._textChanged = this._textChanged.bind(this);
        this.state = {
            value: "Bob"
        }

    }
    _textChanged(event) {
        console.log("event: ", event)
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this._textChanged} className="class1"/>
                <h3>{this.state.value.length}</h3>
            </div>
        )
    }
}