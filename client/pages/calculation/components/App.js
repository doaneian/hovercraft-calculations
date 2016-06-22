import React from 'react';
import Inputs from './inputs/views/inputs';
import Outputs from './outputs/views/outputs';
require('./App.less');

const App = () => (
  <div className='container center app-block'>
    <Inputs />
    <Outputs />
  </div>
);

export default App;
