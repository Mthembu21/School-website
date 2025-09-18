import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase, User } from '../lib/supabase';

interface AuthContextType {
  user: SupabaseUser | null;
  userProfile: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      } else {
        setUserProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        // For demo purposes, create a mock user profile
        const mockProfile: User = {
          id: userId,
          email: 'demo@school.edu',
          role: 'student',
          name: 'Demo User',
          created_at: new Date().toISOString()
        };
        setUserProfile(mockProfile);
      } else {
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Fallback to mock profile for demo
      const mockProfile: User = {
        id: userId,
        email: 'demo@school.edu',
        role: 'student',
        name: 'Demo User',
        created_at: new Date().toISOString()
      };
      setUserProfile(mockProfile);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    // For demo purposes, handle mock authentication
    if (email === 'student@school.edu' && password === 'password123') {
      const mockUser = {
        id: 'mock-student-id',
        email: 'student@school.edu',
        aud: 'authenticated',
        role: 'authenticated',
        email_confirmed_at: new Date().toISOString(),
        phone: '',
        confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        app_metadata: {},
        user_metadata: {},
        identities: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      } as SupabaseUser;
      
      const mockProfile: User = {
        id: 'mock-student-id',
        email: 'student@school.edu',
        role: 'student',
        name: 'John Student',
        created_at: new Date().toISOString()
      };
      
      setUser(mockUser);
      setUserProfile(mockProfile);
      return;
    }
    
    if (email === 'parent@school.edu' && password === 'password123') {
      const mockUser = {
        id: 'mock-parent-id',
        email: 'parent@school.edu',
        aud: 'authenticated',
        role: 'authenticated',
        email_confirmed_at: new Date().toISOString(),
        phone: '',
        confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        app_metadata: {},
        user_metadata: {},
        identities: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      } as SupabaseUser;
      
      const mockProfile: User = {
        id: 'mock-parent-id',
        email: 'parent@school.edu',
        role: 'parent',
        name: 'Jane Parent',
        created_at: new Date().toISOString()
      };
      
      setUser(mockUser);
      setUserProfile(mockProfile);
      return;
    }
    
    if (email === 'teacher@school.edu' && password === 'password123') {
      const mockUser = {
        id: 'mock-teacher-id',
        email: 'teacher@school.edu',
        aud: 'authenticated',
        role: 'authenticated',
        email_confirmed_at: new Date().toISOString(),
        phone: '',
        confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        app_metadata: {},
        user_metadata: {},
        identities: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      } as SupabaseUser;
      
      const mockProfile: User = {
        id: 'mock-teacher-id',
        email: 'teacher@school.edu',
        role: 'teacher',
        name: 'Mr. Teacher',
        created_at: new Date().toISOString()
      };
      
      setUser(mockUser);
      setUserProfile(mockProfile);
      return;
    }

    // Try actual Supabase auth for other credentials
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    // Handle mock logout
    if (user?.id?.startsWith('mock-')) {
      setUser(null);
      setUserProfile(null);
      return;
    }
    
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value = {
    user,
    userProfile,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}