import types from 'redux/types';

const { SET_RESERVATION_ITEM, SET_RESERVATION_SEATS } = types;

const INITIAL_STATE = {
  movieTitle: '',
  screeningDay: '',
  screeningHour: '',
  seats: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RESERVATION_ITEM:
      return {
        ...state,
        [action.objectKey]: action.payload,
      };
    case SET_RESERVATION_SEATS:
      return {
        ...state,
        seats: [...state.seats, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
