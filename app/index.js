import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import TextFieldCounter from './components/TextAreaCounter'
import ExcelSheet from './ExcelTable/ExcelComponent'
import BookDataModel from './ExcelTable/DataModel'

var bookData = new BookDataModel([
    ['The Lord of the Rings', 'J. R. R Tokien', 'English-US', '1954-1955', '150 milion'],
    ['The Fellowship of the Ring', 'J. R. R Tokien', 'English-US', '1954-1955', '150 milion'],
    ['The Two Towers', 'J. R. R Tokien', 'English-US', '1954-1955', '150 milion'],
    ['The Return of the King', 'J. R. R Tokien', 'English-US', '1954-1955', '150 milion'],
    ['Game of Thrones', 'J. R. R Martin', 'English-GB', '2010-2015', '300 milion'],
    ['Clash of Kings', 'J. R. R Martin', 'English-GB', '2011-2015', '200 milion'],
    ['Storm of Swords', 'J. R. R Martin', 'English-GB', '2012-2015', '100 milion'],
    ['Feast for Crows', 'J. R. R Martin', 'English-GB', '2013-2015', '90 milion'],
    ['Dance with Dragons', 'J. R. R Martin', 'English-GB', '2014-2015', '200 milion'],
    ['Immortals of Meluha', 'Amish Devagan', 'English-HN', '2012-2016', '100 milion'],
    ['Sceret of Nagas', 'Amish Devagan', 'English-HN', '2013-2016', '40 milion'],
    ['Oath of Vayu Putra', 'Amish Devagan', 'English-HN', '2014-2016', '50 milion']
]);
ReactDOM.render(React.createElement(ExcelSheet, {dataComponent: bookData}), document.getElementById('app'));