import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/authSlice';
import { persistAuthMiddleware } from '@/modules/auth/middlewares/persistMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistAuthMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
