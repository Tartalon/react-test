import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, dis, rnd }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary">
        INC
      </button>
      <button onClick={dis} className="btn btn-primary">
        DIS
      </button>
      <button onClick={rnd} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, actions)(Counter);
