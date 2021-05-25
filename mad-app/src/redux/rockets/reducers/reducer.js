const initialState = {
  rockets: null,
  loadingRockets: false,
  fetchedSuccess: false,
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ROCKETS_REQUEST':
      return {
        ...state,
        loadingRockets: true,
      };
    case 'GET_ROCKETS_FAILED':
      return {
        ...state,
        loadingRockets: false,
        fetchedSuccess: false,
      };
    case 'GET_ROCKETSS_SUCCESS':
      return {
        ...state,
        loadingRockets: false,
        fetchedSuccess: true,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
