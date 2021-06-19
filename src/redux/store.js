import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {userLoginReducer} from "./reducers/userReducers";
import {getPhotoReducer} from "./reducers/postReducers";


const appReducer = combineReducers({
    userDetails: userLoginReducer,
    postDetails : getPhotoReducer
  });

  const reducer = (state, action) => {
    if (action.type === "USER_LOGOUT") {
      state = undefined;
    }
    return appReducer(state, action);
  };


  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const initialState = {
    userDetails: { userInfo: userInfoFromStorage},
};

const middleware = [thunk];
 
  
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
