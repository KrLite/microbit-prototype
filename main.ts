input.onButtonPressed(Button.A, onButtonPressedA)
input.onButtonPressed(Button.B, onButtonPressedB)

function onButtonPressedA() {

    images.createImage('0100010000').plotFrame(1)
}

function onButtonPressedB() {
    images.createImage('0100010000').plotFrame(0)
}
