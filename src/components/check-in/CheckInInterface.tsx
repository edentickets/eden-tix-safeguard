import { useParams } from 'react-router-dom';
import { QRScanner } from './QRScanner';
import { CheckInStats } from './CheckInStats';
import { ErrorMessage } from '@/components/ui/error-message';

export const CheckInInterface = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <ErrorMessage 
          title="Error" 
          message="Event ID not found" 
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Event Check-in</h2>
      <CheckInStats eventId={id} />
      <QRScanner 
        eventId={id}
        onScanSuccess={() => {
          // Instead of reloading the page, we can rely on the refetchInterval
          // in CheckInStats to update the data automatically
        }}
      />
    </div>
  );
};