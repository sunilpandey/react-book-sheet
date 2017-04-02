import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import TextFieldCounter from './components/TextAreaCounter'
import ExcelSheet from './ExcelTable/ExcelComponent'
import BookDataModel from './ExcelTable/DataModel'

var bookData = new BookDataModel([
    ['The Lord of the Rings', 'J. R. R Tokien', 'English-US', '1954-1955', '150 milion'],
    ['Game of Thrones', 'J. R. R Martin', 'English-GB', '2010-2015', '200 milion'],
]);
ReactDOM.render(React.createElement(ExcelSheet, {dataComponent: bookData}), document.getElementById('app'));