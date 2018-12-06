import React from "react";
import { View } from "react-native";
import reducers from "./reducers";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";

function configureStore(initialState: any) {
  const extender = compose(
    applyMiddleware(thunkMiddleware)
  );
  return createStore(reducers, initialState, extender);
}

const store = configureStore({});

const App = () => (
  <Provider store={ store }>
    <View>123</View>
  </Provider>
);

export default App;