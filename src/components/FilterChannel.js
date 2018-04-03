import React from 'react';
import { connect } from 'react-redux';
import { changeChannel } from '../actions';
import { Typeahead } from 'react-bootstrap-typeahead';

const FilterChannel = ({ channels, changeChannel }) => (
  <Typeahead
    placeholder='Write channel to filter'
    options = { channels }
    onChange = { changed => {
      changeChannel(changed[0] || '') 
    }}
  />
)

const mapStateToProps = state => ({
  channels: state.channels,
})

const mapDispatchToProps = dispatch => ({
  changeChannel: channel => dispatch(changeChannel(channel))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterChannel);
