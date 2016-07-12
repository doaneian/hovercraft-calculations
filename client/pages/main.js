import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Calculations from 'client/pages/calculation/components/calculations';
import HowItWorks from 'client/pages/how-it-works/how-it-works';
import CalculationsExplanation from 'client/pages/calculations-explanation/calculations-explanation';
import calculationsReducer from 'client/pages/calculation/components/inputs/reducers';

let store = createStore(calculationsReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={HowItWorks} />
      <Route path="/calculations" component={Calculations} />
      <Route path="/calculations-explanation" component={CalculationsExplanation} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
