import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveVideo } from '../actions';
import VideoList from '../components/VideoList';

const getVisibleVideos = (videos, filterChannel) => {
  if (filterChannel) {
    return videos.filter(t => t.user === filterChannel);
  }
  return videos;
}

const mapStateToProps = state => ({
  text: state.textToSearch,
  videos: getVisibleVideos(state.videos, state.filterChannel),
})

const mapDispatchToProps = dispatch => ({
  saveVideo: id => dispatch(saveVideo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoList);
