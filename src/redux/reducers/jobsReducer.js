const initialState = {
  jobs: [],
  selectedCompany: null,
  favourites: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "SET_SELECTED_COMPANY":
      return {
        ...state,
        selectedCompany: action.payload,
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (company) => company.company_name !== action.payload.company_name
        ),
      };
    default:
      return state;
  }
};

export default jobsReducer;
