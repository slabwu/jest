import { sum, capitalise } from './sum.js'

test('Sum', () => 
    expect(sum(1, 2)).toBe(3)
)

test('Capitalise', () => 
    expect(capitalise('string')).toBe('String')
)