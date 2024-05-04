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

type TableValues = {
  value: string | number;
};

type TableRow = {
  values: TableValues[];
};

type DataTableProps = {
  title?: string;
  description?: string;
  header?: TableRow;
  rows?: TableRow[];
};

export const DataTable: React.FC<DataTableProps & { className?: string }> = ({
  title = "",
  description = "",
  header = {
    values: [],
  },
  rows = [],
  className = "",
}) => {
  if (rows.length === 0) {
    return null;
  }
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {header.values.map((value, index) => (
                <TableHead key={index}>{value.value}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, idx) => {
              return (
                <TableRow key={idx}>
                  {row.values.map((value, index) => (
                    <TableCell key={index}>{value.value}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
