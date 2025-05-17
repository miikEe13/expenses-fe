'use client';

export default function DashboardChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">Recent Transactions</h3>
        <button className="text-sm text-gray-600 hover:text-gray-800">Export</button>
      </div>
      <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-500 rounded">
        [Graph Placeholder]
      </div>
    </div>
  );
}
