import { fn } from '../formulas/propofol'

test('propofol returns correct start mg/ml', () => {
    expect(fn(50).startMg).toBe('75 mg/ml')
})

test('propofol returns correct end mg/ml', () => {
    expect(fn(50).endMg).toBe('125 mg/ml')
})

test('propofol returns correct start dosage', () => {
    expect(fn(50).startMl).toBe('7.5 ml')
})

test('propofol returns correct end dosage', () => {
    expect(fn(50).endMl).toBe('12.5 ml')
})
