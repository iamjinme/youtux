import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { searchVideos, showMyVideos, changeText } from '../actions';
import { Form, FormGroup, Button, ButtonGroup } from 'react-bootstrap';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import FilterChannel from '../components/FilterChannel';
import { API_KEY } from '../actions'

const SUGGEST_URL = `https://suggestqueries.google.com/complete/search?key=${API_KEY}&client=firefox&q=`;
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class AutoComplete extends React.Component {
  state = {
    isLoading: false,
    options: [],
    text: '',
  }
  changeText = (text) => {
    this.setState({ text })
    this.props.dispatch(changeText(text));
  }
  render() {
    return (
      <AsyncTypeahead
        placeholder='Write anything to search'
        isLoading={ this.state.isLoading }
        onChange={ changed => this.changeText(changed[0] || '') }
        submitFormOnEnter={ true }
        onInputChange={ text => this.changeText(text) }
        onSearch={ query => {
        this.setState({isLoading: true});
        axios.get(`${CORS_PROXY}${SUGGEST_URL}${query}`)
          .then(response => {
            const words = [
              response.data[0],
              ...response.data[1],
            ]
            this.setState({ isLoading: false, options: words });
          });
        }}
        options={this.state.options}
      />
    );
  }
}

const SearchVideos = ({ dispatch }) => {
  let input
  return (
    <div>
      <Form inline
        onSubmit={ e => {
          e.preventDefault()
          dispatch(searchVideos())
        }}
      >
        <FormGroup controlId="formSearchVideo">
          <AutoComplete dispatch={ dispatch }></AutoComplete>
        </FormGroup>{' '}
        <ButtonGroup>
          <Button type="submit" bsStyle="info">Search</Button>
          <Button 
            onClick={ () => dispatch(showMyVideos()) }
            bsStyle="warning"
          >
          My Videos
          </Button>
        </ButtonGroup>{' '}
        <FormGroup>
          <FilterChannel />
        </FormGroup>
      </Form>
    </div>
  )
}

export default connect()(SearchVideos)
