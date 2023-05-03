radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -45, 0, 9),
    9
    )
})
let signal = 0
radio.setGroup(1)
