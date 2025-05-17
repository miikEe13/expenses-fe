'use client';

export default function DashboardSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-600 text-white rounded-lg p-6 shadow">
        <p>Total Income</p>
        <h2 className="text-3xl font-bold">$5,000</h2>
      </div>
      <div className="bg-red-500 text-white rounded-lg p-6 shadow">
        <p>Total Expense</p>
        <h2 className="text-3xl font-bold">$2,300</h2>
      </div>
    </div>
  );
}
