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
    gyro_x = Math.trunc(input.acceleration(Dimension.X) / 5)
    gyro_y = Math.trunc(input.acceleration(Dimension.Y) / 5)
    gyro_z = Math.trunc(input.acceleration(Dimension.Z) / 5)
})
