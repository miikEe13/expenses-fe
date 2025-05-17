'use client';

export default function DashboardTables() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Income Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h4 className="font-medium text-gray-700 mb-2">Latest Incomes</h4>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th>Source</th>
              <th>Date</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Salary</td>
              <td>Jul 22</td>
              <td className="text-right">$3,000</td>
            </tr>
            <tr>
              <td>Freelance</td>
              <td>Jul 10</td>
              <td className="text-right">$2,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Expense Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h4 className="font-medium text-gray-700 mb-2">Latest Expenses</h4>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th>Category</th>
              <th>Date</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Groceries</td>
              <td>Jul 18</td>
              <td className="text-right">$500</td>
            </tr>
            <tr>
              <td>Restaurant</td>
              <td>Jul 12</td>
              <td className="text-right">$150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
