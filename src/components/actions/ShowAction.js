import { SHOW_LIST } from '../actions/Types';

export const getShowList = () => (dispatch) => {
    fetch('http://api.tvmaze.com/shows')
      .then(res => res.json())
      .then((data) => {debugger;
        dispatch({
            type: SHOW_LIST,
            payload: data
        });
      })
      .catch(console.log)
};
