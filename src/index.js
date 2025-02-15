module.exports = function toReadable(number) {
    const twenty = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
    }

    const tens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (number <= 20) {
        return twenty[number];
    } else if (number < 100) {
        if (number % 10 === 0) {
            return tens[number];
        } else {
            const residual = number % 10;
            return tens[number - residual] + ' ' + twenty[residual]
        }
    } else {
        const hundreds = twenty[Math.floor(number / 100)] + ' ' + 'hundred';
        if (number % 100 === 0) {
            return hundreds;
        } else {
            return hundreds + ' ' + toReadable(number % 100);
        }
    }
}

console.log(module.exports(21));