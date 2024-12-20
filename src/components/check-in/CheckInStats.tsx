import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';

interface CheckInStatsProps {
  eventId: string;
}

export const CheckInStats = ({ eventId }: CheckInStatsProps) => {
  const { data: stats } = useQuery({
    queryKey: ['check-in-stats', eventId],
    queryFn: async () => {
      const { data: tickets, error } = await supabase
        .from('tickets')
        .select('status, last_checked_in_at')
        .eq('event_id', eventId);

      if (error) throw error;

      const total = tickets.length;
      const checkedIn = tickets.filter(t => t.last_checked_in_at).length;

      return {
        total,
        checkedIn,
        remaining: total - checkedIn
      };
    },
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500">Total Tickets</h3>
        <p className="text-2xl font-bold">{stats?.total || 0}</p>
      </Card>
      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500">Checked In</h3>
        <p className="text-2xl font-bold text-green-600">{stats?.checkedIn || 0}</p>
      </Card>
      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500">Remaining</h3>
        <p className="text-2xl font-bold text-blue-600">{stats?.remaining || 0}</p>
      </Card>
    </div>
  );
};