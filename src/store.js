import logger from "redux-logger";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import {
  watcherSaga
} from "./sagas";


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// initial store setup
const configureStore = initialState => {
  const enhancers = compose(applyMiddleware(logger), applyMiddleware(sagaMiddleware));
  // run the saga
  return createStore(rootReducer, initialState, enhancers);
};
export default configureStore({});
sagaMiddleware.run(watcherSaga);