
let maxDepth = 3;

class Move {

}

class AlgMove extends Move {

    constructor(tile, peice, depth) {
    
        super()
        this.tile = tile;
        this.peice = peice;
        this.score;
        this.depth = depth;
        if (this.depth == null) {

            this.depth = 0;

        }

        if (depth == maxDepth) {

            this.score = calculateScore();
            
        }

        if (this.depth < maxDepth) {

            let x = peice.x;
            let y = peice.y;

            peice.move(tile, true);
            this.next = getMoves(peice.getSide().getOtherSide(), this.depth);

            peice.move(new Peice(null, x, y), true);
            board.setTile(tile.x, tile.y, tile);
            if (tile.getSide() != null) {
                if (tile.getSide() == white) {
                    board.white.push(tile);
                } else {
                    board.black.push(tile);
                }

            }

        }

        if (depth != maxDepth) {


            if (this.peice.getSide() == white) {
                this.score = Infinity;
            } else {

                this.score = -Infinity;

            }

            for (let move of this.next) {

                if (this.peice.getSide() == white) {
                    this.score = min(this.score, move.score);
                } else {

                    this.score = max(this.score, move.score);

                }

            }

        }

    }

    isCastle() {
        return false;
    }

}

class Castle extends Move{

    constructor(king, rook) {
        
        super();
        this.king;
        this.rook;
    }

    isCastle() {

        return true;

    }

}

function calculateScore() {
    let score = 0;
    for (let peice of board.white) {
        score += peice.getValue();
    }
    for (let peice of board.black) {

            score -= peice.getValue();

    }

    return score;

}
