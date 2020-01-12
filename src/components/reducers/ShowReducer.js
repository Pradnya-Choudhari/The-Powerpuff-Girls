import { SHOW_LIST, EPISODE_LIST } from '../actions/Types';

const INITIAL_STATE = {   
    list: [],
    episodes: []
};

export default function ShowReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SHOW_LIST:
            return { ...state, list: action.payload };
        case EPISODE_LIST:
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
};
