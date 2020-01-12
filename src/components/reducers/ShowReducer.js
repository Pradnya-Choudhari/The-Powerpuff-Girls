import { SHOW_LIST } from '../actions/Types';

const INITIAL_STATE = {   
    list: []
};

export default function ShowReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SHOW_LIST:debugger;
            return { ...state, list: action.payload };
        default:
            return state;
    }
};
