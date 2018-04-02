import React from 'react';
import PropTypes from 'prop-types'

const Video = ({ onClick, saved, text }) => (
  <li
    onClick={onClick}
    style={
      { textDecoration: saved ? 'line-through' : 'none' }
    }
  >
  {text}
  </li>
)

Video.propTypes = {
  onClick: PropTypes.func.isRequired,
  saved: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Video;
