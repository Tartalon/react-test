const initiolState = {
  menu: [],
};

const reducer = (state = initiolState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
