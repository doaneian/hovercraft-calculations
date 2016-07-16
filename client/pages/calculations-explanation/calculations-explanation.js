import React from 'react';
import {Link} from 'react-router';
require('./calculations-explanation.less');

const CalculationsExplanation = () => (
  <div className='container center main-block'>
    <nav className='navbar'>
      <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>How it Works</Link></li>
            <li><Link to='/calculations'>Calculations</Link></li>
            <li className="active"><Link to='/calculations-explanation'>Calculations Explanation</Link></li>
          </ul>
      </div>
    </nav>
    <ul>
      <li className='bullet-point'>
        Using Bernoulli’s equation, the total energy under the hovercraft
        (point A) is equal to the total energy just outside the nozzle (point B)
      </li>
      <li className='bullet-point'>
        Point A is potential energy from the pressure.  We’re assuming 0 air
        velocity, which means the kinetic energy is 0.  This means that
        <div className='equation'>
          Energy<sub>point A</sub> = <sup>P</sup>&frasl;<sub><i>p</i></sub>
        </div>
      </li>
      <li className='bullet-point'>
        Point B is kinetic energy.  We’re assuming the pressure goes to 0
        relative to the pressurized chamber, which means the potential energy
        is 0.  This means that
        <div className='equation'>
          Energy<sub>point B</sub> = <sup>1</sup>&frasl;<sub>2</sub> V<sup>2</sup>
        </div>
      </li>
    </ul>
    <img src='./assets/calculations-diagram.jpg' />
    <ul>
      <li className='bullet-point'>
        We can set the potential energy from the pressurized chamber equal
        to the kinetic energy from the nozzle.  Doing this, we get
        <div className='equation'>
          <sup>P</sup>&frasl;<sub><i>p</i></sub> = <sup>1</sup>&frasl;<sub>2</sub> V<sup>2</sup>
        </div>
        We can now solve for the velocity at point B
      </li>
      <li className='bullet-point'>
        Now that we know the velocity, we can calculate the area of the
        nozzle that is needed to get the thrust that we want.  This equation is
        <div className='equation'>
          F = <i>p</i>V<sup>2</sup>A
        </div>
      </li>
      <li className='bullet-point'>
        Now that we know the velocity of the air coming out of the nozzle as
        well as the area of the nozzle, we can find the flowrate that is necessary
        to sustain the flow coming out of the nozzle while not losing pressure
        underneath the hovercraft.
        <div className='equation'>
          Flowrate = V*A
        </div>
      </li>
      <li className='bullet-point'>
        Blowers are often rated by flowrate at different pressures.  The chart
        provided attempts to provide standardized flowrate vs pressure that can
        be used to find a blower that meets the requirements.  To calculate the
        flowrate at the different pressures, we can use the fact that pressure * volume
        will always be the same.  This means that
        <div className='equation'>
          P<sub>standardized</sub> * Volume<sub>standardized</sub> = P<sub>calculated</sub> * Volume<sub>calculated</sub>
        </div>
        which can be rearranged to
        <div className='equation'>
          Volume<sub>standardized</sub> = (Volume<sub>calculated</sub> * P<sub>calculated</sub>) / P<sub>standardized</sub>
        </div>
        so we can calculate the volume at each pressure we want to plot.
      </li>
    </ul>
  </div>
);

export default CalculationsExplanation;
