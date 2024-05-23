import { DataCardRow } from "@/components/DataCardRow";
import { DataTable } from "@/components/DataTable";
import { DataBarChart } from "@/components/DataBarChart";
import { DataPieChart } from "@/components/DataPieChart";
import {
  tableHeader,
  tableRows,
  testData,
  modelsDropdown,
  charts,
  AccuracyChart,
  SpeedChart,
  IterationsChart,
} from "@/lib/models";
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
    title: AccuracyChart.title,
    description: AccuracyChart.description,
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={AccuracyChart.chart.data}
        xAxisLabel={AccuracyChart.chart.xAxisLabel}
        yAxisLabel={AccuracyChart.chart.yAxisLabel}
        domain={AccuracyChart.chart.domain}
      />
    ),
  },
  {
    title: SpeedChart.title,
    description: SpeedChart.description,
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={SpeedChart.chart.data}
        xAxisLabel={SpeedChart.chart.xAxisLabel}
        yAxisLabel={SpeedChart.chart.yAxisLabel}
        domain={SpeedChart.chart.domain}
      />
    ),
  },
  {
    title: IterationsChart.title,
    description: IterationsChart.description,
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={IterationsChart.chart.data}
        xAxisLabel={IterationsChart.chart.xAxisLabel}
        yAxisLabel={IterationsChart.chart.yAxisLabel}
        domain={IterationsChart.chart.domain}
      />
    ),
  },
];
