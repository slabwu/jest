import { sum, capitalise, reverseString, calculator } from './sum.js'

test('Sum', () => 
    expect(sum(1, 2)).toBe(3)
)

test('Capitalise', () => 
    expect(capitalise('string')).toBe('String')
)

test('Reverse string', () =>
    expect(reverseString('string')).toBe('gnirts')
)

test('Calculator', () => {
    expect(calculator.add(6, 2)).toBe(8)
    expect(calculator.subtract(6, 2)).toBe(4)
    expect(calculator.divide(6, 2)).toBe(3)
    expect(calculator.multiply(6, 2)).toBe(12)
})