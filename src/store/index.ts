import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/rootReducer';

const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export type AppRootState = ReturnType<typeof rootReducer>;
export type AppGetState = () => AppState;

export default store;
