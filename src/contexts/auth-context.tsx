import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  is_creator: boolean;
  creator_bio: string | null;
  creator_tagline: string | null;
  social_links: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  } | null;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  error: Error | null;
  becomeCreator: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  profile: null,
  isLoading: true,
  error: null,
  becomeCreator: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { session, isLoading: isSessionLoading } = useSessionContext();
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  const { data: profile, isLoading: isProfileLoading, refetch: refetchProfile } = useQuery({
    queryKey: ['profile', session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (error) throw error;
      return data as Profile;
    },
    enabled: !!session?.user?.id,
  });

  const becomeCreator = async () => {
    if (!session?.user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to become a creator",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('profiles')
      .update({ is_creator: true })
      .eq('id', session.user.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update creator status",
        variant: "destructive",
      });
      return;
    }

    await refetchProfile();
    
    toast({
      title: "Success",
      description: "You are now a creator!",
    });
  };

  return (
    <AuthContext.Provider value={{
      session,
      user: session?.user ?? null,
      profile,
      isLoading: isSessionLoading || isProfileLoading,
      error,
      becomeCreator,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};