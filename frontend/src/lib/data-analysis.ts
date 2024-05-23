export const tableHeader = {
  values: [
    { value: "Model" },
    { value: "Training Method" },
    { value: "Accuracy" },
    { value: "Precision" },
    { value: "Recall" },
  ],
};

export const tableRows = [
  {
    values: [
      { value: "Model 1" },
      { value: "Random Forest" },
      { value: 0.9 },
      { value: 0.8 },
      { value: 0.9 },
    ],
  },
  {
    values: [
      { value: "Model 2" },
      { value: "Logistic Regression" },
      { value: 0.8 },
      { value: 0.7 },
      { value: 0.8 },
    ],
  },
  {
    values: [
      { value: "Model 3" },
      { value: "SVM" },
      { value: 0.85 },
      { value: 0.75 },
      { value: 0.85 },
    ],
  },
];
const bar1 = { label: "Label 1", value: 10 };
const bar2 = { label: "Label 2", value: 20 };
const bar3 = { label: "Label 3", value: 5 };
export const testData = [bar1, bar2, bar3];

const downloadItems = [
  {
    name: "Training 1 Dataset",
    href: "/data/train.csv",
  },
  {
    name: "Training 2 Dataset",
    href: "/data/labeled_data.csv",
  },
  {
    name: "Testing Dataset",
    href: "/data/test.csv",
  },
];
export const dataDropdown = {
  menuTrigger: "Download Datasets",
  menuLabel: "Datasets",
  menuItems: downloadItems,
};
export const DataSizeChart = {
  title: "Data Size",
  description:
    "The size of the datasets used for training and testing the models.",
  type: "bar",
  chart: {
    data: [
      { label: "Training 1", value: 31962 },
      { label: "Training 2", value: 24783 },
      { label: "Testing", value: 17197 },
    ],
    xAxisLabel: "Dataset",
    yAxisLabel: "Size",
    domain: [0, "auto"] as [number | string, number | string],
  },
};
// Training Data 1 Offensive Count: 2242
// Training Data 1 Clean Count: 29720

export const Dataset1ProportionChart = {
  title: "Dataset 1 Proportion",
  description:
    "The proportion of offensive and clean data in the training set.",
  type: "pie",
  chart: {
    data: [
      { label: "Offensive", value: 2242 },
      { label: "Clean", value: 29720 },
    ],
  },
};

// Training Data 2 Hate Speech Count:1430
// Training Data 2 Offensive Language Count: 19190
// Training Data 2 Clean Count: 4163

export const Dataset2DistributionChart = {
  title: "Dataset 2 Proportion",
  description:
    "The proportion of hate speech, offensive language, and clean data in the training set.",
  type: "bar",
  chart: {
    data: [
      { label: "Hate Speech", value: 1430 },
      { label: "Offensive", value: 19190 },
      { label: "Clean", value: 4163 },
    ],
    xAxisLabel: "Label",
    yAxisLabel: "Size",
    domain: [0, "auto"] as [number | string, number | string],
  },
};

// Training Data 2 Offensive Language Count: 19190 + 1430 = 20620
// Training Data 2 Clean Count: 4163

export const Dataset2ProportionChart = {
  title: "Dataset 2 Proportion",
  description:
    "The proportion of offensive language and clean data in the training set.",
  type: "pie",
  chart: {
    data: [
      { label: "Offensive", value: 20620 },
      { label: "Clean", value: 4163 },
    ],
  },
};
export const TotalDatasetProportionChart = {
  title: "Total Dataset Proportion",
  description:
    "The proportion of offensive language and clean data combined in both training sets.",
  type: "pie",
  chart: {
    data: [
      { label: "Offensive", value: 20620 + 2242 },
      { label: "Clean", value: 4163 + 29720 },
    ],
  },
};

export const DataProportionChart = {
  title: "Data Size",
  description:
    "The size of the datasets used for training and testing the models.",
  type: "pie",
  chart: {
    data: [
      { label: "Training Dataset 1", value: 31962 },
      { label: "Training Dataset 2", value: 24783 },
      { label: "Testing Dataset", value: 17197 },
    ],
  },
};

export const charts = [
  DataSizeChart,
  DataProportionChart,
  Dataset1ProportionChart,
  Dataset2ProportionChart,
  Dataset2DistributionChart,
];
