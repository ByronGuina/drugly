import { RangeFn } from './RangeFn'

// mg/kg
const startDose = 0.6
const onset = '120 - 180'
const peak = '1 - 3'
const duration = '30 - 60'
const elimination = '70% Biliary/30% Renal'

export const fn: RangeFn = weight => {
    const drugWeight = weight * startDose

    const concentration = isNaN(drugWeight) ? 0 : drugWeight
    const dosage = isNaN(drugWeight) ? 0 : drugWeight / 10

    return {
        mg: concentration,
        ml: dosage,
        onset,
        peak,
        duration,
        elimination,
    }
}
