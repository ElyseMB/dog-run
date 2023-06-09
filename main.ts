radio.onReceivedNumber(function (receivedNumber) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    if (0 == receivedNumber) {
        basic.showIcon(IconNames.Happy)
        xgo.execution_action(xgo.action_enum.Default_posture)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
        xgo.move_xgo(xgo.direction_enum.Forward, 62)
    } else if (2 == receivedNumber) {
        basic.showIcon(IconNames.Confused)
        xgo.execution_action(xgo.action_enum.Default_posture)
        xgo.move_xgo(xgo.direction_enum.Forward, 0)
    } else if (3 == receivedNumber) {
        basic.showIcon(IconNames.No)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, 30, 0)
    } else if (false) {
        basic.showIcon(IconNames.Angry)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, 0, 0)
    } else if (false) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        xgo.execution_action(xgo.action_enum.Whirl)
    } else {
    	
    }
})
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
radio.setGroup(3)
basic.showIcon(IconNames.Happy)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
radio.sendString("team 3 ")
