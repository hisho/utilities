import {remType} from "./types";

// Converts a unit less $number to a rem.
export const rem: remType = ($number) => {
  return `${$number / 16}rem` as const;
};