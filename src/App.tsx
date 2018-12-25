import React from "react";
import { Component } from "react";
// @ts-ignore
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from "react-redux";
import {store, persistor} from "./store";
import AppContainer from "./mainNavigator";

const App = () => (
  <Provider store={ store }>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default App; 