import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useEvents = (filters?: { 
  creatorId?: string;
  upcoming?: boolean;
}) => {
  return useQuery({
    queryKey: ['events', filters],
    queryFn: async () => {
      let query = supabase
        .from('events')
        .select(`
          *,
          creator:profiles(*)
        `);

      if (filters?.creatorId) {
        query = query.eq('creator_id', filters.creatorId);
      }

      if (filters?.upcoming) {
        query = query.gte('start_date', new Date().toISOString());
      }

      const { data, error } = await query
        .order('start_date', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
};

export const useEvent = (id?: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      if (!id) throw new Error('Event ID is required');
      
      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          creator:profiles(*)
        `)
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      if (!data) throw new Error('Event not found');
      return data;
    },
    enabled: !!id,
  });
};