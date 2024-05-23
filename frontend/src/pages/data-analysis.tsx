import { DataCardRow } from "@/components/DataCardRow";
import { DataTable } from "@/components/DataTable";
import { DataBarChart } from "@/components/DataBarChart";
import { DataPieChart } from "@/components/DataPieChart";
import {
  tableHeader,
  tableRows,
  testData,
  dataDropdown,
  DataProportionChart,
  DataSizeChart,
  Dataset1ProportionChart,
  Dataset2ProportionChart,
  Dataset2DistributionChart,
  TotalDatasetProportionChart,
} from "@/lib/data-analysis";
import { DataHeader } from "@/components/DataHeader";

export default function DataAnalysis() {
  return (
    <>
      <DataHeader
        title="Unlock Insights into the training data used to train the model"
        headline="Explore the analysis of the training data or download any of the raw data files."
        dropdown={dataDropdown}
        image={{
          src: "/images/chart.png",
          alt: "Emoji icon representing data analysis with a bar chart",
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
    title: DataSizeChart.title,
    description: DataSizeChart.description,
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={DataSizeChart.chart.data}
        xAxisLabel={DataSizeChart.chart.xAxisLabel}
        yAxisLabel={DataSizeChart.chart.yAxisLabel}
        domain={DataSizeChart.chart.domain}
      />
    ),
  },
  {
    title: TotalDatasetProportionChart.title,
    description: TotalDatasetProportionChart.description,
    children: (
      <DataPieChart
        className="aspect-[4/3]"
        data={TotalDatasetProportionChart.chart.data}
      />
    ),
  },
  {
    title: DataProportionChart.title,
    description: DataProportionChart.description,
    children: (
      <DataPieChart
        className="aspect-[4/3]"
        data={DataProportionChart.chart.data}
      />
    ),
  },
  {
    title: Dataset1ProportionChart.title,
    description: Dataset1ProportionChart.description,
    children: (
      <DataPieChart
        className="aspect-[4/3]"
        data={Dataset1ProportionChart.chart.data}
      />
    ),
  },
  {
    title: Dataset2ProportionChart.title,
    description: Dataset2ProportionChart.description,
    children: (
      <DataPieChart
        className="aspect-[4/3]"
        data={Dataset2ProportionChart.chart.data}
      />
    ),
  },
  {
    title: Dataset2DistributionChart.title,
    description: Dataset2DistributionChart.description,
    children: (
      <DataBarChart
        className="aspect-[4/3]"
        data={Dataset2DistributionChart.chart.data}
        xAxisLabel={Dataset2DistributionChart.chart.xAxisLabel}
        yAxisLabel={Dataset2DistributionChart.chart.yAxisLabel}
        domain={Dataset2DistributionChart.chart.domain}
      />
    ),
  },
];
