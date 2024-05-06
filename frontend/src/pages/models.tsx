import { DataCardRow } from "@/components/DataCardRow";
import { DataTable } from "@/components/DataTable";
import { DataBarChart } from "@/components/DataBarChart";
import { tableHeader, tableRows, testData, modelsDropdown } from "@/lib/models";
import { DataHeader } from "@/components/DataHeader";

export default function DataAnalysis() {
  return (
    <>
      <DataHeader
        title="Learn more about the models and their performance."
        headline="Explore the analysis of the different models or download model pickle files."
        dropdown={modelsDropdown}
        image={{
          src: "/images/robot.png",
          alt: "Emoji icon representing machine learning with a robot face",
        }}
      />
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
