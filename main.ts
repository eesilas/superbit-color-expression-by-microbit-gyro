basic.showIcon(IconNames.Chessboard)
let gyro_x = 0
let gyro_y = 0
let gyro_z = 0
let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
basic.pause(500)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.pause(500)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
basic.pause(500)
basic.forever(function () {
    SuperBit.RGB_Program().showColor(neopixel.hsl(gyro_x, gyro_y, gyro_z))
    gyro_x = input.acceleration(Dimension.X)
    gyro_y = input.acceleration(Dimension.Y)
    gyro_z = input.acceleration(Dimension.Z)
})
