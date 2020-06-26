import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let letterId = 0;
class Tile {
    constructor(index) {
        this.index = index;
        this.x = index % 15;
        this.y = (index - (index % 15)) / 15;
        //the following line is my entry into Humber's Web Dev 2020 Code Golf competition
        this.tileMultiplier =
            ((this.y === 0 || this.y === 14) && (this.x === 0 || this.x === 7 || this.x === 14)) || (this.y === 7 && (this.x === 0 || this.x === 14)) ? "TW"
                : (this.x === this.y || this.x === (14 - this.y)) && ((this.y > 0 && this.y < 5) || (this.y > 9 && this.y < 14)) || (this.x === 7 && this.y === 7) ? "DW"
                : ((this.x === 5 || this.x === 9) && (this.y === 1 || this.y === 5 || this.y === 9 || this.y === 13)) || ((this.y === 5 || this.y === 9) && (this.x === 1 || this.x === 13)) ? "TL"
                    : ((this.y === 0 || this.y === 7 || this.y === 14) && (this.x === 3 || this.x === 11)) || ((this.y === 2 || this.y === 6 || this.y === 8 || this.y === 12) && (this.x === 6 || this.x === 8)) || ((this.y === 3 || this.y === 11) && (this.x === 0 || this.x === 7 || this.x === 14)) || ((this.y === 6 || this.y === 8) && (this.x === 2 || this.x === 12)) ? "DL"
                        : "none";
        this.letterMultiplier = this.tileMultiplier === "TL" ? 3 : this.tileMultiplier === "DL" ? 2 : 1;
        this.wordMultiplier = this.tileMultiplier === "TW" ? 3 : this.tileMultiplier === "DW" ? 2 : 1;
        this.letter = "";
        this.value = 0;
        this.new = true;
        this.placed = false;
    }
}

class Letter {
    constructor(character, value, id) {
        this.character = character;
        this.value = value;
        this.id = id
    }
}

//let tiles = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];

const tiles = [];


let gameBag = initializeTileBag();

// console.log(gameBag);
//
let player1Hand = drawTiles(7);
//
// console.log(player1Hand);
//
let player2Hand = drawTiles(7);
//
// console.log(player2Hand);

for (let i = 0; i < 225; i++) {
    let newTile = new Tile(i);
    tiles.push(newTile);
}


new Vue({
    render: h => h(App),
    data: {
        tiles: tiles,
        gameBag: gameBag,
        currentLetter: null,
        player1Tiles: player1Hand,
        player2Tiles: player2Hand
    },
    methods: {
        grabRandomTile: function () {
            let randomLetter = this.gameBag.splice(Math.floor(Math.random() * gameBag.length), 1);
            //this.currentLetter = randomLetter[0];
            console.log(randomLetter);
            return randomLetter
        },
      drawTiles: function (drawNumber) {
        drawNumber = drawNumber > this.gameBag.length ? this.gameBag.length : drawNumber;
        const tempTileArray = [];
        for (let i = 0; i < drawNumber; i++) {
          tempTileArray.push(...this.grabRandomTile());
        }
        return tempTileArray;
      },
        fillHand: function (player, count, tempArray) {
            if(player === 1) {
                tempArray.push(...this.drawTiles(count));
                this.player1Tiles = tempArray;
            } else if(player === 2) {
                tempArray.push(...this.drawTiles(count));
                this.player2Tiles = tempArray
            }
        }
    }
}).$mount('#app');


function generateLetters(letter, value, count) {
    const tempLetterArray = [];

    for (let i = 0; i < count; i++) {
        letterId++;
        tempLetterArray.push(new Letter(letter, value, letterId));
    }
    return tempLetterArray
}

function initializeTileBag() {
    let tilebag = [];

    tilebag.push(...generateLetters("blank", 0, 2));
    tilebag.push(...generateLetters("E", 1, 12));
    tilebag.push(...generateLetters("A", 1, 9));
    tilebag.push(...generateLetters("I", 1, 9));
    tilebag.push(...generateLetters("O", 1, 8));
    tilebag.push(...generateLetters("N", 1, 6));
    tilebag.push(...generateLetters("R", 1, 6));
    tilebag.push(...generateLetters("T", 1, 6));
    tilebag.push(...generateLetters("L", 1, 4));
    tilebag.push(...generateLetters("S", 1, 4));
    tilebag.push(...generateLetters("U", 1, 4));
    tilebag.push(...generateLetters("D", 2, 4));
    tilebag.push(...generateLetters("G", 2, 3));
    tilebag.push(...generateLetters("B", 3, 2));
    tilebag.push(...generateLetters("C", 3, 2));
    tilebag.push(...generateLetters("M", 3, 2));
    tilebag.push(...generateLetters("P", 3, 2));
    tilebag.push(...generateLetters("F", 4, 2));
    tilebag.push(...generateLetters("H", 4, 2));
    tilebag.push(...generateLetters("V", 4, 2));
    tilebag.push(...generateLetters("W", 4, 2));
    tilebag.push(...generateLetters("Y", 4, 2));
    tilebag.push(...generateLetters("K", 5, 1));
    tilebag.push(...generateLetters("J", 8, 1));
    tilebag.push(...generateLetters("X", 8, 1));
    tilebag.push(...generateLetters("Q", 10, 1));
    tilebag.push(...generateLetters("Z", 10, 1));
    return tilebag
}

function grabRandomTile() {

    return gameBag.splice(Math.floor(Math.random() * gameBag.length), 1);
}

function drawTiles(drawNumber) {
    drawNumber = drawNumber > gameBag.length ? gameBag.length : drawNumber;
    const tempTileArray = [];
    for (let i = 0; i < drawNumber; i++) {
        tempTileArray.push(...grabRandomTile());
    }
    return tempTileArray;
}