function getRandomInt(max) {
    return Math.floor(Math.random()*max)
}
function hand() {
    const RandomInt = getRandomInt(3)
    if (RandomInt === 0) {
        return "ROCK"
    } else if (RandomInt === 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
let DevilsHand = hand()
console.log(DevilsHand)

const playerSelection = prompt('ROCK, PAPER, OR SCISSORS').toUpperCase();

console.log("The computer played " + DevilsHand)
console.log("You played " + playerSelection)
if (playerSelection === DevilsHand) {
    alert("tie!")
} else if (playerSelection === "ROCK" && DevilsHand === "PAPER" || playerSelection === "PAPER" && DevilsHand === "SCISSORS" || playerSelection === "SCISSORS" && DevilsHand === "ROCK") {
    alert("you lose") //Devil won >:)
} else if (playerSelection === "ROCK" && DevilsHand === "SCISSORS" || playerSelection === "PAPER" && DevilsHand === "ROCK" || playerSelection === "SCISSORS" && DevilsHand === "PAPER") {
    alert("you win") //the Devil was beaten.
} else {
    alert("fizzbuzz")
}
