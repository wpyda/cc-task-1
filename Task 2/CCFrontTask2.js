const runes = [
    {name: "El", power: 28, dont: "Ort"},
    {name: "Eld", power: 33, dont: "Sur"},
    {name: "Tir", power: 9, dont: "Eth"},
    {name: "Nef", power: 7, dont: "Ist"},
    {name: "Eth", power: 31, dont: "Tir"},
    {name: "Ith", power: 22, dont: "Pul"},
    {name: "Tal", power: 8, dont: "Io"},
    {name: "Ral", power: 25, dont: "Um"},
    {name: "Ort", power: 18, dont: "El"},
    {name: "Thul", power: 13, dont: "Sol"},
    {name: "Amn", power: 6, dont: "Fal"},
    {name: "Sol", power: 10, dont: "Thul"},
    {name: "Shael", power: 17, dont: "Lem"},
    {name: "Dol", power: 11, dont: "Hel"},
    {name: "Hel", power: 12, dont: "Dol"},
    {name: "Io", power: 20, dont: "Tal"},
    {name: "Lum", power: 32, dont: "Gul"},
    {name: "Ko", power: 27, dont: "Mal"},
    {name: "Fal", power: 14, dont: "Amn"},
    {name: "Lem", power: 26, dont: "Shall"},
    {name: "Pul", power: 15, dont: "Ith"},
    {name: "Um", power: 16, dont: "Ral"},
    {name: "Mal", power: 21, dont: "Ko"},
    {name: "Ist", power: 4, dont: "Nef"},
    {name: "Gul", power: 23, dont: "Lum"},
    {name: "Vex", power: 24, dont: "Ohm"},
    {name: "Ohm", power: 1, dont: "Vex"},
    {name: "Lo", power: 2, dont: "Cham"},
    {name: "Sur", power: 30, dont: "Eld"},
    {name: "Ber", power: 3, dont: ""},
    {name: "Jah", power: 5, dont: "Zod"},
    {name: "Cham", power: 29, dont: "Lo"},
    {name: "Zod", power: 19, dont: "Jah"},
]

const generateRunicWords = length => {
    if (typeof length !== "number") return Error("Input should be a number!")
    if (length === 0) return Error("Input should be greater than 0!")
    if (length > runes.length) return Error("Number is too big! Not enough runes!")

    const findMostPowerfulRune = (inputRunes) => {
        return inputRunes.reduce((reducer, el) => (
            el.power > reducer.power ? el : reducer
        ), {name: '', power: 0, dont: ''})
    }

    const generateRunicWord = (runesArr) => {
        const runicWord = {name: '', power: 0}
        runesArr.forEach((el, i, arr) => {
            runicWord.name += el.name
            runicWord.power += el.power
            if (i < arr.length - 1) {
                runicWord.name += '-'
            }
        })
        return runicWord
    }

    let inputRunes = [].concat(runes)
    let runicWords = []
    let maxPowerRune
    let n = 0

    // Generating runic words arrays 'length' times
    do {
        let runicWordArr = []
        for (let i = 0; i < length; i++) {
            maxPowerRune = findMostPowerfulRune(inputRunes)
            inputRunes.splice(inputRunes.indexOf(maxPowerRune), 1)
            runicWordArr[i] = maxPowerRune
        }
        runicWords[n] = generateRunicWord(runicWordArr)
        ++n
    } while ((inputRunes.length > length) && (n < 10))

    return runicWords
}

//---- TEST OUTPUT
console.log('generateRunicWords: ', generateRunicWords(5))


// A function which checks if typed runic word is valid
const checkRunicWord = runicWord => {
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
console.log('checkRunicWord: ', checkRunicWord('Ohm-Lo-Ber-Ist'))