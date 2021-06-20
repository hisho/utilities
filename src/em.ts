import {emType} from "./types";

// Converts a unit less $number to a em.
export const em: emType = ($number) => {
  return `${$number / 16}em` as const;
};