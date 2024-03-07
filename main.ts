input.onButtonPressed(Button.A, onButtonPressedA)
input.onButtonPressed(Button.B, onButtonPressedB)
input.onButtonPressed(Button.AB, onButtonPressedAB)

let lastTweaked: Button

function onButtonPressedA() {
    if (lastTweaked === Button.A) {
        basic.clearScreen()
    } else {
        basic.showArrow(ArrowNames.West)
    }
    lastTweaked = Button.A
}

function onButtonPressedB() {
    if (lastTweaked === Button.B) {
        basic.clearScreen()
    } else {
        basic.showArrow(ArrowNames.East)
    }
    lastTweaked = Button.B
}

function onButtonPressedAB() {
    if (lastTweaked === Button.AB) {
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Square)
    }
    lastTweaked = Button.AB
}

let np = neopixel.create(DigitalPin.P2, 15, NeoPixelMode.RGB)
let offset = 0

basic.forever(function() {
    np.showRainbow(0, 255)
    np.rotate()
})
