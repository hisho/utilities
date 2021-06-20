import {remType} from "./types";

// Converts a unit less $number to a rem.
export const rem: remType = (digits, root = 16) => {
  return `${digits / root}rem` as const;
};