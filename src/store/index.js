import { configureStore, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore({
  reducer: rootReducer,
  middleware: (m) => {
    return m().concat(sagaMiddleware)
  }
});

sagaMiddleware.run(rootSaga)

export default store;

