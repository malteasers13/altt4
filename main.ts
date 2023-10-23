let soundLevel = 0
let maxSound = 80
// make it so it: 
// 1. Sets  up a radio connection between student and teacher 
// 2. Constantly measures sound levels and records data to a bar graph
// 3. Sends a prompt to student + teacher when it gets too loud 
// 4. Student sends a happy or sad face via radio to teacher based on comfort levels
// MUST MAKE A TOO LOUD MEASUREMENT IN DB FOR WARNING I'm saying its => 80dB
// different tones based on sound level??
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(maxSound)
    } else {
        soundLevel = input.soundLevel()
        led.plotBarGraph(
        soundLevel,
        255
        )
        if (soundLevel > maxSound) {
            maxSound = soundLevel
            music.setVolume(100)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            if (maxSound >= 100) {
                music.play(music.tonePlayable(294, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
            } else {
            	
            }
        }
    }
})
