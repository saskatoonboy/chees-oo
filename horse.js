
class Horse extends Peice {

    constructor(side, x, y) {
        super(side, x, y);
        this.img = assets["h"];
        if (this.getSide() == white) {
            this.img = assets["H"];
        }
    }

    getValue()  {
        return 3;
    }

    hasPeice() {
        return true;
    }

    getGoTile() {


        let pGoTiles = [];
        let goTiles = [];
        
        pGoTiles.push(board.getTile(this.x + 2, this.y + 1));
        pGoTiles.push(board.getTile(this.x + 2, this.y - 1));

        pGoTiles.push(board.getTile(this.x - 2, this.y + 1));
        pGoTiles.push(board.getTile(this.x - 2, this.y - 1));

        pGoTiles.push(board.getTile(this.x + 1, this.y + 2));
        pGoTiles.push(board.getTile(this.x + 1, this.y - 2));

        pGoTiles.push(board.getTile(this.x - 1, this.y + 2));
        pGoTiles.push(board.getTile(this.x - 1, this.y - 2));

        for (let goTile of pGoTiles) {

            if (goTile != null) {
                if (!goTile.isFriend(this.side)) {

                    goTiles.push(goTile);
    
                }
            }

        }

        return this.checkCheck(goTiles);

    }
}