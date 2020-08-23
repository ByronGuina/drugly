import { fn } from '../formulas/propofol'

test('propofol returns correct start concentration', () => {
    expect(fn(50).startMg).toBe(75)
})

test('propofol returns correct end concentration', () => {
    expect(fn(50).endMg).toBe(125)
})

test('propofol returns correct start dosage', () => {
    expect(fn(50).startMl).toBe(7.5)
})

test('propofol returns correct end dosage', () => {
    expect(fn(50).endMl).toBe(12.5)
})
