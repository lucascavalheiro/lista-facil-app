import {
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD
} from '../../Config/ActionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function codeVerificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case ON_CHANGE_PASSWORD:
     return { ...state, password: action.payload};
    default:
      return state;
  }
}
