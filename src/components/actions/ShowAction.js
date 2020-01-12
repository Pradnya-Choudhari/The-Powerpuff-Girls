import { SHOW_LIST, EPISODE_LIST } from '../actions/Types';

export const getShowList = () => (dispatch) => {
    fetch('http://api.tvmaze.com/shows')
      .then(res => res.json())
      .then((data) => {
        dispatch({
            type: SHOW_LIST,
            payload: data
        });
      })
      .catch(console.log)
};

export const getEpisodeList = (id) => (dispatch) => {
  fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    .then(res => res.json())
    .then((data) => {
      dispatch({
          type: EPISODE_LIST,
          payload: data
      });
    })
    .catch(console.log)
};