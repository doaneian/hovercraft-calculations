import React from 'react';
import {Link} from 'react-router';
import Inputs from './inputs/views/inputs';
import Outputs from './outputs/views/outputs';
require('./App.less');

const App = () => (
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

export default App;
