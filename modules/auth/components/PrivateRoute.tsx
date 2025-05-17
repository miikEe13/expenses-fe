'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">Cargando...</div>;
  }

  if (!user) {
    return null; // No renderizamos nada mientras redirige
  }

  return <>{children}</>;
}
