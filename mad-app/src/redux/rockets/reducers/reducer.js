const initialState = {
  rocket: null,
  loadingRockets: false,
  fetchedSuccess: false,
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ROCKET_REQUEST':
      return { ...state, loadingRockets: true };
    case 'GET_ROCKETS_SUCCESS':
      return {
        ...state,
        loadingRockets: false,
        fetchedSuccess: true,
        rockets: action.payload,
      };
    case 'GET_ROCKET_FAILED':
      return {
        ...state,
        loadingRockets: false,
        fetchedSuccess: false,
      };

    default:
      return state;
  }
};

export default rocketsReducer;
