import { RangeFn } from './RangeFn'

// mg/kg
const inductionDoseStart = 0.05
const inductionDoseEnd = 0.15
const onset = '30 - 120'
const peak = '3 - 5'
const duration = '15 - 80'
const elimination = 'Hepatic'

export const fn: RangeFn = weight => {
    const startDose = weight * inductionDoseStart
    const endDose = weight * inductionDoseEnd

    const startMg = isNaN(startDose) ? 0 : startDose
    const endMg = isNaN(endDose) ? 0 : endDose
    const startMl = isNaN(startDose) ? 0 : startDose
    const endMl = isNaN(endDose) ? 0 : endDose

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
