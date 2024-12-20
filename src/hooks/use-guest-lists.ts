import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { GuestList } from "@/types/guest-list";

export const useGuestLists = (promoterId?: string) => {
  return useQuery({
    queryKey: ["guest-lists", promoterId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("guest_lists")
        .select(`
          *,
          entries:guest_list_entries(*)
        `)
        .eq("promoter_id", promoterId);

      if (error) throw error;
      return data as GuestList[];
    },
    enabled: !!promoterId,
  });
};