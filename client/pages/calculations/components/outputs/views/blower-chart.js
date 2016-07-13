import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

export class BlowerChart extends Component {
  getXAxisLabels() {
    let xAxisLabels = [];
    for(let i = .5; i <= 2.5; i+=.25) {
      xAxisLabels.push(Number(i).toFixed(2));
    }

    return xAxisLabels;
  }

  getData() {
    let data = [];
    for(let i = .5; i <= 2.5; i+=.25) {
      data.push(+(((this.props.pressure * this.props.flowRate) / i).toFixed(2)));
    }

    return data;
  }

  render() {
    var config = {
      title: {
        text: 'Blower Specs Chart'
      },
      xAxis: {
        title: {
          text: 'Pressure (in. water)'
        },
        categories: this.getXAxisLabels()
      },
      yAxis: {
        title: {
          text: 'Volume (cfm)'
        }
      },
      series: [{
        name: 'cfm',
        showInLegend: false,
        data: this.getData()
      }]
    };

    return (
      <ReactHighcharts config={config}></ReactHighcharts>
    )
  }
}

const propTypes = {
  pressure: React.PropTypes.number,
  flowRate: React.PropTypes.number
}
