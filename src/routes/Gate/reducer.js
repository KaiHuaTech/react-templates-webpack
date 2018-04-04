// ------------------------------------
// Constants
// ------------------------------------
export const GATE_HOVER = 'GATE_HOVER';

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isGateHover: false,
};

export default function gateReducer (state = initialState, action) {
  switch (action.type) {
    case GATE_HOVER:
      return { isGateHover: !state.isGateHover };
    default:
      return state;
  }
}

// ------------------------------------
// Actions
// ------------------------------------
// export function locationChange (location = '/gate') {
//   return {
//     type: SHOW_CHAT,
//     payload: location,
//   };
// }
