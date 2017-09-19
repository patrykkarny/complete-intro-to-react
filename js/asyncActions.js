// @flow

import axios from 'axios';
import { addApiData } from './actionCreators';

export default function getApiDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      .catch(error => console.error('axios error', error)); // eslint-disable-line no-console
  };
}
