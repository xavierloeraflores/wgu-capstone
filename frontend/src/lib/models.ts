export const tableHeader = {
  values: [
    { value: "Model" },
    { value: "Training Method" },
    { value: "Datasets" },
    { value: "Cleaning" },
    { value: "Accuracy (On Test Dataset)" },
  ],
};

export const tableRows = [
  {
    values: [
      { value: "Model 1" },
      { value: "Logistic Regression" },
      { value: "80% of Dataset 1" },
      { value: "Snowball Stemmer, Stopwords" },
      { value: 0.9497888315344909 },
    ],
  },
  {
    values: [
      { value: "Model 2" },
      { value: "Logistic Regression" },
      { value: "95% of Dataset 1 & 2" },
      { value: "Snowball Stemmer, Stopwords" },
      { value: 0.9422128259337562 },
    ],
  },
  {
    values: [
      { value: "Model 3" },
      { value: "Logistic Regression" },
      { value: "80% of Dataset 1 & 2" },
      {
        value:
          "Snowball Stemmer, Stopwords, Punctation, Symbols, Emojis, Markup",
      },
      { value: 0.9383368569415081 },
    ],
  },
];
const bar1 = { label: "Label 1", value: 10 };
const bar2 = { label: "Label 2", value: 20 };
const bar3 = { label: "Label 3", value: 5 };
export const testData = [bar1, bar2, bar3];

const downloadItems = [
  {
    name: "Model 1",
    href: "/model/model-v1.pkl",
  },
  {
    name: "Model 2",
    href: "/model/model-v2.pkl",
  },
  {
    name: "Model 3",
    href: "/model/model-v3.pkl",
  },
];

export const AccuracyChart = {
  title: "Model Accuracy",
  description: "The overall accuracy of the machine learning model.",
  type: "bar",
  chart: {
    data: [
      { label: "Model 1", value: 0.9497888315344909 },
      { label: "Model 2", value: 0.9422128259337562 },
      { label: "Model 3", value: 0.9383368569415081 },
    ],
    xAxisLabel: "Model",
    yAxisLabel: "Accuracy",
    domain: [0.93, "auto"] as [number | string, number | string],
  },
};

export const SpeedChart = {
  title: "Model Speed",
  description: "Time(s) to completely predict the test dataset 10,000 times.",
  type: "bar",
  chart: {
    data: [
      { label: "Model 1", value: 0.7006411552429199 },
      { label: "Model 2", value: 0.6921260356903076 },
      { label: "Model 3", value: 4.4583580493927 },
    ],
    xAxisLabel: "Model",
    yAxisLabel: "Seconds",
    domain: [0.5, "auto"] as [number | string, number | string],
  },
};

// Number of iterations 1: [27]
// Number of iterations 2: [18]
// Number of iterations 3: [16]
export const IterationsChart = {
  title: "Model Iterations",
  description:
    "The number of iterations required to train each machine learning model.",
  type: "bar",
  chart: {
    data: [
      { label: "Model 1", value: 27 },
      { label: "Model 2", value: 18 },
      { label: "Model 3", value: 16 },
    ],
    xAxisLabel: "Model",
    yAxisLabel: "Iterations",
    domain: [0, "auto"] as [number | string, number | string],
  },
};

export const charts = [AccuracyChart, SpeedChart, IterationsChart];
export const modelsDropdown = {
  menuTrigger: "Download Models",
  menuLabel: "Models",
  menuItems: downloadItems,
};
