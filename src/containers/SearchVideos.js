import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions';

const SearchVideos = ({ dispatch }) => {
  let input
  return (
    <div>
      <form
        onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(searchVideos(input.value))
        }}
      >
        <input ref={ node => input = node } />
        <button type="submit">
        Search
        </button>
      </form>
    </div>
  )
}

export default connect()(SearchVideos)
