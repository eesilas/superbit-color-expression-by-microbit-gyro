basic.showIcon(IconNames.Chessboard)
let gyro_x = 0
let gyro_y = 0
let gyro_z = 0
let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showRainbow(1, 360)
SuperBit.Music(SuperBit.enMusic.ode)
basic.pause(2000)
basic.forever(function () {
    led.plotBarGraph(
    gyro_x,
    255
    )
    gyro_x = input.acceleration(Dimension.X)
    gyro_y = input.acceleration(Dimension.Y)
    gyro_z = input.acceleration(Dimension.Z)
    SuperBit.RGB_Program().showBarGraph(0, neopixel.hsl(gyro_x, gyro_y, gyro_z))
    basic.pause(1000)
})
