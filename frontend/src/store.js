import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

import { orderCreateReducer } from "./reducers/orderReducers";
//create reducer
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromLocalStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const initalState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};
const middleware = [thunk];

//create store
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
