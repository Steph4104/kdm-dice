import React, { Component } from "react";
import "./App.css";
import one from "./assets/1.jpg";
import two from "./assets/2.jpg";
import three from "./assets/3.jpg";
import four from "./assets/4.jpg";
import five from "./assets/5.jpg";
import six from "./assets/6.jpg";
import seven from "./assets/7.jpg";
import eight from "./assets/8.jpg";
import nine from "./assets/9.jpg";
import ten from "./assets/10.jpg";

class App extends Component {
  state = {
    numberOfDice: null,
    rolls: [],
    rollSum: null
  };
  diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 10) + 1;
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    });
  };
  render() {
    return (
      <div className="App">
        <h1>KDM: Dice Roll</h1>
        <div className="buttons">
          {[1, 2, 3, 4, 5].map(number => {
            let text = number === 1 ? "die" : "dice";
            return (
              <button
                key={number}
                onClick={() => this.diceRoll(number)}
                className="button"
              >

                {number} {text}
              </button>
            );
          })}
        </div>      
        {
          this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)
        }
      </div>
    );
  }
}
export default App;

const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <img className="dice-image" src={one} alt="1" />;
  } else if (roll === 2) {
    return <img className="dice-image" src={two} alt="2" />;
  } else if (roll === 3) {
    return <img className="dice-image" src={three} alt="3" />;
  } else if (roll === 4) {
    return <img className="dice-image" src={four} alt="4" />;
  } else if (roll === 5) {
    return <img className="dice-image" src={five} alt="5" />;
  } else if (roll === 6) {
    return <img className="dice-image" src={six} alt="6" />;
  } else if (roll === 7) {
    return <img className="dice-image" src={seven} alt="7" />;
  } else if (roll === 8) {
    return <img className="dice-image" src={eight} alt="8" />;
  } else if (roll === 9) {
    return <img className="dice-image" src={nine} alt="9" />;
  } else if (roll === 10) {
    return <img className="dice-image" src={ten} alt="10" />;
  }
};
