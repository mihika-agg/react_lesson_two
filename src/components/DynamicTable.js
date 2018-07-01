import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DynamicTable extends Component {

  constructor(props) {
       super(props);
       this._renderTableHeader = this._renderTableHeader.bind(this);
       this._renderTableBody = this._renderTableBody.bind(this);
       this._rendTableBodyElems = this._rendTableBodyElems.bind(this);
    }

  _renderTableHeader() {
      let headingComponents = [];
      let arrIndex = 1;
      // this.props.heading is an array containing the labels
      // for the headings of our table
      for (let titles of this.props.heading) {
          // Fill in the blank..... (Review lecture 1 assignment if lost)
          headingComponents[arrIndex] = (<th key={titles}>{titles}</th>);
          arrIndex++;
      }
      return headingComponents;
  }

  // All table body components together
  _renderTableBody() {
      let bodyComponents = [];
      let arrIndex = 1;
      // this.props.data is an array of arrays, where
      // each array represents a table row
      for (let arr of this.props.data) {
          // Fill in the blank (Hint: may need to use _rendTableBodyElems(bodyArr) somehow)
          bodyComponents[arrIndex] = (
                <tr key={arrIndex}>
                {this._rendTableBodyElems(arr)}
                </tr>
            )
          arrIndex++;
      }
      return bodyComponents;
  }

  // Each individual body row
  _rendTableBodyElems(bodyArr) {
      let bodyElems = [];
      let arrIndex = 1;
      // Each columns element per row of the table body
      for (let bodyElem of bodyArr) {
          // Fill in the blank..... (Review lecture 1 assignment if lost)
          bodyElems[arrIndex] = (<td key={bodyElem}>{bodyElem}</td>);
          arrIndex++;
      }
      return bodyElems;
  }

  render() {
      return (
        <Table striped bordered condensed hover responsive>
              <thead>
                  <tr>
                      {this._renderTableHeader()}
                  </tr>
              </thead>
              <tbody>
                  {this._renderTableBody()}
              </tbody>
          </Table>
      );
    }
}
