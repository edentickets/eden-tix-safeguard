import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usePromoterSales } from "@/hooks/use-promoter-sales";
import { formatCurrency } from "@/utils/format-utils";
import { DollarSign, Calendar } from "lucide-react";
import { format } from "date-fns";

export function CommissionTrackingTab({ promoterId }: { promoterId?: string }) {
  const { data: sales, isLoading } = usePromoterSales(promoterId);

  if (isLoading) {
    return <div>Loading sales data...</div>;
  }

  if (!sales?.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No commission data available yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Commission Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {format(new Date(sale.created_at), "MMM d, yyyy")}
              </TableCell>
              <TableCell>{sale.ticket_id}</TableCell>
              <TableCell className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {formatCurrency(sale.commission_amount)}
              </TableCell>
              <TableCell>
                {sale.paid_at ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                  <span className="text-yellow-500">Pending</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}