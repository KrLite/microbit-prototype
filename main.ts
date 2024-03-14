input.onButtonPressed(Button.A, onButtonPressedA)
input.onButtonPressed(Button.B, onButtonPressedB)
input.onButtonPressed(Button.AB, onButtonPressedAB)

let lastTweaked: Button
let flashing = false

type Rgb = { color: number }
let rgbs: [Rgb]
let rgb: Rgb

function randomRgb(): Rgb {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return { color: (r << 16) + (g << 8) + (b) }
}

function updatePixels() {
    np.clear()
    for (let i = 0; i < 15; i++) {
        if (i < rgbs.length) {
            np.setPixelColor(i, rgbs[i].color)
        }
    }
    np.show()
}

function onButtonPressedA() {
    rgb = randomRgb()
    console.log(rgb)

    np.showColor(rgb.color)
    
    lastTweaked = Button.A

    /*
    if (lastTweaked === Button.A) {
        basic.clearScreen()
        lastTweaked = null
    } else {
        basic.showArrow(ArrowNames.West)
        lastTweaked = Button.A
    }
    */
}

function onButtonPressedB() {
    if (lastTweaked !== Button.B) {
        if (rgb !== undefined) {
            rgbs.insertAt(0, rgb)

            if (rgbs.length >= 15) {
                rgbs.pop()
            }
        }
        updatePixels()
    }

    lastTweaked = Button.B

    /*
    if (lastTweaked === Button.B) {
        basic.clearScreen()
        lastTweaked = null
    } else {
        basic.showArrow(ArrowNames.East)
        lastTweaked = Button.B
    }
    */
}

function onButtonPressedAB() {
    if (rgbs.length > 0) {
        rgbs.removeAt(0)
        updatePixels()
    }

    /*
    if (lastTweaked === Button.AB) {
        basic.clearScreen()
        lastTweaked = null
    } else {
        basic.showIcon(IconNames.Square)
        lastTweaked = Button.AB
    }
    */
}
