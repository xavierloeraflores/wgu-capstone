import { cn } from "@/lib/utils";

export const CardRow: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};
