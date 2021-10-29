input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("I Love You")
})
