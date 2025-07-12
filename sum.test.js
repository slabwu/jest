import { sum, capitalise, reverseString, calculator, caesarCipher, analyseArray } from './sum.js'

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

test('Caesar Cipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    expect(caesarCipher('gOOdbYe', 3)).toBe('jRRgeBh')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('Analyse Array', () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})