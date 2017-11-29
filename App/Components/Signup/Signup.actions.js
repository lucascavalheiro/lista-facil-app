import {
  ON_CHANGE_PICTURE,
  ON_CHANGE_NAME,
  ON_CHANGE_NEW_EMAIL,
  ON_CHANGE_NEW_PASSWORD
} from '../../Config/ActionTypes';

export const onChangePicture = picture => {
  return {
    type: ON_CHANGE_PICTURE,
    payload: picture
  }
}

export const onChangeName = name => {
  return {
    type: ON_CHANGE_NAME,
    payload: name
  }
}

export const onChangeNewEmail = email => {
  return {
    type: ON_CHANGE_NEW_EMAIL,
    payload: email
  }
}

export const onChangeNewPassword = password => {
  return {
    type: ON_CHANGE_NEW_PASSWORD,
    payload: password
  }
}
