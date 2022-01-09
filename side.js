
class Side {

    constructor(name, side) {

        this.mode = "hum";
        this.checked = false;
        this.opp = side;
        this.name = name;
        this.king = null;

    }

    addKing(king) {

        this.king = king;

    }

    getName() {
        return this.name;
    }

    setOtherSide(side) {
        this.opp = side;
    }

    getOtherSide() {

        return this.opp;

    }

    isHuman() {

        return this.mode == "hum";

    }

    setHuman() {

        this.mode = "hum";

    }

    isAlgorithm() {

        return this.mode == "alg";

    }

    setAlgorithm() {

        this.mode = "alg";

    }

    isNetwork() {

        return this.mode == "net";

    }

    setNetwork() {

        this.mode = "net";

    }

    check() {
        this.checked = true;
    }

    uncheck() {

        this.checked = false;

    }

    isCheck() {

        return this.checked;

    }

}
