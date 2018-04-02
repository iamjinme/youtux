import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const SearchVideos = ({ dispatch }) => {
  let input
  return (
    <div>
      <Form inline
        onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(searchVideos(input.value))
        }}
      >
        <FormGroup controlId="formInlineName">
          <ControlLabel> :: Youtux :: </ControlLabel>{' '}
          <FormControl inputRef={ node => input = node } type="text" placeholder="Write a video name" />
        </FormGroup>{' '}
        <Button type="submit">Search</Button>
      </Form>
    </div>
  )
}

export default connect()(SearchVideos)
