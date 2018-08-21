import { combineReducers } from 'redux';
import theme_reducers from './theme_reducer';

const rootReducer = combineReducers({
    theme: theme_reducers
});

export default rootReducer;