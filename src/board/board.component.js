let angular = require('angular');

angular.module('board')
.component('board',{
    templateUrl:'./board.template.html',
    controller: [ class {
        constructor(){
            this.board = [];
            this.winnerCell = [];
            this.running = false;
            this.indexes = [0,1,2];
            this.cleanGame();
        }

        cleanGame(){
            this.board = [];
            this.winnerCell = [];
            this.currentPlayer = 'X';
            this.nextPlayer = 'O';
            for(let i=0; i< 9; i++){
                this.board.push('');
                this.winnerCell.push(false);
            }
        }
        onStartClick(){
                this.cleanGame();
                this.running = true;
                this.finishedGame = false;
          }

        canPlay(x,y){
            return this.board[y*3+x] === '';
        }
        checkWinner(){
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
              ];
              for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                    this.winnerCell[a] = true;
                    this.winnerCell[b] = true;
                    this.winnerCell[c] = true;
                  return true;
                }
              }
              return false;
        }
        onClick(x,y){
            if(this.running && this.canPlay(x,y) && !this.finishedGame){
                this.board[y*3+x] = this.currentPlayer;
                if (this.checkWinner()){
                    this.finishedGame = true;
                }
                else {
                    let tmp = this.currentPlayer;
                    this.currentPlayer = this.nextPlayer;
                    this.nextPlayer = tmp;
                }
            }
        }
    }]
});