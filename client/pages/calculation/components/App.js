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
            <li><Link to='/how-it-works'>How it Works</Link></li>
            <li className='active'><Link to='/'>Calculations</Link></li>
            <li><a href='calculations-explanation.html'>Calculations Explanation</a></li>
          </ul>
      </div>
    </nav>
    <Inputs />
    <Outputs />
  </div>
);

export default App;
