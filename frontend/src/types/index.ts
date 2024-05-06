export interface PostInput {
  text: string;
}

export type Post = PostInput & {
  id: number;
  isNSFW: boolean;
  tags: string[];
  date: string;
};

export type BarChartDataPoint = {
  label: string;
  value: number;
};

export type PieChartDataPoint = {
  label: string;
  value: number;
};
