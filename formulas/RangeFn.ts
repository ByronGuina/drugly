type RangeResultComplex = { startMg: number; endMg: number; startMl: number; endMl: number }
type RangeResultSimple = { mg: number; ml: number }
export type RangeFn = (weight: number) => RangeResultComplex | RangeResultSimple
