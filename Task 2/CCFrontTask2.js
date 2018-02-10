const generateRunicWords = length => {
    const runes = [
        {name: 'El', power: 28},
        {name: 'Eld', power: 33},
        {name: 'Tir', power: 9},
        {name: 'Nef', power: 7},
        {name: 'Eth', power: 31},
        {name: 'Ith', power: 22},
        {name: 'Tal', power: 8},
        {name: 'Ral', power: 25},
        {name: 'Ort', power: 18},
        {name: 'Thul', power: 13},
        {name: 'Amn', power: 6},
        {name: 'Sol', power: 10},
        {name: 'Shael', power: 17},
        {name: 'Dol', power: 11},
        {name: 'Hel', power: 12},
        {name: 'Io', power: 20},
        {name: 'Lum', power: 32},
        {name: 'Ko', power: 27},
        {name: 'Fal', power: 14},
        {name: 'Lem', power: 26},
        {name: 'Pul', power: 15},
        {name: 'Um', power: 16},
        {name: 'Mal', power: 21},
        {name: 'Ist', power: 4},
        {name: 'Gul', power: 23},
        {name: 'Vex', power: 24},
        {name: 'Ohm', power: 1},
        {name: 'Lo', power: 2},
        {name: 'Sur', power: 30},
        {name: 'Ber', power: 3},
        {name: 'Jah', power: 5},
        {name: 'Cham', power: 29},
        {name: 'Zod', power: 19},
    ]
    const words = []
    // const singleWord = {
    //     word: "Test",
    //     power: 20
    // }

    // Reduce zwracające power i name najsilniejszej runy
    // const power = runes.reduce((max, rune, index) => rune.power > max ? rune.power : max, runes[0].power)
    // const runeName = runes.reduce((max, rune, index) => rune.power > max ? rune.name : max, runes[0].power)

    const maxPowerRune = () => {
        const rune = runes.reduce((max, rune) => (rune.power > max.power) ? rune : max)



        console.log(rune.power)
        words.push({name: rune.name, power: rune.power})
    }

    // console.log('maxPowerRune', maxPowerRune())

    for (let i = 0; i < length; i++) {
        maxPowerRune()
    }

    // words.push(singleWord)
    console.log('words', words)

    // return runicWords
}

generateRunicWords(5)