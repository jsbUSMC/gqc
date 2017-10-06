import {
  DATA_RECEIVE_PROTECTED_DATA,
  DATA_FETCH_PROTECTED_DATA_REQUEST,
} from '../constants';

export default function dataReducer(state, action) {
  switch (action.type) {
    case DATA_RECEIVE_PROTECTED_DATA:
      return state.merge({
        data: action.payload.data,
        isFetching: false,
      });

    case DATA_FETCH_PROTECTED_DATA_REQUEST:
      return state.merge({
        isFetching: true,
      });
    default:
      return state;
  }
}
