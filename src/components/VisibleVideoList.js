import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions';

class VisibleVideoList extends Component {

  componentWillMount() {
    this.props.searchVideos()
  }

  render() {
    console.log(this.props);
    return (
      <div>Youtux and text {this.props.text}</div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.textToSearch,
})

export default connect(mapStateToProps, { searchVideos })(VisibleVideoList);
