type RangeResultComplex = {
    startMg: number
    endMg: number
    startMl: number
    endMl: number
}
type RangeResultSimple = { mg: number; ml: number }
type Properties = { onset: string; peak: string; duration: string; elimination: string }

export type RangeFn = (weight: number) => (RangeResultComplex | RangeResultSimple) & Properties
