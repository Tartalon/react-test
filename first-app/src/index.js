import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//     };

//     // ======== 1 ========
//     // this.nextYear = this.nextYear.bind(this);

//     this.nextYear = () => {
//       this.setState(state => ({
//         years: ++state.years,
//       }));
//     };
//   }

// ======== 1 ========
// nextYear() {
//   this.setState(state => ({
//     years: ++state.years,
//   }));
// }

//   render() {
//     const { name, surname, link } = this.props;
//     const { years } = this.state;
//     return (
//       <React.Fragment>
//         <button onClick={this.nextYear}>++</button>
//         <h1>
//           My name is {name}, surname - {surname}, years - {years}
//         </h1>
//         <a href={link}>My profile</a>
//       </React.Fragment>
//     );
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Vovka" surname="Morkovka" link="facebook.com" />
//       <WhoAmI name="Jone" surname="Dou" link="vk.com" />
//       <WhoAmI name="Mark" surname="Twen" link="google.com" />
//     </>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
