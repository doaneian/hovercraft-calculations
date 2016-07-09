import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveInputs} from '../actions/inputs.actions';
import {calculateForceForSlope, calculateSlopeForForce} from '../../../../../utilities/calculations/slope';
require('./inputs.less');
var unitLabels = require('../../../../../config/app-constants').units;

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
          <label for='width' className='input-label'>Width</label>
          <input id='width' type='number' className='form-control input-field'
            onChange={() => this.saveInputsToState()} />
          <select id='widthUnits' className='units-field form-control dropdown'
            onChange={() => this.saveInputsToState()}>
            <option value={unitLabels.feet}>ft</option>
            <option value={unitLabels.inches}>in</option>
            <option value={unitLabels.meters}>m</option>
            <option value={unitLabels.centimeters}>cm</option>
          </select>
          <br />
          <label for='length' className='input-label'>Length</label>
          <input id='length' type='number' className='form-control input-field'
            onChange={() => this.saveInputsToState()} />
          <select id='lengthUnits' className='units-field form-control dropdown'
            onChange={() => this.saveInputsToState()}>
            <option value={unitLabels.feet}>ft</option>
            <option value={unitLabels.inches}>in</option>
            <option value={unitLabels.meters}>m</option>
            <option value={unitLabels.centimeters}>cm</option>
          </select>
          <br />
          <label for='weight' className='input-label'>Weight</label>
          <input id='weight' type='number' className='form-control input-field'
            onChange={() => this.saveSlopeToState()} />
          <select id='weightUnits' className='units-field form-control dropdown'
            onChange={() => this.saveSlopeToState()}>
            <option value={unitLabels.pounds}>lbs</option>
            <option value={unitLabels.ounces}>oz</option>
            <option value={unitLabels.kilograms}>kg</option>
            <option value={unitLabels.grams}>g</option>
          </select>
          <br />
          <label for='desiredSlope' className='input-label'>Desired Slope</label>
          <input id='desiredSlope' type='number' className='form-control input-field'
            onChange={() => this.saveSlopeToState()} />
          <select id='desiredSlopeUnits' className='units-field form-control dropdown'
            onChange={() => this.saveSlopeToState()}>
            <option value={unitLabels.degrees}>degrees</option>
            <option value={unitLabels.radians}>radians</option>
          </select>
          <br />
          <label for='desiredThrust' className='input-label'>Desired Thrust</label>
          <input id='desiredThrust' type='number' className='form-control input-field'
            onChange={() => this.saveThrustToState()} />
          <select id='desiredThrustUnits' className='units-field form-control dropdown'
            onChange={() => this.saveThrustToState()}>
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
  };
};

export default connect((mapStateToProps), {
  saveInputs
})(Inputs);
