// src/modules/auth/services.ts
import { fetcher } from '@/lib/fetcher';
import { LoginInput, LoginResponse, User } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginUser(payload: LoginInput) {
  return fetcher<LoginResponse>(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function getProfile(token: string): Promise<User> {
  const response = await fetcher<{ user: User }>(`${BASE_URL}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.user;
}