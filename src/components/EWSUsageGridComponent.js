import React, { Component } from 'react';

import DynamicTable from '../components/DynamicTable.js';
import getEWSUsageData from '../handlers/EWSUsageHandler.js';

import { Button, Glyphicon } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EWSUsageGridComponent extends Component {

  // Private variable of the class
  EWSUsageHeading: null

  constructor(props) {
      super(props);
      // state is map/disctionary type variable that holds the current state of data that our site renders
      this.state = {
          EWSUsageData: {}
      };
      // Bind the functions
      this._retrieveUsageData = this._retrieveUsageData.bind(this);
      this._parseUsageData = this._parseUsageData.bind(this);
      // Building a refresh button that when clicked will update the page with new information
      let refreshButton =
          <Button
              onClick={() => {this._retrieveUsageData();
               alert('Completed updating EWS Usage info');}}
          >
              Refresh <Glyphicon glyph="refresh" />
          </Button>;
      // Heading of our table
      this.EWSUsageHeading = [refreshButton, 'Lab Name', 'Usage Information']; //What should go here, 'Lab Name', 'Usage Information'];
      // Need to fetch the usage data for the first time.
      this._retrieveUsageData();
  }

  _retrieveUsageData() {
       // Sets up the callback function as one that updates our local array of data and refreshes the UI.
       getEWSUsageData((data) => {
           this.setState({ EWSUsageData: data });
       });
   }

   _parseUsageData() {
       let tableData = [];
       if (typeof(this.state.EWSUsageData['data']) === 'undefined') {
           return tableData;
       }
       for (let labInfo of this.state.EWSUsageData['data']) {
           let rowData = [];
           // Need a dummy column for the refresh button
           rowData.push('');
           // Recommend looking at the src/resources/data/ewsusage.json file
           rowData.push(labInfo['strlabname']);
           rowData.push(labInfo['inusecount'] + ' / ' + labInfo['machinecount']);
           // Single line fill in the blank
           tableData.push(rowData);
       }
       return tableData;
   }

    render() {
        return (
          <DynamicTable
                 heading={this.EWSUsageHeading}
                 data={this._parseUsageData()}
                 />
        );
    }
}
