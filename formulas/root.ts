import { RangeFn } from './RangeFn'
// Map drug names to their formula function
// We may need a specific component for each drug if we
// want to have specific information about each one
import { fn as propafolFn } from './propafol'

export type Drugs = 'propafol'
export type DrugsMap = Record<Drugs, RangeFn>

export const formulas: DrugsMap = {
    propafol: propafolFn,
}
