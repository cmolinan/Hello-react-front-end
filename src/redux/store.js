import { configureStore } from '@reduxjs/toolkit';
import reducerGreetings from './greetings';

const store = configureStore({
  reducer: {
    stGreeting: reducerGreetings,
  },
});

export default store;
