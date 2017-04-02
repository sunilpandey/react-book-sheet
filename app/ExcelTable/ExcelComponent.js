import React from 'react';

export default class ExcelComponent extends React.Component {
    _sort(event) {
        var column = event.target.cellIndex;
        var data = this.state.data.slice();
        var decending = this.state.sortBy === column && !this.state.decending
        data.sort(function(a, b) {
            if(decending) {
               return a[column] > b[column] ? 1 : -1;
            }else {
                return a[column] > b[column] ? -1 : 1;
            }
        })
        this.setState({data, sortBy: column, decending});
    }

    constructor(props) {
        super(props);
        this.state = {data: this.props.dataComponent.data(), sortBy: null, decending: false};
        this._sort = this._sort.bind(this);
    }


    render() {
        var dataComponent = this.props.dataComponent;
        console.log(dataComponent);
        let headerCells = [];
        var headers = dataComponent.headers();
        for(let i = 0; i < headers.length; i++) {
            var title = headers[i];
            if(this.state.sortBy === i) {
                title += this.state.decending? '\u2191': '\u2193';
            }
            headerCells.push(<th key={i} onClick={this._sort}>{title}</th>);
        }
        
        var data = this.state.data;
        var rows = [];
        for(let i = 0; i < data.length; i++) {
            var rowCells = [];
            for(let j = 0; j <data[i].length; j++) {
                rowCells.push(<td key={j}>{data[i][j]}</td>);
            }
            rows.push(<tr key={i}>{rowCells}</tr>)
        }

        return (
        <table>
            <thead>
                <tr>{headerCells}</tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>);
    }
}