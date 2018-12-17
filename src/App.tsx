import React from "react";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// @ts-ignore
import { PersistGate } from 'redux-persist/lib/integration/react';
import thunkMiddleware from "redux-thunk";
import AppContainer from "./containers/appConatainer";
import MainNavigator from "./mainNavigator";

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 
 };

function configureStore(initialState: any) {
  const extender = compose(
    applyMiddleware(thunkMiddleware)
  );
  const pReducer = persistReducer(persistConfig, reducers);
  return createStore(pReducer, initialState, extender);
}

const store = configureStore({});
const persistor = persistStore(store);

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