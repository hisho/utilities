type UnitSuffix = "em" | "rem" | "%";
type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;

export type emType = (digits: number) => Unit<'em'>;
export type percentageType = (digits: number) => Unit<'%'>;
export type remType = (digits: number, root?: number) => Unit<'rem'>;