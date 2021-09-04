input.onButtonPressed(Button.A, function () {
    teller += 1
    teller = teller % 10
    basic.showNumber(teller)
})
input.onButtonPressed(Button.AB, function () {
    tallet = parseFloat(tallTekst)
    basic.showNumber(tallet)
})
input.onButtonPressed(Button.B, function () {
    tallTekst = "" + tallTekst + convertToText(teller)
    teller = 0
    basic.showNumber(teller)
})
let tallet = 0
let teller = 0
let tallTekst = ""
tallTekst = ""
teller = 0
basic.showNumber(teller)
