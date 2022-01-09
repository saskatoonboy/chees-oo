
class Rook extends Peice {

    constructor(side, x, y) {
        super(side, x, y);
        this.img = assets["r"];
        if (this.getSide() == white) {
            this.img = assets["R"];
        }
    }

    move(tile, temp) {

        if (!temp) {
            this.side.king.notCastleable(this);
        }
        return super.move(tile, temp);

    }

    getValue()  {
        return 5;
    }

    hasPeice() {
        return true;
    }

    getGoTile() {

        let goTiles = [];

        for (let x = this.x + 1; x < 8; x++) {
            
            let tile = board.getTile(x, this.y);
            if (tile.isFriend(this.side)) {

                break;

            } else if (tile.isFriend(this.side) == null) {

                goTiles.push(tile);

            } else {

                goTiles.push(tile);
                break;

            }

        }

        for (let x = this.x - 1; x >= 0; x--) {
            
            let tile = board.getTile(x, this.y);

            if (tile.isFriend(this.side)) {

                break;

            } else if (tile.isFriend(this.side) == null) {

                goTiles.push(tile);

            } else {

                goTiles.push(tile);
                break;

            }

        }

        for (let y = this.y + 1; y < 8; y++) {
            
            let tile = board.getTile(this.x, y);

            if (tile.isFriend(this.side)) {

                break;

            } else if (tile.isFriend(this.side) == null) {

                goTiles.push(tile);

            } else {

                goTiles.push(tile);
                break;

            }

        }

        for (let y = this.y - 1; y >= 0; y--) {
            
            let tile = board.getTile(this.x, y);

            if (tile.isFriend(this.side)) {

                break;

            } else if (tile.isFriend(this.side) == null) {

                goTiles.push(tile);

            } else {

                goTiles.push(tile);
                break;

            }

        }

        return this.checkCheck(goTiles);

    }
}
