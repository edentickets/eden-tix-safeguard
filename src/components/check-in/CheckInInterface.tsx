import { useParams } from 'react-router-dom';
import { QRScanner } from './QRScanner';
import { CheckInStats } from './CheckInStats';

export const CheckInInterface = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Error: Event ID not found</h2>
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
          // Trigger a refresh of the stats
          window.location.reload();
        }}
      />
    </div>
  );
};