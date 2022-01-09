// Tic Tac Toe
// Eric James
// May Wed. 19 2021
//

// capital = white
// lowercase = black
// p = pawn
// b = bishop
// r = rook
// h = knight
// k = king
// q = queen

let black = new Side("Black");
let white = new Side("White", black);
black.setOtherSide(white);
let turn = white;

let assets = {

  P: "assets/wp.png",
  K: "assets/wk.png",
  B: "assets/wb.png",
  R: "assets/wr.png",
  H: "assets/wh.png",
  Q: "assets/wq.png",
  p: "assets/bp.png",
  k: "assets/bk.png",
  b: "assets/bb.png",
  h: "assets/bh.png",
  q: "assets/bq.png",
  r: "assets/br.png"

}

function preload() {

  let peices = ["P", "B", "R", "H", "K", "Q", "p", "b", "r", "k", "h", "q"];

  for (key of peices) {

    assets[key] = loadImage(assets[key]);

  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  board = new Board();

  let peices = ["P", "B", "R", "H", "K", "Q", "p", "b", "r", "k", "h", "q"];

  for (key of peices) {

    assets[key].resize(assets[key].width / assets[key].height * board.tileSize, board.tileSize)

  }

  // makes pawns

  for (let i = 0; i < 8; i++) {

    new Pawn(white, i, 1);
    new Peice(null, i, 2);
    new Peice(null, i, 3);
    new Peice(null, i, 4);
    new Peice(null, i, 5);
    new Pawn(black, i, 6);

  }

  
  new Horse(white, 1, 0);
  new Bishop(white, 2, 0);
  white.addKing(new King(white, 3, 0, new Rook(white, 0, 0), new Rook(white, 7, 0)));
  new Queen(white, 4, 0);
  new Bishop(white, 5, 0);
  new Horse(white, 6, 0);

  new Horse(black, 1, 7);
  new Bishop(black, 2, 7);
  black.addKing(new King(black, 3, 7, new Rook(black, 0, 7), new Rook(black, 7, 7)));
  new Queen(black, 4, 7);
  new Bishop(black, 5, 7);
  new Horse(black, 6, 7);

}

function draw() {

  background(0);

  board.draw();

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

      board.getTile(x, y).draw();

    }
  }

  play();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

function keyPressed() {

  // if ((turn && white != "hum") || (!turn && black != "hum")) {

  //   play()

  // }

}

function mousePressed() {

  if (turn.isHuman()) {

    let x = floor(mouseX / board.tileSize);
    let y = floor(mouseY / board.tileSize);

    board.selectTile(x, y);

    if (board.selectedTile != null) {

      let goTiles = board.selectedTile.getGoTile();

      for (let goTile of goTiles) {

        if (goTile.x == x && goTile.y == y) {

          board.selectedTile.move(goTile);
          nextTurn();

        }

      }
    }

  }

}

function play() {

  if (turn == white) {

    if (white.isNetwork()) {

      // do neural net

    } else if (white.isAlgorithm()) {

      let move = calculateMove();

      move.peice.move(move.tile);
      nextTurn();

    } else {

      // human stuff

    }

  } else {

    if (black.isNetwork()) {

      // do neural net

    } else if (black.isAlgorithm()) {

      // algorithim

    } else {




    }

  }

  if (isChecked(turn)) {

    if (!turn.isCheck()) {

      turn.check();
      print(turn.getName() + " is in check");

    }

  }

  if (!isChecked(turn.getOtherSide())) {

    if (turn.getOtherSide().isCheck()) {
      turn.getOtherSide().uncheck();
      print(turn.getOtherSide().getName() + " is no longer in check");

    }

  }

}

function isChecked(side) {

  let moves = getMoves(side.getOtherSide(), maxDepth - 1);

  for (let move of moves) {

    if (move.tile.isKing()) {

      return true;

    }

  }

  return false;

}

function win(side) {

  board.draw();

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

      board.getTile(x, y).draw();

    }
  }

  print(side.getName() + " won!")

  noLoop();

}

function nextTurn() {

  board.unselect();



  turn = turn.getOtherSide();
}
