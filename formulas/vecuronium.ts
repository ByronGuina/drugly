import { RangeFn } from './RangeFn'

// mg/kg
const inductionDoseStart = 0.1
const inductionDoseEnd = 0.2
const supplyConcentration = 1
const onset = '120 - 240'
const peak = '3 - 5'
const duration = '30 - 60'
const elimination = '80% Biliary/20% Renal'

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
