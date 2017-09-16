import {
  ON_CHANGE_EMAIL,
  ON_CHANGE_PASSWORD
} from '../../Config/ActionTypes';

export const onChangeEmail = email => {
  return {
    type: ON_CHANGE_EMAIL,
    payload: email
  }
}

export const onChangePassword = password => {
  return {
    type: ON_CHANGE_PASSWORD,
    payload: password
  }
}
