import { fn } from '../formulas/vecuronium'

test('vecuronium returns correct start concentration', () => {
    expect(fn(50).startMg).toBe(5)
})

test('vecuronium returns correct end concentration', () => {
    expect(fn(50).endMg).toBe(10)
})

test('vecuronium returns correct start dosage', () => {
    expect(fn(50).startMl).toBe(5)
})

test('vecuronium returns correct end dosage', () => {
    expect(fn(50).endMl).toBe(10)
})
