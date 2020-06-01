import React, { Component } from 'react';
import './style.css';

export const GameInputs = {
  Rock: '👊',
  Paper: '📄',
  Scissors: '✂️',
};

// Game outcomes for the oponent!
const GameOutcomes = {
  Win: 'You won!',
  Lost: 'You lost!',
  Draw: 'Draw!',
};

class Game extends Component {
  state = {
    myWins: 0,
    oponentWins: 0,
    myLastMove: '',
    oponentLastMove: '',
    result: 'Click 👊, 📄 or ✂️ to play the game!',
  };

  generateMyMove = () => {
    let number = Math.random();
    if (number > 2 / 3) {
      return GameInputs.Paper;
    } else if (number > 1 / 3) {
      return GameInputs.Rock;
    } else {
      return GameInputs.Scissors;
    }
  };

  winLogic = (oponentMove, myMove) => {
    if (oponentMove === myMove) {
      return GameOutcomes.Draw;
    } else {
      if (oponentMove === GameInputs.Rock) {
        if (myMove === GameInputs.Scissors) {
          return GameOutcomes.Win;
        } else {
          return GameOutcomes.Lost;
        }
      } else if (oponentMove === GameInputs.Paper) {
        if (myMove === GameInputs.Rock) {
          return GameOutcomes.Win;
        } else {
          return GameOutcomes.Lost;
        }
      } else if (oponentMove === GameInputs.Scissors) {
        if (myMove === GameInputs.Paper) {
          return GameOutcomes.Win;
        } else {
          return GameOutcomes.Lost;
        }
      }
    }
  };

  handleMove = (oponentMove) => {
    let myMove = this.generateMyMove();
    let result = this.winLogic(oponentMove, myMove);
    var newOponentsWins = this.state.oponentWins;
    var newMyWins = this.state.myWins;
    if (result === GameOutcomes.Win) {
      newOponentsWins++;
    } else if (result === GameOutcomes.Lost) {
      newMyWins++;
    }

    this.setState({
      myLastMove: myMove,
      oponentLastMove: oponentMove,
      myWins: newMyWins,
      oponentWins: newOponentsWins,
      result: result,
    });
  };

  handleReset = () => {
    this.setState({
      myWins: 0,
      oponentWins: 0,
      myLastMove: '',
      oponentLastMove: '',
      result: 'Click 👊, 📄 or ✂️ to play the game!',
    });
  };

  render() {
    return (
      <div className="wrapper-game">
        <h2>Bored? I've built you a game!</h2>
        <div className="container">
          <p>{this.state.result}</p>
          <div className="row players">
            <div className="col text-right mr-2">Me</div>
            <div className="col text-left ml-2">You</div>
          </div>
          <div className="game-chars">
            {this.state.myLastMove} {this.state.myWins} :{' '}
            {this.state.oponentWins} {this.state.oponentLastMove}
          </div>
          <hr />
          <div className="game-chars">
            <button
              className="btn-move"
              onClick={() => this.handleMove(GameInputs.Rock)}
            >
              {GameInputs.Rock}
            </button>
            <button
              className="btn-move"
              onClick={() => this.handleMove(GameInputs.Paper)}
            >
              {GameInputs.Paper}
            </button>
            <button
              className="btn-move"
              onClick={() => this.handleMove(GameInputs.Scissors)}
            >
              {GameInputs.Scissors}
            </button>
          </div>
          <button className="btn-reset" onClick={() => this.handleReset()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
