
class Peice {

    constructor(side, x, y) {
        this.side = side;
        this.x = x;
        this.y = y;
        board.setTile(x, y, this);
        if (side == white) {
            board.white.push(this);
        } else if (side == black) {
            board.black.push(this);
        }
        this.checkMove = null;
    }

    move(tile, temp) {

        board.setTile(tile.x, tile.y, this);
        board.setTile(this.x, this.y, new Peice(null, this.x, this.y));
        this.x = tile.x;
        this.y = tile.y;

        if (!temp && tile.isKing()) {
            win(this.side);
            return;
        }
        if (tile.getSide() != null) {

            if (this.side == white) {

                for (let i = 0; i < board.black.length; i++) {
                    let pTile = board.black[i];
                    if (pTile == tile) {

                        return board.black.splice(i, 1);

                    }

                }

            } else {

                for (let i = 0; i < board.white.length; i++) {
                    let pTile = board.white[i];
                    if (pTile == tile) {

                        return board.white.splice(i, 1);

                    }

                }


            }
        }
    }

    isKing() {
        return false;
    }

    draw() {

        if (this.img != null) {

            image(this.img, this.x * board.tileSize + (board.tileSize - this.img.width) / 2, this.y * board.tileSize);

        }

    }

    getSide() {
        return this.side;
    }

    hasPeice() {
        return false;
    }

    isFriend(side) {

        if (this.side == null) {
            return null;
        }

        return (side == this.side);

    }

    checkCheck(goTiles) {

        if (this.side.isHuman() && this.side == turn) {

            let checkedTiles = [];

            for (let goTile of goTiles) {


                let x = this.x;
                let y = this.y;

                this.move(goTile, true);

                let moves = getMoves(this.getSide().getOtherSide(), 2);

                this.move(new Peice(null, x, y), true);
                board.setTile(goTile.x, goTile.y, goTile);
                if (goTile.getSide() != null) {
                    if (goTile.getSide() == white) {
                        board.white.push(goTile);
                    } else {
                        board.black.push(goTile);
                    }

                }

                let safe = true;

                for (let move of moves) {

                    if (move.tile.isKing()) {

                        safe = false;

                    }

                }

                if (safe) {
                    checkedTiles.push(goTile);
                }

            }
            
            return checkedTiles;

        }

        return goTiles

    }
}