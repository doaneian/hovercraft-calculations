import React from 'react';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import HowItWorks from './components/how-it-works/how-it-works';
import CalculationsExplanation from './components/calculations-explanation/calculations-explanation';
import calculationsReducer from './components/inputs/reducers';

let store = createStore(calculationsReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={HowItWorks} />
      <Route path="/calculations" component={App} />
      <Route path="/calculations-explanation" component={CalculationsExplanation} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
