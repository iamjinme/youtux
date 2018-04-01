export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';

export const searchVideos = (text = '') => ({
  type: SEARCH_VIDEOS,
  text,
})
