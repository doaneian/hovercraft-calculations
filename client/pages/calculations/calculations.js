import React from 'react';
import {Link} from 'react-router';
import Inputs from './components/inputs/views/inputs';
import Outputs from './components/outputs/views/outputs';
require('./calculations.less');

const Calculations = () => (
  <div className='container center app-block'>
    <nav className='navbar'>
      <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>How it Works</Link></li>
            <li className='active'><Link to='/calculations'>Calculations</Link></li>
            <li><Link to='/calculations-explanation'>Calculations Explanation</Link></li>
          </ul>
      </div>
    </nav>
    <Inputs />
    <Outputs />
  </div>
);

export default Calculations;
