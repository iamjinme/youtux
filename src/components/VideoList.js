import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import { Row } from 'react-bootstrap';

const VideoList = ({ videos, saveVideo }) => (
  <Row>
    { videos.map(video => (
        <Video key={video.id} {...video} onClick={ () => saveVideo(video) } />
      ))
    }
  </Row>
)

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  saveVideo: PropTypes.func.isRequired,
}

export default VideoList;
