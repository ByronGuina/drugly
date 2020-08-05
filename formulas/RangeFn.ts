type RangeResultComplex = { startMg: string; endMg: string; startMl: string; endMl: string }
type RangeResultSimple = { mg: string; ml: string }
export type RangeFn = (weight: number) => RangeResultComplex | RangeResultSimple
