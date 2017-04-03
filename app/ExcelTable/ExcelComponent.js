import React from 'react';

export default class ExcelComponent extends React.Component {
    _toggleSearch() {
        this.setState({search: !this.state.search});
    }
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
        this.setState({data, sortBy: column, decending, search: null});
    }

    _save(e) {
        e.preventDefault();
        var input = e.target.firstChild;
        var data = this.state.data.slice();
        var edit = this.state.edit;
        var input = e.target.firstChild;
        data[edit.row][edit.cell] = input.value;
        this.setState({
            data, edit: null
        })
    }

    _openEditor(event) {
        this.setState({
            edit: {
                row: parseInt(event.target.dataset.row),
                cell: event.target.cellIndex
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {data: this.props.dataComponent.data(), sortBy: null, decending: false, edit: null};
        this._sort = this._sort.bind(this);
        this._openEditor = this._openEditor.bind(this);
        this._save = this._save.bind(this);
    }


    render() {
        var dataComponent = this.props.dataComponent;
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
        var edit = this.state.edit;
        var rows = [];
        for(let i = 0; i < data.length; i++) {
            var rowCells = [];
            for(let j = 0; j <data[i].length; j++) {
                var content = data[i][j];
                if(edit && edit.row === i && edit.cell === j){
                    content = <form onSubmit={this._save}>
                                <input type="text" defaultValue={content} /> 
                              </form>
                }
                rowCells.push(<td key={j} data-row={i}>{content}</td>);
            }
            rows.push(<tr key={i}>{rowCells}</tr>)
        }

        return (
            <div>
                <button onClick={this._toggleSearch.bind(this)}>Search</button>
                <table>
                    <thead>
                        <tr>{headerCells}</tr>
                    </thead>
                    <tbody onDoubleClick={this._openEditor}>
                        {this._searchToolBar(headers).concat(rows)}
                    </tbody>
                </table>
            </div>
        );
    }

    _searchToolBar(headers) {
        var searchBars = [];
        if(this.state.search) {
            for(let i = 0; i < headers.length; i++) {
                searchBars.push(<td onChange={this._searchChange.bind(this)} key={i}><input type="text" /></td>);
            }
            return [<tr>{searchBars}</tr>]    
        }
        
        return searchBars;
    }

    _searchChange(event) {

    }
}