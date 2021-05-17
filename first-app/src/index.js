import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app';
import reportWebVitals from './reportWebVitals';

function WhoAmI() {
  return (
    <React.Fragment>
      <h1>My name is, surname - </h1>
      <a href="facebook.com">My profile</a>
    </React.Fragment>
  );
}

ReactDOM.render(<WhoAmI />, document.getElementById('root'));

reportWebVitals();
