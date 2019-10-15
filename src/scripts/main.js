console.log("Tuesday is a groooovy day am i right?")

// C is for Cookie exercise
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function exercise

let conjoinedWord
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)