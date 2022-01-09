
class King extends Peice {

    constructor(side, x, y, rook1, rook2) {
        super(side, x, y);
        this.img = assets["k"];
        if (this.getSide() == white) {
            this.img = assets["K"];
        }
        this.unMoved = true;
        this.castleables = [rook1, rook2];
    }

    move(tile, temp) {

        if (!temp) {
            this.unMoved = false;
        }

        return super.move(tile, temp);

    }

    getValue()  {
        return 1000000;
    }

    isKing() {
        return true;
    }

    hasPeice() {
        return true;
    }

    notCastleable(rook) {

        for (let castle of this.castleables) {

            if (rook == castle) {

                this.castleables.splice(this.castleables.indexOf(rook), 1);

            }

        }

    }

    getGoTile() {


        let pGoTiles = [];
        let goTiles = [];

        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {

                pGoTiles.push(board.getTile(this.x + x, this.y + y));

            }
        }

        for (let goTile of pGoTiles) {

            if (goTile != null) {

                if (!goTile.isFriend(this.side)) {

                    goTiles.push(goTile);
    
                }
            }

        }
        if (this.unMoved && !this.getSide().isCheck()){
            for (let rook of this.castleables) {
                let start = rook.x;
                let end = this.x;

                if (start > end) {
                    end = rook.x;
                    start = this.x;

                }

                let space = true;
                let spaces = [];

                for (let x = start+1; x < end; x++) {
                    if (board.getTile(x, this.y).hasPeice()) {
                        space = false;

                    } else {

                        spaces.push(board.getTile(x, this.y));
                    }

                }
                if (space) {
                    if (this.checkCheck(spaces).length == spaces.length) {
                        
                        //castle move

                    }

                }

            }

        }

        return this.checkCheck(goTiles);

    }
}