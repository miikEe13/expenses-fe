// src/modules/auth/types.ts

export interface LoginInput {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  profile_image?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}