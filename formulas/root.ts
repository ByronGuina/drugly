import { RangeFn } from './RangeFn'
// Map drug names to their formula function
// We may need a specific component for each drug if we
// want to have specific information about each one
import { fn as propofolFn } from './propofol'
import { fn as midazolamFn } from './midazolam'
import { fn as lidocaineFn } from './lidocaine'
import { fn as succynFn } from './succinylcholine'
import { fn as rocuroniumFn } from './rocuronium'
import { fn as vecuroniumFn } from './vecuronium'
import { fn as fentanylFn } from './fentanyl'

export type Drugs =
    | 'propofol'
    | 'midazolam'
    | 'fentanyl'
    | 'lidocaine'
    | 'succinylcholine'
    | 'rocuronium'
    | 'vecuronium'
export type DrugsMap = Record<Drugs, RangeFn>

export const formulas: DrugsMap = {
    propofol: propofolFn,
    midazolam: midazolamFn,
    lidocaine: lidocaineFn,
    succinylcholine: succynFn,
    rocuronium: rocuroniumFn,
    vecuronium: vecuroniumFn,
    fentanyl: fentanylFn,
}

export const allDrugs = Object.keys(formulas).sort()
