import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import weatherReducer from '../../modules/weather/presentation/redux/weatherSlice';

export const store = configureStore(
    {
        reducer: {
            weather: weatherReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    }
);

export type AppDispatch = typeof store.dispatch;
