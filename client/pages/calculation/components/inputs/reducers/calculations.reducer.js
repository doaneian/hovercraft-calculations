import {fromJS} from 'immutable';
import {saveInputs} from '../action-handlers/inputs.action-handler';
import {calculationsInitialState} from '../../../../../config/initial-state/initial-state';

const calculationsReducer = function(state = fromJS(calculationsInitialState), action) {
  switch (action.type) {
    case 'SAVE_INPUTS':
      return saveInputs(state, action);
    default: return state;
  }
};

export default calculationsReducer;
