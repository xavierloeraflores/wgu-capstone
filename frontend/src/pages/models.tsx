import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DataCardRow } from "@/components/DataCardRow";
import { DataTable } from "@/components/DataTable";
import Image from "next/image";
import { DataBarChart } from "@/components/DataBarChart";
import { tableHeader, tableRows, testData } from "@/lib/models";

export default function DataAnalysis() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Learn more about the models and their performance.
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Explore the analysis of the different models or download model
                pickle files.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  className={buttonVariants({ variant: "default" })}
                  href="/model/model-v1.pkl"
                  download={true}
                >
                  Download Model v1
                </a>
                <a
                  className={buttonVariants({ variant: "default" })}
                  href="/model/model-v2.pkl"
                  download={true}
                >
                  Download Model v2
                </a>
                <a
                  className={buttonVariants({ variant: "default" })}
                  href="/model/model-v3.pkl"
                  download={true}
                >
                  Download Model v3
                </a>
              </div>
            </div>
            <Image
              alt="Emoji icon representing machine learning with a robot face"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="150"
              width="150"
              src="/smiley.png"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <DataCardRow cards={dataCards}></DataCardRow>
          <DataTable
            title="Model Training Methods"
            description="The different methods used to train each machine learning model"
            header={tableHeader}
            rows={tableRows}
          />
        </div>
      </section>
    </>
  );
}

const dataCards = [
  {
    title: "Model Accuracy",
    description: "The overall accuracy of the machine learning model.",
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={testData}
        xAxisLabel="Model"
        yAxisLabel="Value"
      />
    ),
  },
  {
    title: "Feature Importance",
    description: "The relative importance of each feature in the model.",
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={testData}
        xAxisLabel="Model"
        yAxisLabel="Value"
      />
    ),
  },
  {
    title: "Prediction Distribution",
    description: "The distribution of predictions for the model.",
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={testData}
        xAxisLabel="Model"
        yAxisLabel="Value"
      />
    ),
  },
  {
    title: "Prediction Distribution",
    description: "The distribution of predictions for the model.",
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={testData}
        xAxisLabel="Model"
        yAxisLabel="Value"
      />
    ),
  },
  {
    title: "Prediction Distribution",
    description: "The distribution of predictions for the model.",
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={testData}
        xAxisLabel="Model"
        yAxisLabel="Value"
      />
    ),
  },
];
