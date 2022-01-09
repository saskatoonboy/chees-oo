
class Pawn extends Peice {

    constructor(side, x, y) {
        super(side, x, y);
        this.forward = -1;
        this.left = -1;
        this.right = 1;
        this.img = assets["p"];
        if (this.getSide() == white) {
            this.forward = 1;
            this.left = 1;
            this.right = -1;
            this.img = assets["P"];
        }
        this.unMoved = true;
    }

    getValue()  {
        return 1;
    }

    move(tile, temp) {

        if (!temp) {
            this.unMoved = false;
        }
        return super.move(tile, temp);

    }

    hasPeice() {
        return true;
    }

    getGoTile() {

        let pGoTiles = [];
        if (board.getTile(this.x, this.y + this.forward) != null) {
            if (!board.getTile(this.x, this.y + this.forward).hasPeice()) {

                pGoTiles.push(board.getTile(this.x, this.y + this.forward));

                if (board.getTile(this.x, this.y + this.forward * 2) != null) {
                    if (this.unMoved && !board.getTile(this.x, this.y + this.forward * 2).hasPeice()) {

                        pGoTiles.push(board.getTile(this.x, this.y + this.forward * 2));

                    }
                }
            }
        }

        if (board.getTile(this.x + this.left, this.y + this.forward) != null) {
            if (board.getTile(this.x + this.left, this.y + this.forward).hasPeice()) {

                pGoTiles.push(board.getTile(this.x + this.left, this.y + this.forward));

            }
        }

        if (board.getTile(this.x + this.right, this.y + this.forward) != null) {
            if (board.getTile(this.x + this.right, this.y + this.forward).hasPeice()) {

                pGoTiles.push(board.getTile(this.x + this.right, this.y + this.forward));

            }
        }

        let goTiles = [];

        for (let goTile of pGoTiles) {

            if (!goTile.isFriend(this.side)) {

                goTiles.push(goTile);

            }

        }

        return this.checkCheck(goTiles);

    }

}
