import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BlowerChart} from './blower-chart';
require('./outputs.less');

export class Outputs extends Component {

  render() {
    var blowerOutputPressures = [.25, .50, .75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50];

    return (
      <div className='center outputs'>
        <h3>Nozzle Area</h3>
        <table className='table table-bordered output-table'>
          <tbody>
            <tr>
              <td>{Number(this.props.nozzleArea).toFixed(2)} m^2</td>
              <td>{Number(this.props.nozzleArea * 1550).toFixed(2)} in^2</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3>Blower Specs</h3>
        <table className='table table-hover table-bordered output-table'>
          <thead>
            <tr>
              <th>in. water</th>
              <th>cfm</th>
            </tr>
          </thead>
          <tbody>
            {blowerOutputPressures.map((blowerOutputPressure) =>
              <tr key={blowerOutputPressure}>
                <td className='blower-specs-pressure'>{Number(blowerOutputPressure).toFixed(2)}</td>
                <td>{Number((this.props.flowRate * this.props.pressure) / blowerOutputPressure).toFixed(2)}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='blower-chart'>
          <BlowerChart pressure={this.props.pressure} flowRate={this.props.flowRate} />
        </div>
      </div>
    );
  }
};

const propTypes = {
  nozzleArea: React.PropTypes.number,
  pressure: React.PropTypes.number,
  flowRate: React.PropTypes.number
}

const mapStateToProps = (state) => {
  const calculationsReducer = state.calculationsReducer.toJS();

  return {
    nozzleArea: calculationsReducer.outputs.nozzleArea,
    pressure: calculationsReducer.outputs.blowerSpecs.pressure,
    flowRate: calculationsReducer.outputs.blowerSpecs.volume
  };
};

export default connect((mapStateToProps), {
})(Outputs);
