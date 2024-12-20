import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Users, UserCheck, UserMinus } from 'lucide-react';
import { ErrorMessage } from '@/components/ui/error-message';

interface CheckInStatsProps {
  eventId: string;
}

export const CheckInStats = ({ eventId }: CheckInStatsProps) => {
  const { data: stats, error, isLoading } = useQuery({
    queryKey: ['check-in-stats', eventId],
    queryFn: async () => {
      if (!eventId) throw new Error('Event ID is required');

      // Log the eventId to verify it's being passed correctly
      console.log('Fetching tickets for event:', eventId);

      const { data: tickets, error } = await supabase
        .from('tickets')
        .select('status, last_checked_in_at')
        .eq('event_id', eventId);

      if (error) {
        console.error('Error fetching tickets:', error);
        throw error;
      }

      if (!tickets) return { total: 0, checkedIn: 0, remaining: 0 };

      const total = tickets.length;
      const checkedIn = tickets.filter(t => t.last_checked_in_at).length;

      return {
        total,
        checkedIn,
        remaining: total - checkedIn
      };
    },
    enabled: Boolean(eventId),
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  if (error) {
    return <ErrorMessage message="Failed to load check-in stats" />;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4 mb-6 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-4 bg-eden-dark/50 border-eden-accent/20">
            <div className="h-16 bg-gray-700/50 rounded" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <Card className="p-4 bg-eden-dark/50 border-eden-accent/20">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-eden-accent" />
          <div>
            <h3 className="text-sm font-medium text-gray-400">Total</h3>
            <p className="text-2xl font-bold">{stats?.total || 0}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4 bg-eden-dark/50 border-eden-accent/20">
        <div className="flex items-center gap-3">
          <UserCheck className="w-5 h-5 text-green-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-400">Checked In</h3>
            <p className="text-2xl font-bold text-green-500">{stats?.checkedIn || 0}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-4 bg-eden-dark/50 border-eden-accent/20">
        <div className="flex items-center gap-3">
          <UserMinus className="w-5 h-5 text-blue-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-400">Remaining</h3>
            <p className="text-2xl font-bold text-blue-500">{stats?.remaining || 0}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};