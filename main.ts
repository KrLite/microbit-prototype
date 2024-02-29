input.onButtonPressed(Button.A, onButtonPressedA)
input.onButtonPressed(Button.B, onButtonPressedB)

let lastTweaked: Button

let image: Image
let direction: number

basic.forever(function () {
    if (image && direction) {
        image.scrollImage(direction, 50)
    }
})

function onButtonPressedA() {
    if (image && lastTweaked === Button.A) {
        image = undefined
    } else {
        image = images.createImage(`
        ..... #..
        ..... .#.
        ..... ..#
        ..... .#.
        ..... #..
        `)
        direction = -1
    }
    lastTweaked = Button.A
}

function onButtonPressedB() {
    if (image && lastTweaked === Button.B) {
        image = undefined
    } else {
        image = images.createImage(`
        ..# .....
        .#. .....
        #.. .....
        .#. .....
        ..# .....
        `)
        direction = 1
    }
    lastTweaked = Button.B
}
