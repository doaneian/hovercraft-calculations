import React from 'react';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import HowItWorks from './components/how-it-works/how-it-works';
import calculationsReducer from './components/inputs/reducers';

let store = createStore(calculationsReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/how-it-works" component={HowItWorks} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
