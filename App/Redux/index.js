import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import Login from '../Components/Login/Login.reducer';
import Signup from '../Components/Signup/Signup.reducer';
import Home from '../Components/Home/Home.reducer';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    github: require('./GithubRedux').reducer,
    search: require('./SearchRedux').reducer,
    login: Login,
    signup: Signup,
    home: Home,
  })

  return configureStore(rootReducer, rootSaga)
}
