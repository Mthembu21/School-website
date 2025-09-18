import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a mock supabase client for demo purposes
const createMockSupabase = (): SupabaseClient => {
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
      signOut: async () => ({ error: null }),
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null }),
        }),
        in: () => ({
          order: () => ({
            limit: async () => ({ data: [], error: null }),
          }),
        }),
        order: () => ({
          limit: async () => ({ data: [], error: null }),
        }),
      }),
      insert: () => ({
        select: () => ({
          single: async () => ({ data: null, error: null }),
        }),
      }),
    }),
  } as any;
};

export const supabase = createMockSupabase();

// Database types
export interface User {
  id: string;
  email: string;
  role: 'student' | 'parent' | 'teacher' | 'admin';
  name: string;
  phone?: string;
  created_at: string;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  parent_ids: string[];
  user_id?: string;
  created_at: string;
}

export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  user_id?: string;
  bio?: string;
  photo_url?: string;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  target_audience: 'public' | 'students' | 'parents' | 'teachers' | 'all';
  created_at: string;
  author: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface AdmissionInquiry {
  id: string;
  student_name: string;
  parent_name: string;
  email: string;
  phone?: string;
  grade: string;
  previous_school?: string;
  message?: string;
  created_at: string;
}
