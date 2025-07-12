export function sum(a, b) {
    return a + b
}

export function capitalise(string) {
    return string[0].toUpperCase() + string.slice(1)
}

export function reverseString(string) {
    let output = ''
    for (let i = string.length - 1; i >= 0; i--) {
        output += string[i]
    }
    return output
}

export let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

export function caesarCipher(string, shift) {
    let output = ''
    for (let i = 0; i < string.length; i++) {
        output += String.fromCodePoint(string.codePointAt(i) + shift)
    }
    return output
}