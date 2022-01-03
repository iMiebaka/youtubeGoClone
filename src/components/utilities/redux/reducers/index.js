import descriptionToggleReducer from './detailToggle';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    descriptionToggleReducer: descriptionToggleReducer
})


export default allReducer