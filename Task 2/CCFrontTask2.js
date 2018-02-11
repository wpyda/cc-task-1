const generateRunicWords = length => {
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
    const words = []
    const newRunes = runes.map(el => el)
    const newWords = []
    const newPowers = []
    const runicWords = []

    // zwracam tablice wszystkich wartosci run w kolejnosci od najmocniejszej
    for (let i = 0; i < runes.length; i++) {
        const rune = newRunes.reduce((max, rune) => (rune.power > max.power) ? rune : max)

        words.push({name: rune.name, power: rune.power})

        const removeRune = (array, element) => {
            const index = array.indexOf(element)

            if (index !== -1) {
                array.splice(index, 1)
            }
        }
        removeRune(newRunes, rune)

    }
    console.log("words", words)

    // tworzy nowe tablice z nazwami i mocami run (tyle ile wynosi length)
    for (let i = 0; i < length; i++) {
        newWords.push(words[i].name)
        newPowers.push(words[i].power)
    }
    console.log("newWords", newWords)
    console.log("newPowers", newPowers)

    // tworzy nowa tablice zawierajaca zsumowane nazwy i moce run
    const newArr = {
        name: newWords.join("-"),
        power: newPowers.reduce((total, num) => total + num, 0)
    }
    console.log("newArr", newArr)


    for (let i = 0; i < 10; i++) {
        runicWords.push(newArr)
    }

    console.log("runicWords", runicWords)


    // return runicWords
}

generateRunicWords(2)