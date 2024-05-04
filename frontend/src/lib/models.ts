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
