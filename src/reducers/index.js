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
      title: video.snippet.title,
      user: video.snippet.channelTitle,
      thumbnail: video.snippet.thumbnails.high.url,
      year: video.snippet.publishedAt.substr(0,4),
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
