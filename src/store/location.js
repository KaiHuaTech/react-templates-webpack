// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE';

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = '/gate';
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state;
}

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/gate') {
  return {
    type: LOCATION_CHANGE,
    payload: location,
  };
}
