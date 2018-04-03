import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveVideo } from '../actions';
import VideoList from '../components/VideoList';

const mapStateToProps = state => ({
  text: state.textToSearch,
  videos: state.videos,
})

const mapDispatchToProps = dispatch => ({
  saveVideo: id => dispatch(saveVideo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoList);
