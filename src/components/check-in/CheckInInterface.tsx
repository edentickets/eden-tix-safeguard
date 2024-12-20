import { QRScanner } from './QRScanner';
import { CheckInStats } from './CheckInStats';

interface CheckInInterfaceProps {
  eventId: string;
}

export const CheckInInterface = ({ eventId }: CheckInInterfaceProps) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Event Check-in</h2>
      <CheckInStats eventId={eventId} />
      <QRScanner 
        eventId={eventId}
        onScanSuccess={() => {
          // Trigger a refresh of the stats
          window.location.reload();
        }}
      />
    </div>
  );
};