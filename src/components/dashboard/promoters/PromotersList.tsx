import { Promoter } from "@/types/promoter";
import { PromoterCard } from "./PromoterCard";

interface PromotersListProps {
  promoters: Promoter[];
  isLoading?: boolean;
}

export function PromotersList({ promoters, isLoading }: PromotersListProps) {
  if (isLoading) {
    return <div>Loading promoters...</div>;
  }

  return (
    <div className="space-y-4">
      {promoters.map((promoter, index) => (
        <PromoterCard key={promoter.id} promoter={promoter} index={index} />
      ))}
    </div>
  );
}