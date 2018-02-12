const runes = [
    {name: "El", power: 28, not: "Ort"},
    {name: "Eld", power: 33, not: "Sur"},
    {name: "Tir", power: 9, not: "Eth"},
    {name: "Nef", power: 7, not: "Ist"},
    {name: "Eth", power: 31, not: "Tir"},
    {name: "Ith", power: 22, not: "Pul"},
    {name: "Tal", power: 8, not: "Io"},
    {name: "Ral", power: 25, not: "Um"},
    {name: "Ort", power: 18, not: "El"},
    {name: "Thul", power: 13, not: "Sol"},
    {name: "Amn", power: 6, not: "Fal"},
    {name: "Sol", power: 10, not: "Thul"},
    {name: "Shael", power: 17, not: "Lem"},
    {name: "Dol", power: 11, not: "Hel"},
    {name: "Hel", power: 12, not: "Dol"},
    {name: "Io", power: 20, not: "Tal"},
    {name: "Lum", power: 32, not: "Gul"},
    {name: "Ko", power: 27, not: "Mal"},
    {name: "Fal", power: 14, not: "Amn"},
    {name: "Lem", power: 26, not: "Shall"},
    {name: "Pul", power: 15, not: "Ith"},
    {name: "Um", power: 16, not: "Ral"},
    {name: "Mal", power: 21, not: "Ko"},
    {name: "Ist", power: 4, not: "Nef"},
    {name: "Gul", power: 23, not: "Lum"},
    {name: "Vex", power: 24, not: "Ohm"},
    {name: "Ohm", power: 1, not: "Vex"},
    {name: "Lo", power: 2, not: "Cham"},
    {name: "Sur", power: 30, not: "Eld"},
    {name: "Ber", power: 3, not: ""},
    {name: "Jah", power: 5, not: "Zod"},
    {name: "Cham", power: 29, not: "Lo"},
    {name: "Zod", power: 19, not: "Jah"},
]

exports.generateRunicWords = length => {

    if (typeof length !== "number") return Error("Input should be a number!")
    if (length === 0) return Error("Input should be greater than 0!")
    if (length > runes.length) return Error("Input number is too big. Not enough runes!")

    const words = []
    const newRunes = runes.map(el => el)
    const runicWords = []

    // A function which removes item from array
    const removeRune = (array, element) => {
        const index = array.indexOf(element)
        if (index !== -1) {
            array.splice(index, 1)
        }
    }

    // Pushing new keys and values to an empty array (words), so it contains segregated runes (from the greatest)
    for (let i = 0; i < runes.length; i++) {
        const rune = newRunes.reduce((max, rune) => (rune.power > max.power) ? rune : max)
        words.push({name: rune.name, power: rune.power, not: rune.not})
        removeRune(newRunes, rune)
    }

    // Slicing words array and pushing it's elements to new empty array - runicWords
    for (let i = 0; i < words.length; i += length) {
        const slice = words.slice(i, i + length)

        if (slice.length === length) {
            const name = slice.map(({name}) => name).join('-')
            const power = slice.reduce((runicWords, {power}) => runicWords + power, 0)

            runicWords.push({name, power})
        }

        if (runicWords.length === 10) {
            break
        }
    }
    return runicWords
}
//------TEST OUTPUT
// console.log('generateRunicWords: ', generateRunicWords(4))


exports.checkRunicWord = runicWord => {
    if (typeof runicWord !== 'string') return Error("Input is not a string!")
    if (runicWord === '') return Error("Input cannot be empty!")

    // "Copying" runes array to inputRunes, splitting input string and checking if inputRunes array contain single input items-runes (after split)
    let inputRunes = [].concat(runes)
    let runicWordObject = 0
    const runicWordArr = runicWord.split('-')
    for (let i = 0; i < runicWordArr.length; i++) {
        for (let j = 0; j < inputRunes.length; j++) {
            if (runicWordArr[i] === inputRunes[j].name) {
                runicWordObject += inputRunes[j].power
            }
        }
    }
    return runicWordObject
}

//------TEST OUTPUT
// console.log('checkRunicWord: ', checkRunicWord('Ohm-Lo-Ber-Ist'))
