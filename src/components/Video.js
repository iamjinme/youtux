import React from 'react';
import PropTypes from 'prop-types'
import { Col, Thumbnail, Button } from 'react-bootstrap';
import { posix } from 'path';

const Video = ({ onClick, title, user, thumbnail, year }) => (
  <Col xs={6} md={4}>
    <Thumbnail src={thumbnail} alt="480x360">
      <h4>{title}</h4>
      <p><strong>{user}</strong> - {year}</p>
      <p>
        <Button bsStyle="primary" onClick={onClick}>Save</Button>
      </p>
    </Thumbnail>
  </Col>
)

Video.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

export default Video;
