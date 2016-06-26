import React from 'react';
import Inputs from './inputs/views/inputs';
import Outputs from './outputs/views/outputs';
require('./App.less');

const App = () => (
  <div className='container center app-block'>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><a href="how-it-works.html">How it Works</a></li>
            <li><a href="#" class="active">Calculations</a></li>
          </ul>
      </div>
    </nav>
    <Inputs />
    <Outputs />
  </div>
);

export default App;
