import {remType} from "./types";

// Converts a unit less $number to a rem.
export const rem: remType = ($number, root = 16) => {
  return `${$number / root}rem` as const;
};