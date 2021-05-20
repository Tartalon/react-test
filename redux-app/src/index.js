import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import { inc, dec, dis, rnd } from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const disDispatch = bindActionCreators(dis, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('dis').addEventListener('click', disDispatch);

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);
