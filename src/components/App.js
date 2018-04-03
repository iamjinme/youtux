import React from 'react';
import SearchVideos from '../containers/SearchVideos';
import VisibleVideoList from '../containers/VisibleVideoList';
import { Grid, Glyphicon } from 'react-bootstrap';

const App = () => (
  <div>
    <Grid>
      <h3><Glyphicon glyph="facetime-video" /> Youtux</h3>
      <SearchVideos />
      <hr/>
      <VisibleVideoList />
    </Grid>
  </div>
)

export default App;
