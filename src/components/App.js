import React from 'react';
import SearchVideos from '../containers/SearchVideos';
import VisibleVideoList from '../containers/VisibleVideoList';
import { Grid, Jumbotron } from 'react-bootstrap';

const App = () => (
  <div>
    <Grid>
      <SearchVideos />
      <VisibleVideoList />
    </Grid>
  </div>
)

export default App;
