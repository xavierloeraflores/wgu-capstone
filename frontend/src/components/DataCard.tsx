import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DataCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const DataCard: React.FC<DataCardProps & { className?: string }> = ({
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
