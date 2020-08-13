import { RangeFn } from './RangeFn'
import { toMgMl, toMl } from './templates'

// mg/kg
const inductionDoseStart = 1.5
const inductionDoseEnd = 2.5

export const fn: RangeFn = weight => {
    const startDose = weight * inductionDoseStart
    const endDose = weight * inductionDoseEnd

    return {
        startMg: toMgMl(startDose),
        endMg: toMgMl(endDose),
        startMl: toMl(startDose / 10),
        endMl: toMl(endDose / 10),
    }
}

// induction dose = 1.5 - 2.5 mg/kg
// comes in 10 mg/ml
// 50kg patient

// output mgs
// output mls

// What inputs do you want?
// What outputs do you want?
