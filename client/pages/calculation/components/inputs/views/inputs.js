import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {saveInputs} from '../actions/inputs.actions';
import {calculateForceForSlope, calculateSlopeForForce} from '../../../../../utilities/calculations/slope';
require('./inputs.less');
var unitLabels = require('../../../../../config/app-constants').units;

var inputsPropTypes = {
  width: PropTypes.Number,
  widthUnits: PropTypes.string,
  length: PropTypes.Number,
  lengthUnits: PropTypes.string,
  weight: PropTypes.number,
  weightUnits: PropTypes.string,
  desiredSlope: PropTypes.Number,
  desiredSlopeUnits: PropTypes.string,
  desiredThrust: PropTypes.Number,
  desiredThrustUnits: PropTypes.string
};

export class Inputs extends Component {

  saveSlopeToState() {
    const angle = document.getElementById('desiredSlope').value;
    const angleUnits = document.getElementById('desiredSlopeUnits').value;
    const weight = document.getElementById('weight').value;
    const weightUnits = document.getElementById('weightUnits').value;
    const forceUnits = document.getElementById('desiredThrustUnits').value;

    document.getElementById('desiredThrust').value = Number(calculateForceForSlope(angle,
      angleUnits, weight, weightUnits, forceUnits)).toFixed(2);

    this.saveInputsToState();
  }

  saveThrustToState() {
    const thrust = document.getElementById('desiredThrust').value;
    const thrustUnits = document.getElementById('desiredThrustUnits').value;
    const weight = document.getElementById('weight').value;
    const weightUnits = document.getElementById('weightUnits').value;
    const angleUnits = document.getElementById('desiredSlopeUnits').value;

    document.getElementById('desiredSlope').value = Number(calculateSlopeForForce(thrust,
      thrustUnits, weight, weightUnits, angleUnits)).toFixed(2);

    this.saveInputsToState();
  }

  saveInputsToState() {
    const width = document.getElementById('width').value;
    const widthUnits = document.getElementById('widthUnits').value;
    const length = document.getElementById('length').value;
    const lengthUnits = document.getElementById('lengthUnits').value;
    const weight = document.getElementById('weight').value;
    const weightUnits = document.getElementById('weightUnits').value;
    const desiredSlope = document.getElementById('desiredSlope').value;
    const desiredSlopeUnits = document.getElementById('desiredSlopeUnits').value;
    const desiredThrust = document.getElementById('desiredThrust').value;
    const desiredThrustUnits = document.getElementById('desiredThrustUnits').value;

    this.props.saveInputs(width, widthUnits, length, lengthUnits, weight, weightUnits,
      desiredSlope, desiredSlopeUnits, desiredThrust, desiredThrustUnits);
  }

  render() {
    return (
      <div className='center'>
        <h3 className='input-header'>Inputs</h3>
        <form className='form-group'>
          <label htmlFor='width' className='input-label'>Width</label>
          <input id='width' type='number' className='form-control input-field'
            onChange={() => this.saveInputsToState()} value={this.props.width} />
          <select id='widthUnits' className='units-field form-control dropdown'
            onChange={() => this.saveInputsToState()} value={this.props.widthUnits}>
            <option value={unitLabels.feet}>ft</option>
            <option value={unitLabels.inches}>in</option>
            <option value={unitLabels.meters}>m</option>
            <option value={unitLabels.centimeters}>cm</option>
          </select>
          <br />
          <label htmlFor='length' className='input-label'>Length</label>
          <input id='length' type='number' className='form-control input-field'
            onChange={() => this.saveInputsToState()} value={this.props.length} />
          <select id='lengthUnits' className='units-field form-control dropdown'
            onChange={() => this.saveInputsToState()} value={this.props.lengthUnits}>
            <option value={unitLabels.feet}>ft</option>
            <option value={unitLabels.inches}>in</option>
            <option value={unitLabels.meters}>m</option>
            <option value={unitLabels.centimeters}>cm</option>
          </select>
          <br />
          <label htmlFor='weight' className='input-label'>Weight</label>
          <input id='weight' type='number' className='form-control input-field'
            onChange={() => this.saveSlopeToState()} value={this.props.weight} />
          <select id='weightUnits' className='units-field form-control dropdown'
            onChange={() => this.saveSlopeToState()} value={this.props.weightUnits}>
            <option value={unitLabels.pounds}>lbs</option>
            <option value={unitLabels.ounces}>oz</option>
            <option value={unitLabels.kilograms}>kg</option>
            <option value={unitLabels.grams}>g</option>
          </select>
          <br />
          <label htmlFor='desiredSlope' className='input-label'>Desired Slope</label>
          <input id='desiredSlope' type='number' className='form-control input-field'
            onChange={() => this.saveSlopeToState()} value={this.props.desiredSlope} />
          <select id='desiredSlopeUnits' className='units-field form-control dropdown'
            onChange={() => this.saveSlopeToState()} value={this.props.desiredSlopeUnits}>
            <option value={unitLabels.degrees}>degrees</option>
            <option value={unitLabels.radians}>radians</option>
          </select>
          <br />
          <label htmlFor='desiredThrust' className='input-label'>Desired Thrust</label>
          <input id='desiredThrust' type='number' className='form-control input-field'
            onChange={() => this.saveThrustToState()} value={this.props.desiredThrust} />
          <select id='desiredThrustUnits' className='units-field form-control dropdown'
            onChange={() => this.saveThrustToState()} value={this.props.desiredThrustUnits}>
            <option value={unitLabels.poundsForce}>lbs</option>
            <option value={unitLabels.newtons}>N</option>
          </select>
        </form>
      </div>
    );
  }
};

const propTypes = {
  saveInputs: React.PropTypes.function
}

const mapStateToProps = (state) => {
  const calculationsReducer = state.calculationsReducer.toJS();
  return {
    width: calculationsReducer.inputs.width,
    widthUnits: calculationsReducer.inputs.widthUnits,
    length: calculationsReducer.inputs.length,
    lengthUnits: calculationsReducer.inputs.lengthUnits,
    weight: calculationsReducer.inputs.weight,
    weightUnits: calculationsReducer.inputs.weightUnits,
    desiredSlope: calculationsReducer.inputs.desiredSlope,
    desiredSlopeUnits: calculationsReducer.inputs.desiredSlopeUnits,
    desiredThrust: calculationsReducer.inputs.desiredThrust,
    desiredThrustUnits: calculationsReducer.inputs.desiredThrustUnits
  };
};

export default connect((mapStateToProps), {
  saveInputs
})(Inputs);
