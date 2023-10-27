import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './appReducers';

const AppStore = configureStore({
  reducer: {
    data: appReducer,
  },
});

export default AppStore;