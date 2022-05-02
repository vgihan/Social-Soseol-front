import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './reducers/mainReducer';

const makeStore = () => {
  return configureStore({ reducer: { mainReducer } });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export default store;
