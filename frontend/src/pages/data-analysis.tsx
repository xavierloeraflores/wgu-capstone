import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Image from "next/image";

export default function DataAnalysis() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock Insights into the training data used to train the model
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Explore the analysis of the training data or download any of the
                raw data files.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a className={buttonVariants({ variant: "default" })} href="#">
                  Download Files
                </a>
              </div>
            </div>
            <Image
              alt="Image representing the model"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              width="550"
              src="/smiley.png"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <CardRow>
            <DataCard
              title="Model Accuracy"
              description="The overall accuracy of the machine learning model."
            >
              <BarChart className="aspect-[4/3]" />
            </DataCard>
            <DataCard
              title="Feature Importance"
              description="The relative importance of each feature in the model."
            >
              <BarChart className="aspect-[4/3]" />
            </DataCard>
            <DataCard
              title="Prediction Distribution"
              description="The distribution of predictions for the model."
            >
              <BarChart className="aspect-[4/3]" />
            </DataCard>
          </CardRow>
          <DataTable />
        </div>
      </section>
    </>
  );
}

const DataTable: React.FC<{ className?: string }> = ({ className = "" }) => {
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

type DataCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const CardRow: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
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

const DataCard: React.FC<DataCardProps & { className?: string }> = ({
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

const BarChart: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <div className={cn("", className)}></div>;
};
