import {emType} from "./types";

// Converts a unit less $number to a em.
export const em: emType = (digits) => {
  return `${digits / 16}em` as const;
};