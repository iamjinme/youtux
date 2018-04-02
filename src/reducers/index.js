import { combineReducers } from 'redux';
import {
  SEARCH_VIDEOS
} from '../actions'

const textToSearch = (state = '', action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return action.text
    default:
      return state
  }
}

const videos = (state = '', action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return action.videos
    default:
      return state
  }
}

const rootReducer = combineReducers({
  textToSearch,
  videos,
});

export default rootReducer;
