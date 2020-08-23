import { fn } from '../formulas/succinylcholine'

test('succinylcholine returns correct start concentration', () => {
    expect(fn(50).startMg).toBe(50)
})

test('succinylcholine returns correct end concentration', () => {
    expect(fn(50).endMg).toBe(75)
})

test('succinylcholine returns correct start dosage', () => {
    expect(fn(50).startMl).toBe(2.5)
})

test('succinylcholine returns correct end dosage', () => {
    expect(fn(50).endMl).toBe(3.75)
})
