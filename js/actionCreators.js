// @flow
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export function addApiData(apiData: Show) {
  return {
    type: ADD_API_DATA,
    payload: apiData,
  };
}
