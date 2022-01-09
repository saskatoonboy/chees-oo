
let depths = -1;

function calculateMove() {

    let moves = getMoves(turn);
    let bestMoves = [];
    let bestScore = Infinity;
    if (turn == white) {
        bestScore = -Infinity;
    }

    for (let move of moves) {

        if (move.score == bestScore) {
            bestMoves.push(move);
        } else {

            if (turn == white) {
                
                if (move.score > bestScore) {
                    bestScore = move.score;
                    bestMoves = [move];
                }

            }  else {
                
                if (move.score < bestScore) {
                    bestScore = move.score;
                    bestMoves = [move];
                }
            }

        }

    }

    let rand = floor(random(0, bestMoves.length));
    return bestMoves[rand];

}

function getMoves(turn, depth) {

    let moves = [];
    let activePeices = board.black;
    if (turn == white) {
        activePeices = board.white;
    }

    if (depth == null) {
        depth = 0;
    }
    for (let peice of activePeices) {

        let goTiles = peice.getGoTile();
        for (let goTile of goTiles) {

            moves.push(new AlgMove(goTile, peice, depth+1));


        }

    }
    return moves;

}
