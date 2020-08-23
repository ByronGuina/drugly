import { RangeFn } from './RangeFn'

// mg/kg
const inductionDoseStart = 1.0
const inductionDoseEnd = 1.5
const supplyConcentration = 20
const onset = '30 – 60'
const peak = '1'
const duration = '7 - 10'
const elimination = 'Plasma Cholinesterase'

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
