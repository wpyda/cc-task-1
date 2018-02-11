const runes = [
    {name: "El", power: 28},
    {name: "Eld", power: 33},
    {name: "Tir", power: 9},
    {name: "Nef", power: 7},
    {name: "Eth", power: 31},
    {name: "Ith", power: 22},
    {name: "Tal", power: 8},
    {name: "Ral", power: 25},
    {name: "Ort", power: 18},
    {name: "Thul", power: 13},
    {name: "Amn", power: 6},
    {name: "Sol", power: 10},
    {name: "Shael", power: 17},
    {name: "Dol", power: 11},
    {name: "Hel", power: 12},
    {name: "Io", power: 20},
    {name: "Lum", power: 32},
    {name: "Ko", power: 27},
    {name: "Fal", power: 14},
    {name: "Lem", power: 26},
    {name: "Pul", power: 15},
    {name: "Um", power: 16},
    {name: "Mal", power: 21},
    {name: "Ist", power: 4},
    {name: "Gul", power: 23},
    {name: "Vex", power: 24},
    {name: "Ohm", power: 1},
    {name: "Lo", power: 2},
    {name: "Sur", power: 30},
    {name: "Ber", power: 3},
    {name: "Jah", power: 5},
    {name: "Cham", power: 29},
    {name: "Zod", power: 19},
]


const generateRunicWords = (length) => {

    const words = []

    const newRunes = runes.map(el => el)
    const removeRune = (array, element) => {
        const index = array.indexOf(element)
        if (index !== -1) {
            array.splice(index, 1)
        }
    }

    for (let i = 0; i < runes.length; i++) {
        const rune = newRunes.reduce((max, rune) => (rune.power > max.power) ? rune : max)
        words.push({name: rune.name, power: rune.power})
        removeRune(newRunes, rune)
    }

    const runicWords = []
    for (let i = 0; i < words.length; i += length) {
        const slice = words.slice(i, i + length)

        if (slice.length === length) {
            const name = slice.map(({name}) => name).join('-')
            const power = slice.reduce((runicWords, {power}) => runicWords + power, 0)

            runicWords.push({name, power})
        }

        if (runicWords.length === 10) {break}
    }
    return runicWords
}
// console.log(generateRunicWords(2))