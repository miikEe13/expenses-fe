import MainLayout from '@/modules/layout/components/MainLayout';
import PrivateRoute from '@/modules/auth/components/PrivateRoute';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <MainLayout>{children}</MainLayout>
    </PrivateRoute>
  );
}