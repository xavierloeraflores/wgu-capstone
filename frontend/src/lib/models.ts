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
      { value: 0.95 },
    ],
  },
  {
    values: [
      { value: "Model 2" },
      { value: "Logistic Regression" },
      { value: "95% of Dataset 1 & 2" },
      { value: "Snowball Stemmer, Stopwords" },
      { value: 0.95 },
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
      { value: 0.94 },
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
export const modelsDropdown = {
  menuTrigger: "Download Models",
  menuLabel: "Models",
  menuItems: downloadItems,
};
