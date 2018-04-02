import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';

const mapStateToProps = state => ({
  text: state.textToSearch,
  videos: state.videos,
})

const maptDispatchToProps = dispatch => ({
  toggleVideo: id => dispatch(toggleVideo(id))
})

export default connect(
  mapStateToProps,
  maptDispatchToProps,
)(VideoList);
