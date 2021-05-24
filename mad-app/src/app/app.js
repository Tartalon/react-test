import React from 'react';
import { connect } from 'react-redux';
import getRockets from '../redux/rockets/actions';

const App = rockets => {
  console.log(rockets);

  return <div className="app"></div>;
};

export default connect(({ rockets }) => ({ rockets }))(App);
