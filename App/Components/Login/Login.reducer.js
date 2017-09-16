import {
  ON_CHANGE_EMAIL,
} from '../../Config/ActionTypes';

const INITIAL_STATE = {
  email: 'teste@email.com'
};

export default function codeVerificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_CHANGE_EMAIL:
      return { ...state, email: action.payload };

    default:
      return state;
  }
}
