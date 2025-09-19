// types.ts (or at top of the file containing `project`)
export type Metric = {
  num: string;
  title: string;
  description: string;
};

export type ResultMetrics = {
  first: Metric;
  second: Metric;
  third: Metric;
  color: string;
};

/**
 * The results array in your data contains either:
 * - a metrics object (first/second/third) OR
 * - an object with a color (e.g. { color: "bg[#...]" })
 */
export type Result = ResultMetrics;

/**
 * Each item in `process` is a small object whose keys vary between projects
 * (e.g. { d1, d2 }, { cleaning }, { tool_stack1 }, { visualization }, ...).
 * Use a string-to-string map to match the current dataset.
 */
export type ProcessItem = Record<string, string>;

export type TakeAways = {
  f1: string;
  f2: string;
  f3: string;
  f4: string;
};

export type Project = {
  id: string;
  img: string | null;
  slug: string;
  color: string;
  title: string;
  description: string;
  tools: string;
  year: string;
  role: string;
  project_overview: string;

  // variable-length list of keyed step objects
  process: ProcessItem[];

  // mixed array: metrics object(s) and optional color objects
  results: Result[];

  // fixed structure per your data
  take_aways: TakeAways;
};
