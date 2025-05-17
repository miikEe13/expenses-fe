'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { login, logout } from '@/store/authSlice';
import { getProfile } from '@/modules/auth/services';

export function AuthLoader({ children }: { children?: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      console.log('AuthLoader: Iniciando verificación de autenticación...');
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          dispatch(logout());
          return;
        }

        try {
          const user = await getProfile(token);
          
          // Ahora getProfile ya devuelve directamente el objeto User, así que lo usamos tal cual
          dispatch(login({ user, token }));
        } catch (error) {
          console.error('AuthLoader: Error al cargar el perfil (getProfile falló):', error);
          dispatch(logout());
          // localStorage.removeItem('token'); // Esto es manejado por el middleware de Redux al hacer logout
        }
      } catch (error) { // Captura errores de localStorage.getItem o problemas inesperados
        console.error('AuthLoader: Error general durante checkAuth:', error);
        dispatch(logout());
      } finally {
        setIsAuthChecked(true);
      }
    };

    checkAuth();
  }, [dispatch]);

  if (!isAuthChecked) {
    return <div className="flex min-h-screen items-center justify-center">Cargando autenticación...</div>;
  }

  return children;
}
