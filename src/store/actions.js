import * as types from './types'
import axios from 'axios';

export function setFilterIsOpen (name, isOpen) {
  return {
    type: types.ON_FILTER_OPEN_CHANGED,
    name,
    payload: { isOpen }
  }
}

export function setFilterSortField (name, sortField) {
  return {
    type: types.ON_FILTER_SORT_FIELD_CHANGED,
    name,
    payload: { sortField }
  }
}

export function setFilterSortOrientation (name, sortOrientation) {
  return {
    type: types.ON_FILTER_SORT_FIELD_CHANGED,
    name,
    payload: { sortOrientation }
  }
}

export function addFilterQuery (name, query) {
  return {
    type: types.ON_ADD_FILTER_QUERY,
    name,
    payload: { ...query }
  }
}

export function setSearch (name, search) {
  return {
    type: types.ON_SET_SEARCH,
    name,
    payload: search
  }
}

export function editFilterQuery (name, index, query) {
  return {
    type: types.ON_EDIT_FILTER_QUERY,
    name,
    index,
    payload: { ...query }
  }
}

export function removeFilterQuery (name, index) {
  return {
    type: types.ON_REMOVE_FILTER_QUERY,
    name,
    index
  }
}

export function changeValue(e) {
  console.log('changeValue');
  return {
      type: 'VALUE_CHANGED',
      payload: e.target.value
  }
}

export function changeValueSearch(e) {
  console.log('changeValueSearch');
  return {
      type: 'VALUE_CHANGED_TEXT_FIELD',
      payload: e.target.value
  }
}

// Axios
export function getrankparamList() {
  return dispatch => {
      axios.get('http://localhost:8080/otimizacao_rank')
          .then(response=> { dispatch([ { type: 'RANKPARAM_FETCHED', payload: response.data }])})


  }
}