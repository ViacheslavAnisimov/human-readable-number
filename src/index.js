module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number > 0 && number < 20) {
        return ones[number];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return tens[number / 10];
        } else {
            return tens[Math.trunc(number / 10)]
            + ' '
            + ones[number % 10];
        }
    }

    if (number / 100 > 0) {
        if (number % 100 === 0) {
            return ones[number / 100]
            + ' hundred';
        } else if (number % 100 < 20) {
            return ones[Math.trunc(number / 100)]
            + ' hundred '
            + ones[number % 100];
        } else {
            return (ones[Math.trunc(number / 100)]
            + ' hundred '
            + tens[Math.trunc(number % 100 / 10)]
            + ' '
            + ones[number % 10]).trim();
        }
    }

    return 'zero';
}

// module.exports = function toReadable(number) {

//     const numOnes = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
//     const numTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
//     let str = String(number).split('');

//     if (number > 0 && number <= 19) {
//         return numOnes[number];
//     }
//     if (number > 19 && str.length < 3) {
//         if (number % 10 === 0) {
//             return numTens[Number(str[0])]
//         } else {
//             return numTens[Number(str[0])]
//                 + " "
//                 + numOnes[Number(str[1])];
//         }
//     } else if (str.length === 3) {
//         if (number % 100 === 0) {
//             return numOnes[Number(str[0])]
//                 + " hundred"
//         } else if (number % 100 > 19 && number % 10 !== 0) {
//             return numOnes[Number(str[0])]
//                 + " hundred "
//                 + numTens[Number(str[1])]
//                 + " "
//                 + numOnes[Number(str[2])];
//         } else if (number % 100 > 19 && number % 10 === 0) {
//             return numOnes[Number(str[0])]
//                 + " hundred "
//                 + numTens[Number(str[1])]
//         } else {
//             return numOnes[Number(str[0])]
//                 + " hundred "
//                 + numOnes[number % 100];
//         }
//     }

//     return "zero";
// }
