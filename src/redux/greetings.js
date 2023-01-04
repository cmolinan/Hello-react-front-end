/* eslint-disable */
const initialState = {
  message: {},
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetch':
      return {
        ...state,
        loaded: true,
      };
    case 'complete':
      return {
        ...state,
        loaded: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const fetchmessage = () => async (dispatch) => {
  dispatch({ type: 'fetch' });
  await fetch('http://localhost:3000/api/v1/greetings', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'complete', payload: data.message });
    })
    .catch(() => dispatch({ type: 'fetch' }));
};

export default messageReducer;
