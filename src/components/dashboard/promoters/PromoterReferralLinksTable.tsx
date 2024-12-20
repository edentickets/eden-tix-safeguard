import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { PromoterReferralLink } from "@/types/promoter";

interface PromoterReferralLinksTableProps {
  referralLinks?: PromoterReferralLink[];
}

export function PromoterReferralLinksTable({ referralLinks }: PromoterReferralLinksTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Event</TableHead>
          <TableHead>Referral Link</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {referralLinks?.map((link) => (
          <TableRow key={link.id}>
            <TableCell className="text-white">
              {link.event?.title}
            </TableCell>
            <TableCell className="text-white">
              {`${window.location.origin}/events/${link.event_id}?ref=${link.unique_code}`}
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/events/${link.event_id}?ref=${link.unique_code}`
                  );
                }}
              >
                <Link className="h-4 w-4" />
                <span className="sr-only">Copy link</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}