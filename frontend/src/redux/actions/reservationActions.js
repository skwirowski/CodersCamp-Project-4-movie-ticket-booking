import types from 'redux/types';

const {
  SET_RESERVATION_ITEM,
  SET_RESERVATION_SEATS,
  RESERVATION_SEATS_FETCH_REQUESTED,
  RESERVATION_SEATS_FETCH_SUCCEEDED,
  RESERVATION_SEATS_FETCH_FAILED,
} = types;

const setReservationItem = (payload, objectKey) => ({
  type: SET_RESERVATION_ITEM,
  payload,
  objectKey,
});

const setReservationSeats = payload => ({
  type: SET_RESERVATION_SEATS,
  payload,
});

const requestSeatsFetch = () => ({
  type: RESERVATION_SEATS_FETCH_REQUESTED,
});

const resolveSeatsFetch = payload => ({
  type: RESERVATION_SEATS_FETCH_SUCCEEDED,
  payload,
});

const rejectSeatsFetch = error => ({
  type: RESERVATION_SEATS_FETCH_FAILED,
  error,
});

export default {
  setReservationItem,
  setReservationSeats,
};
