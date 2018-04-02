import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions';

class VisibleVideoList extends Component {
  render() {
    return (
      <div>Youtux and text {this.props.text}</div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.textToSearch,
  videos: state.videos,
})

export default connect(mapStateToProps, { searchVideos })(VisibleVideoList);
