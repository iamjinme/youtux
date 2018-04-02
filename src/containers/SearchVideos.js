import React from 'react';
import { connect } from 'react-redux';
import { searchVideos, showMyVideos } from '../actions';
import { Form, FormGroup, ControlLabel, FormControl, Button, ButtonGroup } from 'react-bootstrap';

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
          <FormControl inputRef={ node => input = node } type="text" placeholder="Write anything" />
        </FormGroup>{' '}
        <ButtonGroup>
          <Button type="submit" bsStyle="info">Search</Button>
          <Button 
            onClick={ () => dispatch(showMyVideos()) }
            bsStyle="warning"
          >
          My Videos
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}

export default connect()(SearchVideos)
