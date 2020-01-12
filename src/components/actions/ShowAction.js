import { SHOW_LIST, Episode_LIST } from '../actions/Types';

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

export const getEpisodeList = (id) => (dispatch) => {debugger;
  fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    .then(res => res.json())
    .then((data) => {debugger;
      dispatch({
          type: Episode_LIST,
          payload: data
      });
    })
    .catch(console.log)
};