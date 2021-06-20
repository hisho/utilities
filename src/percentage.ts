import {percentageType} from "./types";

function orgRound(value: number, base: number = 1000) {
  return Math.round(value * base) / base;
}

// Converts a unit less $number (usually a decimal between 0 and 1) to a percentage.
export const percentage: percentageType = ($number) => {
  return `${(orgRound($number) * 100)}%` as const;
};
