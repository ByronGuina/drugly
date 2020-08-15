import { RangeFn } from './RangeFn'

// mg/kg
const inductionDoseStart = 1.5
const inductionDoseEnd = 2.5

export const fn: RangeFn = weight => {
    const startDose = weight * inductionDoseStart
    const endDose = weight * inductionDoseEnd

    const startMg = isNaN(startDose) ? 0 : startDose
    const endMg = isNaN(endDose) ? 0 : endDose
    const startMl = isNaN(startDose) ? 0 : startDose / 10
    const endMl = isNaN(endDose) ? 0 : endDose / 10

    return {
        startMg,
        endMg,
        startMl,
        endMl,
    }
}

// induction dose = 1.5 - 2.5 mg/kg
// comes in 10 mg/ml
// 50kg patient

// output mgs
// output mls

// What inputs do you want?
// What outputs do you want?
