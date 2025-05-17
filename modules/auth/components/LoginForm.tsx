'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '@/store';
import { login } from '@/store/authSlice';
import { loginUser } from '@/modules/auth/services';
import { LoginInput } from '@/modules/auth/types';

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState<LoginInput>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await loginUser(form);
      console.log("LoginForm - response completo:", response);
      console.log("LoginForm - response.user from API:", response.user);
      console.log("LoginForm - tipo de response.user:", typeof response.user);
      console.log("LoginForm - keys de response.user:", Object.keys(response.user));
      dispatch(login({ user: response.user, token: response.token }));
      // El token ya se guarda a través del middleware, no necesitamos hacerlo aquí
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="text-2xl font-bold text-black">Log in</h1>

        {error && (
          <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>

          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="text-center text-sm text-gray-600 pt-2">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
