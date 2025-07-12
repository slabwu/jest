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