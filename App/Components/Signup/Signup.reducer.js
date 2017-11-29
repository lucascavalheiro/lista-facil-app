import {
  ON_CHANGE_PICTURE,
  ON_CHANGE_NAME,
  ON_CHANGE_NEW_EMAIL,
  ON_CHANGE_NEW_PASSWORD
} from '../../Config/ActionTypes';

const INITIAL_STATE = {
  picture: '',
  name: '',
  newEmail: '',
  newPassword: '',
};

export default function codeVerificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_CHANGE_PICTURE:
      return { ...state, picture: action.payload };
    case ON_CHANGE_NAME:
      return { ...state, name: action.payload };
    case ON_CHANGE_NEW_EMAIL:
      return { ...state, newEmail: action.payload };
    case ON_CHANGE_NEW_PASSWORD:
     return { ...state, newPassword: action.payload};
    default:
      return state;
  }
}
