import { cn } from "@/lib/utils";
import { DataCard, type DataCardProps } from "./DataCard";

type DataCardRowProps = {
  cards?: DataCardProps[];
};
export const DataCardRow: React.FC<
  DataCardRowProps & {
    className?: string;
  }
> = ({ cards = [], className }) => {
  if (cards.length === 0) {
    return null;
  }
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {cards.map((card, idx) => (
        <DataCard key={idx} {...card} />
      ))}
    </div>
  );
};
