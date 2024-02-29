basic.forever(function () {
    input.onButtonPressed(Button.A, onButtonPressedA)
})

function onButtonPressedA() {
    
    basic.showAnimation("1000001000\n0100000100\n0010000010\n0001000001\n0000110000")
}
