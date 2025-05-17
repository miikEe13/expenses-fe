'use client';

import { useAuth } from '@/modules/auth/hooks/useAuth';
import LogoutButton from '@/modules/auth/components/LogoutButton';

export default function Welcome() {
    const { user, isLoading } = useAuth();
    
    // Ya no necesitamos logs de depuración

    if (isLoading) {
        return <p className="text-gray-500">Loading session...</p>;
    }

    if (!user) {
        return <p className="text-red-500">No session found</p>;
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome, {user?.first_name || 'User'} {user?.last_name || ''}
                </h1>
                <LogoutButton />
            </div>
            <p className="text-gray-600">Here is your financial overview.</p>
        </div>
    );
}
