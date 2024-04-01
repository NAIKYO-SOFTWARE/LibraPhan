import { configureStore } from '@reduxjs/toolkit';
import { handleLoginReducer } from './loginReducer'; 

export const store = configureStore({
    reducer: {
        user: handleLoginReducer, 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;