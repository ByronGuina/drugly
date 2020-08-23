import { RangeFn } from './RangeFn'

// mg/kg
const startDose = 1.0
const onset = '45 - 90'
const peak = '2 - 5'
const duration = '15 - 80'
const elimination = 'Liver p450'

export const fn: RangeFn = weight => {
    const drugWeight = weight * startDose

    const concentration = isNaN(drugWeight) ? 0 : drugWeight
    const dosage = isNaN(drugWeight) ? 0 : drugWeight / 20

    return {
        mg: concentration,
        ml: dosage,
        onset,
        peak,
        duration,
        elimination,
    }
}
