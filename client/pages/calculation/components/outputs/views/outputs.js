import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BlowerChart} from './blower-chart';
require('./outputs.less');

export class Outputs extends Component {

  render() {
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
            <tr>
              <td className='blower-specs-pressure'>.50</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / .5).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>.75</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / .75).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>1.00</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 1).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>1.25</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 1.25).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>1.50</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 1.5).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>1.75</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 1.75).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>2.00</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 2).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>2.25</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 2.25).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='blower-specs-pressure'>2.50</td>
              <td>{Number((this.props.flowRate * this.props.pressure) / 2.5).toFixed(2)}</td>
            </tr>
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
