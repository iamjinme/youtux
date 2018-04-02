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

const videos = (state = [], action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
    return action.videos.map(video => ({
      id: video.id.videoId,
      text: video.snippet.title,
      date: video.snippet.publishedAt,
      user: video.snippet.channelTitle,
      thumbnail: video.snippet.thumbnails.default.url,
      saved: false,
    }))
    default:
      return state
  }
}

const rootReducer = combineReducers({
  textToSearch,
  videos,
});

export default rootReducer;
