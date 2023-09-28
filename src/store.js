import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { rootSaga } from './sagas'; // Ensure correct import statement

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with middleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// Run the saga middleware
sagaMiddleware.run(rootSaga); // Ensure correct saga name

export default store;