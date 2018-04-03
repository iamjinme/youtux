import axios from 'axios';
export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_CHANNEL = 'CHANGE_CATEGORY';
export const CHANGE_YEAR = 'CHANGE_YEAR';
export const SAVE_VIDEO = 'SAVE_VIDEO';
export const SHOW_MY_VIDEOS = 'SHOW_MY_VIDEOS';

export const API_KEY = 'AIzaSyDK7Jus-yWofaJKGRwDD5gPpZX62t7j47s';
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=`;

export const searchVideos = () => {
  return (dispatch, getState) => {
    const text = getState().textToSearch.trim();
    if (!text) return;
    axios.get(`${YOUTUBE_URL}${text}`)
      .then((response) => {
        dispatch({ type: SEARCH_VIDEOS, text, videos: response.data.items })
      })
  }
}

export const saveVideo = video => ({
  type: SAVE_VIDEO,
  video,
})

export const showMyVideos = () => ({
  type: SHOW_MY_VIDEOS,
})

export const changeText = text => ({
  type: CHANGE_TEXT,
  text,
})
