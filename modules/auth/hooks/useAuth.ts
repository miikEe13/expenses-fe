'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch, RootState } from '@/store';
import { logout } from '@/store/authSlice';

// Hook personalizado para manejar la autenticación
export function useAuth() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  // Comprueba el estado de autenticación
  const checkAuth = () => {
    if (!user && !isLoading) {
      router.push('/login');
      return false;
    }
    return true;
  };

  // El usuario ya viene correctamente tipado del estado de Redux
  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    logout: handleLogout,
    checkAuth
  };
}
