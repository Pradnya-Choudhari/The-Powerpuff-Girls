import { combineReducers } from 'redux';
import ShowReducer from "./ShowReducer";

const rootReducer = combineReducers({
    show: ShowReducer
});

export default rootReducer;
