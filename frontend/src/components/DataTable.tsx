import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

export const DataTable: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Model Performance Metrics</CardTitle>
        <CardDescription>
          Key performance metrics for the machine learning model.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Accuracy</TableCell>
              <TableCell className="text-right">0.92</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precision</TableCell>
              <TableCell className="text-right">0.88</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Recall</TableCell>
              <TableCell className="text-right">0.91</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>F1-Score</TableCell>
              <TableCell className="text-right">0.89</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
