import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

const VideoList = ({ videos, toggleVideo }) => (
  <ul>
    { videos.map(video => (
        <Video key={video.id} {...video} onClick={ () => toggleVideo(video.id) } />
      ))
    }
  </ul>
)

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      saved: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleVideo: PropTypes.func.isRequired,
}

export default VideoList;
