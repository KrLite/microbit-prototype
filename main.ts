basic.forever(function () {
    input.onButtonPressed(Button.A, onButtonPressedA)
})

function onButtonPressedA() {
    
    images.createImage('01000').plotFrame(0)
}
