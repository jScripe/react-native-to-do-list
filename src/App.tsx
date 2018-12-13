import React from "react";
import { View } from "react-native";
import reducers from "./reducers";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import AppContainer from "./containers/appConatainer";

function configureStore(initialState: any) {
  const extender = compose(
    applyMiddleware(thunkMiddleware)
  );
  return createStore(reducers, initialState, extender);
}

const store = configureStore({});

const App = () => (
  <Provider store={ store }>
    <AppContainer/>
  </Provider>
);

export default App;