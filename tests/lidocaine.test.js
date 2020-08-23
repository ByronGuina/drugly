import { fn } from '../formulas/lidocaine'

test('lidocaine returns correct concentration', () => {
    expect(fn(50).mg).toBe(50)
})

test('lidocaine returns correct dosage', () => {
    expect(fn(50).ml).toBe(2.5)
})
