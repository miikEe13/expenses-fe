import { Middleware } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';

/**
 * Middleware para persistir el token de autenticación en localStorage
 * cuando se despachan acciones de login o logout
 */
export const persistAuthMiddleware: Middleware = () => next => (action: AnyAction) => {
  const result = next(action);

  // Si la acción es de tipo login o logout, actualiza localStorage
  if (action.type === 'auth/login' && action.payload?.token) {
    localStorage.setItem('token', action.payload.token);
  } else if (action.type === 'auth/logout') {
    localStorage.removeItem('token');
  }

  return result;
};
