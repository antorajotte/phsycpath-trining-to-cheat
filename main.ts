namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . 1 1 1 1 1 . . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. 1 1 1 . 1 1 1 1 . . . . 1 . . 
1 1 . . 1 1 3 3 3 3 1 1 1 1 . . 
1 . . . 3 3 1 1 1 3 . . . . . . 
1 . . 3 3 3 1 1 . . . . . . . . 
1 . . . . 3 3 1 1 1 1 . . . . . 
1 1 1 . . 1 . 3 1 1 . 1 1 1 . . 
. . 1 1 1 1 3 . 1 . . . . . . . 
. . . . . 1 3 1 1 1 . . . . . . 
. . . . . 3 3 . . 1 1 1 1 . . . 
. . . 1 1 3 1 1 1 . . . . 1 1 1 
. . . . 3 . . . . 1 1 . . . . . 
. . . . 3 . . . . . . 1 1 1 1 . 
. . . . . . . . . . . . . . 1 . 
. . . . . . . . . . . . . . 1 . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleInnerNorthWest, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 3 3 3 2 2 2 2 2 3 3 3 2 2 2 
2 3 2 2 2 2 2 2 2 2 2 2 2 3 2 2 
2 2 2 2 1 2 2 2 2 2 2 1 2 2 2 2 
2 2 2 f 8 2 2 2 2 2 f 8 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 5 5 5 5 5 2 2 2 2 2 2 
2 2 2 2 5 2 1 2 1 2 5 2 2 2 2 2 
2 2 2 5 1 2 2 2 2 2 1 5 2 2 2 2 
2 2 2 2 5 1 2 1 2 1 5 2 2 2 2 2 
2 2 2 2 2 5 5 5 5 5 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000b0b0b0b0b0b0b060a0a0a0a061111060b0b0b06060b060a060a0a06050f0f060b06060a0a060a0a060a0a060a0a060a060a0a0a0a0a0a0a060a0a060a0a060a0a0a0a0a0a0a0a0a0a060a060a0a0a0a0a0a0606060a0a0a0a0a060a0a0a0a0a0a060606060a0a160a0a0a0a0a060a0a0a0a0606060a0a160a0a0a0a0a0a0a0a0a0a0a060a0a0a16160a0a0a0a060606060a0a160a0a0a0a0a0606161606060a060a0a160a0a0a0a0a060a0a0a0a0a0a060a0a060606060a0a060a0a0a0a0a0a0a0a0a060a0a0a06060a0a0a06060606100e0a0a0a0a0a0a0a0a0a0a0a0a0909100e0a0a0a060a0a0a0a0a0a0a0a090906060606060606060606060606060606`,
            img`
. . . . . . . 2 . . . . 2 . . 2 
. . . 2 2 . 2 . 2 . . 2 . . . 2 
. 2 2 . . 2 . . 2 . . 2 . . 2 . 
2 . . . . . . . 2 . . 2 . . 2 . 
. . . . . . . . . 2 . 2 . . . . 
. . 2 2 2 . . . . . 2 . . . . . 
. 2 2 2 2 . . . . . . . . 2 . . 
. . 2 2 2 . . . . . . . . . . . 
. . . 2 . . . . . . . . . 2 2 2 
2 . . . . . . . . 2 2 . . 2 2 . 
2 . . . . . . . . 2 . . . . . . 
2 . . 2 2 2 2 . . 2 . . . . . . 
. . . 2 . . . 2 2 . . . 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.hazardLava0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.dungeon.stairWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.stairEast,sprites.builtin.forestTiles16,myTiles.tile1,sprites.castle.shrub,sprites.castle.saplingOak,sprites.builtin.forestTiles7],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(12)
