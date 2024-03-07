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
