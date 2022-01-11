scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    game.over(true, effects.smiles)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    info.changeLifeBy(1)
    mySprite.destroy()
    mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(mySprite2)
    scene.cameraFollowSprite(mySprite2)
    tiles.setTilemap(tilemap`層級1`)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 15))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    info.changeLifeBy(1)
    mySprite3.destroy()
    mySprite4 = sprites.create(assets.image`myImage9`, SpriteKind.Player)
    controller.moveSprite(mySprite4)
    scene.cameraFollowSprite(mySprite4)
    tiles.setTilemap(tilemap`層級9`)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(14, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeLifeBy(1)
    mySprite2.destroy()
    mySprite3 = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    controller.moveSprite(mySprite3)
    scene.cameraFollowSprite(mySprite3)
    tiles.setTilemap(tilemap`層級8`)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 15))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let 敵人: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(7)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`層級4`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 15))
game.onUpdateInterval(500, function () {
    if (Math.percentChance(30)) {
        敵人 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
        tiles.placeOnRandomTile(敵人, sprites.castle.tilePath5)
    }
})
