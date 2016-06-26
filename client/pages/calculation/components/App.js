import React from 'react';
import Inputs from './inputs/views/inputs';
import Outputs from './outputs/views/outputs';
require('./App.less');

const App = () => (
  <div className='container center app-block'>
    <nav className='navbar'>
      <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li><a href='index.html'>How it Works</a></li>
            <li className='active'><a href='calculations.html'>Calculations</a></li>
          </ul>
      </div>
    </nav>
    <Inputs />
    <Outputs />
  </div>
);

export default App;
