input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
if (Math.randomBoolean()) {
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Forever)
} else if (Math.randomBoolean()) {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
} else if (Math.randomBoolean()) {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
} else {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
}
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
