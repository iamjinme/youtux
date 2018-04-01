import { combineReducers } from 'redux';
import {
  SEARCH_VIDEOS
} from '../actions'

const searchVideos = (state = '', action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return action.text
    default:
      return state
  }
}

const rootReducer = combineReducers({
  textToSearch: searchVideos,
});

export default rootReducer;
