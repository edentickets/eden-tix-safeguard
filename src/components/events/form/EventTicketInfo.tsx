import { Input } from "@/components/ui/input";

interface EventTicketInfoProps {
  totalTickets: string;
  setTotalTickets: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
}

export const EventTicketInfo = ({
  totalTickets,
  setTotalTickets,
  price,
  setPrice,
}: EventTicketInfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="totalTickets" className="text-sm font-medium text-white">
          Total Tickets
        </label>
        <Input
          id="totalTickets"
          type="number"
          value={totalTickets}
          onChange={(e) => setTotalTickets(e.target.value)}
          required
          min="1"
          placeholder="Number of tickets"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="price" className="text-sm font-medium text-white">
          Price per Ticket ($)
        </label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          min="0"
          step="0.01"
          placeholder="Ticket price"
        />
      </div>
    </div>
  );
};