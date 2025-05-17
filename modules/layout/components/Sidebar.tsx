'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { LayoutDashboard, Receipt, TrendingUp, BarChart } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { href: '/expenses', label: 'Expenses', icon: <Receipt size={18} /> },
  { href: '/income', label: 'Income', icon: <TrendingUp size={18} /> },
  { href: '/reports', label: 'Reports', icon: <BarChart size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <aside className="w-64 bg-white border-r px-6 py-4 flex flex-col justify-between min-h-screen">
      <nav className="space-y-1">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}
              `}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t pt-4 mt-6 flex items-center gap-3">
        {user && (
          <>
            <img
              src={user.profile_image || '/avatar.png'}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {user.first_name} {user.last_name}
              </p>
              <button
                onClick={logout}
                className="text-xs text-red-600 hover:underline"
              >
                Log out
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
