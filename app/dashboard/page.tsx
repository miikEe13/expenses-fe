import PrivateRoute from '@/modules/auth/components/PrivateRoute';
import DashboardWelcome from '@/modules/dashboard/components/Welcome';
import DashboardSummary from '@/modules/dashboard/components/SummaryCards';
import DashboardChart from '@/modules/dashboard/components/OverviewChart';
import DashboardTables from '@/modules/dashboard/components/LatestTables';

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <div className="min-h-screen flex flex-col gap-6">
        <DashboardWelcome />
        <DashboardSummary />
        <DashboardChart />
        <DashboardTables />
      </div>
    </PrivateRoute>
  );
}
