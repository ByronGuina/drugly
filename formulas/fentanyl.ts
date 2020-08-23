import { RangeFn } from './RangeFn'

// mg/kg
const inductionDoseStart = 2.0
const inductionDoseEnd = 20
const supplyConcentration = 50
const onset = '120 - 240'
const peak = '5 - 10'
const duration = '30 - 60'
const elimination = 'Hepatic/Renal'

export const fn: RangeFn = weight => {
    const startDose = weight * inductionDoseStart
    const endDose = weight * inductionDoseEnd

    const startMg = isNaN(startDose) ? 0 : startDose
    const endMg = isNaN(endDose) ? 0 : endDose
    const startMl = isNaN(startDose) ? 0 : startDose / supplyConcentration
    const endMl = isNaN(endDose) ? 0 : endDose / supplyConcentration

    return {
        startMg,
        endMg,
        startMl,
        endMl,
        onset,
        peak,
        duration,
        elimination,
    }
}

// induction dose = 1.5 - 2.5 mg/kg
// comes in 10 mg/ml
// 50kg patient

// output mgs
// output mls

// What inputs do you want?
// What outputs do you want?
