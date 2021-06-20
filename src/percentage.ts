import {percentageType} from "./types";

// Converts a unit less $number (usually a decimal between 0 and 1) to a percentage.
export const percentage: percentageType = ($number) => {
  return `${Number(($number * 100).toFixed(4))}%` as const;
};
