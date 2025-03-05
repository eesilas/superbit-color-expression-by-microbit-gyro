input.onButtonPressed(Button.A, function () {
    gyro_x += 5
})
input.onButtonPressed(Button.B, function () {
    gyro_x += -5
})
basic.showIcon(IconNames.Chessboard)
let gyro_x = 120
let gyro_y = 129
let gyro_z = 120
let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
basic.pause(500)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.pause(500)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
basic.pause(500)
basic.forever(function () {
    SuperBit.RGB_Program().showColor(neopixel.hsl(gyro_x, gyro_y, gyro_z))
})
