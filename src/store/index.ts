import { createStore, applyMiddleware, compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers";


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
  
export const store = configureStore({});
export const persistor = persistStore(store);