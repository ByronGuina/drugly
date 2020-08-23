import { fn } from '../formulas/rocuronium'

test('rocuronium returns correct concentration', () => {
    expect(fn(50).mg).toBe(30)
})

test('rocuronium returns correct dosage', () => {
    expect(fn(50).ml).toBe(3)
})
