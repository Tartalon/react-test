import axios from 'axios';

const getRocketRequest = () => ({ type: 'GET_ROCKET_REQUEST' });

const getRocketsFailed = () => ({ type: 'GET_ROCKET_FAILED' });

const getRocketsSuccess = () => ({ type: 'GET_ROCKET_SUCCESS', payload });

// const getRockets = () => async dispatch => {
//   dispatch(getRocketRequest());
// };

const getRockets = () => async dispatch => {
  dispatch(getRocketRequest());

  try {
    const response = await axios.get(
      'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f'
    );
    dispatch(getRocketsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.error(error);
    dispatch(getRocketsFailed());
  }

  return response;
};

export default getRockets;
