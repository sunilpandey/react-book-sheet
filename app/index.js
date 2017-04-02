import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import TextFieldCounter from './components/TextAreaCounter'
import ExcelSheet from './ExcelTable/ExcelComponent'
import BookDataModel from './ExcelTable/DataModel'

var bookData = new BookDataModel([
    ['The Lord of the Rings', 'J. R. R Tokien', 'English', '1954-1955', '150 milion'],
    ['The Lord of the Rings 2', 'J. R. R Tokien', 'English', '1954-1955', '150 milion'],
]);
ReactDOM.render(React.createElement(ExcelSheet, {dataComponent: bookData}), document.getElementById('app'));