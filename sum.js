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
    let UPPER_A = 65
    let offset

    for (let i = 0; i < string.length; i++) {
        let codePoint = string.codePointAt(i)
        let letter = string[i]

        if (isAlphabet(letter)) {
            offset = (isUpperCase(string[i]))? 65 : 97
            if (codePoint >= offset + (ALPHABET - shift)) {
                output += String.fromCodePoint(codePoint + shift - ALPHABET)
            } else {
                output += String.fromCodePoint(codePoint + shift)
            }
        } else {
            output += letter
        }
    }
    return output
}

function isUpperCase(character) {
  return character === character.toUpperCase();
}

function isAlphabet(character) {
  return /^[a-zA-Z]$/.test(character);
}

export function analyseArray(array) {
    let output = {}
    output.average = array.reduce((acc, num) => acc + num, 0) / array.length
    output.min = Math.min(...array)
    output.max = Math.max(...array)
    output.length = array.length
    return output
}