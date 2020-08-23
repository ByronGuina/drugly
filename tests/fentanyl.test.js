import { fn } from '../formulas/fentanyl'

test('fentanyl returns correct start concentration', () => {
    expect(fn(50).startMg).toBe(100)
})

test('fentanyl returns correct end concentration', () => {
    expect(fn(50).endMg).toBe(1000)
})

test('fentanyl returns correct start dosage', () => {
    expect(fn(50).startMl).toBe(2)
})

test('fentanyl returns correct end dosage', () => {
    expect(fn(50).endMl).toBe(20.0)
})
