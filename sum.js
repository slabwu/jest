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
    let ALPHABET = 26
    let LOWER_A = 97

    for (let i = 0; i < string.length; i++) {
        let codePoint = string.codePointAt(i)
        if (codePoint >= LOWER_A + (ALPHABET - shift)) {
            output += String.fromCodePoint(codePoint + shift - ALPHABET)
        } else {
            output += String.fromCodePoint(codePoint + shift)
        }
    }
    console.log('a'.codePointAt(0))
    return output
}