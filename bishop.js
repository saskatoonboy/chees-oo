
class Bishop extends Peice {

    constructor(side, x, y) {
        super(side, x, y);
        this.img = assets["b"];
        if (this.getSide() == white) {
            this.img = assets["B"];
        }
    }

    getValue()  {
        return 3;
    }

    hasPeice() {
        return true;
    }

    getGoTile() {

        let goTiles = [];

        for (let x = -1; x <= 1; x += 2) {
            for (let y = -1; y <= 1; y += 2) {
                for (let i = 1; i < 8; i++) {

                    let tile = board.getTile(this.x + i * x, this.y + i * y);

                    if (tile == null) {

                        break;

                    }

                    if (tile.isFriend(this.side)) {

                        break;

                    } else if (tile.isFriend(this.side) == null) {

                        goTiles.push(tile);

                    } else {

                        goTiles.push(tile);
                        break;

                    }

                }
            }
        }

        return this.checkCheck(goTiles);

    }
}
