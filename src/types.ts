type UnitSuffix = "em" | "rem" | "%";
type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;

export type emType = ($number: number) => Unit<'em'>;
export type percentageType = ($number: number) => Unit<'%'>;
export type remType = ($number: number, root?: number) => Unit<'rem'>;