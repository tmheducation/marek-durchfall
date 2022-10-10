input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        music.playMelody("E F G F B A G F ", 120)
    }
})
basic.showString("moin was geht")
basic.forever(function () {
	
})
