let upper = 6
let lower = 1

let diceOutput = Math.floor(Math.random() * (upper - lower + 1) + lower) //upper - lower helps in generalization
// upper is the upper limit whereas  lower is the lower limit
console.log(diceOutput)