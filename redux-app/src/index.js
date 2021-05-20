import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'DIS':
      return state - state;
    default:
      return state;
  }
};

const inc = () => ({
  type: 'INC',
});

const dec = () => ({
  type: 'DEC',
});

const dis = () => ({
  type: 'DIS',
});

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('dis').addEventListener('click', () => {
  store.dispatch(dis());
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);
