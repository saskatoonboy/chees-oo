
class Board {

    constructor() {

        this.layout = [];
        this.white = [];
        this.black = [];
        this.tileSize = width;
        this.selectedTile;
        if (width > height) {

            this.tileSize = height;

        }
        this.tileSize = this.tileSize / 8;
        for (let i = 0; i < 8; i++) {

            this.layout.push([]);

        }

    }

    keep() {

        let ar = [[], [], [], [], [], [], [], []];
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                ar[x][y] = this.layout[x][y];
            }
    
        }
        return ar;
    }

    unselect() {

        this.selectedTile = null;

    }

    selectTile(x, y) {

        if (x > 7 || x < 0 || y > 7 || y < 0) {
            return;
        }

        let tile = this.getTile(x, y);

        if (tile.isFriend(turn)) {
            this.selectedTile = tile;
        }


    }

    getTile(x, y) {

        if (x > 7 || x < 0 || y > 7 || y < 0) {

            return null;

        }

        return this.layout[x][y];

    }

    setTile(x, y, peice) {

        if (x > 7 || x < 0 || y > 7 || y < 0) {

            return null;

        }

        this.layout[x][y] = peice;

    }
    

    draw() {

        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {

                if (x % 2 == y % 2) {

                    fill(255, 224, 161);

                } else {

                    fill(120, 80, 0);

                }
                rect(x * this.tileSize, y * this.tileSize, this.tileSize);

            }
        }
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                if (this.selectedTile != null) {

                    if (this.selectedTile.x == x && this.selectedTile.y == y) {

                        fill(53, 176, 55, 200);
                        rect(x * this.tileSize, y * this.tileSize, this.tileSize);
                        let goTiles = this.selectedTile.getGoTile();
                        for (let goTile of goTiles) {

                            fill(3, 177, 252, 150);
                            rect(goTile.x * this.tileSize, goTile.y * this.tileSize, this.tileSize);

                        }

                    }

                }

                if (white.isCheck()) {

                    if (this.getTile(x, y).isKing()) {
                        let tile = this.getTile(x, y);
                        if (tile.isFriend(white)) {

                            fill(255, 0, 0);
                            rect(tile.x * this.tileSize, tile.y * this.tileSize, this.tileSize);

                        }
                        
                    }

                }


                if (black.isCheck()) {

                    if (this.getTile(x, y).isKing()) {
                        let tile = this.getTile(x, y);
                        if (tile.isFriend(black)) {

                            fill(255, 0, 0);
                            rect(tile.x * this.tileSize, tile.y * this.tileSize, this.tileSize);

                        }
                        
                    }

                }
            }
        }

    }

}

let board;
