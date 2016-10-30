import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {saveInputs} from '../actions/inputs.actions';
import {calculateForceForSlope, calculateSlopeForForce} from 'client/utilities/calculations/slope';
require('./inputs.less');
require('client/common/styles/toggle.less');
import {units as unitLabels} from 'client/config/app-constants';

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
    const angleUnits = this.getSlopeUnits();
    const weight = document.getElementById('weight').value;
    const weightUnits = this.getWeightUnits();
    const thrustUnits = this.getThrustUnits();

    document.getElementById('desiredThrust').value = Number(calculateForceForSlope(angle,
      angleUnits, weight, weightUnits, thrustUnits)).toFixed(2);

    this.saveInputsToState();
  }

  saveThrustToState() {
    const thrust = document.getElementById('desiredThrust').value;
    const thrustUnits = this.getThrustUnits();
    const weight = document.getElementById('weight').value;
    const weightUnits = this.getWeightUnits();
    const angleUnits = this.getSlopeUnits();

    document.getElementById('desiredSlope').value = Number(calculateSlopeForForce(thrust,
      thrustUnits, weight, weightUnits, angleUnits)).toFixed(2);

    this.saveInputsToState();
  }

  saveInputsToState() {
    const width = document.getElementById('width').value;
    const widthUnits = this.getWidthUnits();
    const length = document.getElementById('length').value;
    const lengthUnits = this.getLengthUnits();
    const weight = document.getElementById('weight').value;
    const weightUnits = this.getWeightUnits()
    ;
    const desiredSlope = document.getElementById('desiredSlope').value;
    const desiredSlopeUnits = this.getSlopeUnits();
    const desiredThrust = document.getElementById('desiredThrust').value;
    const desiredThrustUnits = this.getThrustUnits();

    this.props.saveInputs(width, widthUnits, length, lengthUnits, weight, weightUnits,
      desiredSlope, desiredSlopeUnits, desiredThrust, desiredThrustUnits);
  }

  getWidthUnits() {
    if(document.getElementById('widthUnitsStandard').checked) {
      return unitLabels.feet;
    } else if(document.getElementById('widthUnitsMetric').checked) {
      return unitLabels.meters;
    }
  }

  getLengthUnits() {
    if(document.getElementById('lengthUnitsStandard').checked) {
      return unitLabels.feet;
    } else if(document.getElementById('lengthUnitsMetric').checked) {
      return unitLabels.meters;
    }
  }

  getWeightUnits() {
    if(document.getElementById('weightUnitsStandard').checked) {
      return unitLabels.pounds;
    } else if(document.getElementById('weightUnitsMetric').checked) {
      return unitLabels.kilograms;
    }
  }

  getSlopeUnits() {
    if(document.getElementById('slopeUnitsStandard').checked) {
      return unitLabels.degrees;
    } else if(document.getElementById('slopeUnitsMetric').checked) {
      return unitLabels.radians;
    }
  }

  getThrustUnits() {
    if(document.getElementById('thrustUnitsStandard').checked) {
      return unitLabels.poundsForce;
    } else if(document.getElementById('thrustUnitsMetric').checked) {
      return unitLabels.newtons;
    }
  }

  render() {
    return (
      <div className='center'>
        <h3 className='input-header'>Inputs</h3>
        <form className='form-group'>
          <label htmlFor='width' className='input-label'>Width</label>
          <input id='width' type='number' className='form-control input-field'
            onChange={() => this.saveInputsToState()} value={this.props.width} />
          <span className='toggle'>
            <input id='widthUnitsStandard' type='radio' name='width-units'
                    onChange={() => this.saveInputsToState()} checked={this.props.widthUnits === unitLabels.feet} />
            <label htmlFor='widthUnitsStandard' className='left-label'>{unitLabels.feet}</label>
            <input id='widthUnitsMetric' type='radio' name='width-units'
                    onChange={() => this.saveInputsToState()} checked={this.props.widthUnits === unitLabels.meters}/>
            <label htmlFor='widthUnitsMetric' className='right-label'>{unitLabels.meters}</label>
          </span>
          <br />
          <label htmlFor='length' className='input-label'>Length</label>
          <input id='length' type='number' className='form-control input-field'
            onChange={() => this.saveInputsToState()} value={this.props.length} />
            <span className='toggle'>
              <input id='lengthUnitsStandard' type='radio' name='length-units'
                      onChange={() => this.saveInputsToState()} checked={this.props.lengthUnits === unitLabels.feet} />
              <label htmlFor='lengthUnitsStandard' className='left-label'>{unitLabels.feet}</label>
              <input id='lengthUnitsMetric' type='radio' name='length-units'
                      onChange={() => this.saveInputsToState()} checked={this.props.lengthUnits === unitLabels.meters}/>
              <label htmlFor='lengthUnitsMetric' className='right-label'>{unitLabels.meters}</label>
            </span>
          <br />
          <label htmlFor='weight' className='input-label'>Weight</label>
          <input id='weight' type='number' className='form-control input-field'
            onChange={() => this.saveSlopeToState()} value={this.props.weight} />
            <span className='toggle'>
              <input id='weightUnitsStandard' type='radio' name='weight-units'
                      onChange={() => this.saveInputsToState()} checked={this.props.weightUnits === unitLabels.pounds} />
              <label htmlFor='weightUnitsStandard' className='left-label'>{unitLabels.pounds}</label>
              <input id='weightUnitsMetric' type='radio' name='weight-units'
                      onChange={() => this.saveInputsToState()} checked={this.props.weightUnits === unitLabels.kilograms}/>
              <label htmlFor='weightUnitsMetric' className='right-label'>{unitLabels.kilograms}</label>
            </span>
          <br />
          <label htmlFor='desiredSlope' className='input-label'>Desired Slope</label>
          <input id='desiredSlope' type='number' className='form-control input-field'
            onChange={() => this.saveSlopeToState()} value={this.props.desiredSlope} />
            <span className='toggle'>
              <input id='slopeUnitsStandard' type='radio' name='slope-units'
                      onChange={() => this.saveSlopeToState()} checked={this.props.desiredSlopeUnits === unitLabels.degrees} />
              <label htmlFor='slopeUnitsStandard' className='left-label'>deg</label>
              <input id='slopeUnitsMetric' type='radio' name='slope-units'
                      onChange={() => this.saveSlopeToState()} checked={this.props.desiredSlopeUnits === unitLabels.radians}/>
              <label htmlFor='slopeUnitsMetric' className='right-label'>rad</label>
            </span>
          <br />
          <label htmlFor='desiredThrust' className='input-label'>Desired Thrust</label>
          <input id='desiredThrust' type='number' className='form-control input-field'
            onChange={() => this.saveThrustToState()} value={this.props.desiredThrust} />
            <span className='toggle'>
              <input id='thrustUnitsStandard' type='radio' name='thrust-units'
                      onChange={() => this.saveThrustToState()} checked={this.props.desiredThrustUnits === unitLabels.poundsForce} />
              <label htmlFor='thrustUnitsStandard' className='left-label'>{unitLabels.poundsForce}</label>
              <input id='thrustUnitsMetric' type='radio' name='thrust-units'
                      onChange={() => this.saveThrustToState()} checked={this.props.desiredThrustUnits === unitLabels.newtons}/>
              <label htmlFor='thrustUnitsMetric' className='right-label'>{unitLabels.newtons}</label>
            </span>
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
