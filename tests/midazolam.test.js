import { fn } from '../formulas/midazolam'

test('midazolam returns correct start concentration', () => {
    expect(fn(50).startMg).toBe(2.5)
})

test('midazolam returns correct end concentration', () => {
    expect(fn(50).endMg).toBe(7.5)
})

test('midazolam returns correct start dosage', () => {
    expect(fn(50).startMl).toBe(2.5)
})

test('midazolam returns correct end dosage', () => {
    expect(fn(50).endMl).toBe(7.5)
})
