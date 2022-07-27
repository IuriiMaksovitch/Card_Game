import React from 'react';
import { end } from '../utils/constants';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.compDeck = [{ rank: 6, suit: 'spade' }, { rank: 10, suit: 'diamond' }];
    this.playerDeck = [{ rank: 8, suit: 'heart' }, { rank: 10, suit: 'club' }];
    this.result = { computer: 0, player: 0 }
    this.state = {
      compCard: 'Computer card',
      playerCard: 'Player card',
    }
  }

  clickNextHandler = () => {
    if (this.compDeck.length && this.playerDeck.length) {
      const comp = this.compDeck.pop();
      const player = this.playerDeck.pop();
      (comp.rank !== player.rank) && (comp.rank > player.rank ? this.result.computer++ : this.result.player++)
      this.setState({
        compCard: `${comp.rank}, ${comp.suit}`,
        playerCard: `${player.rank}, ${player.suit}`
      })
    } else {
      this.props.getResult(this.result)
      this.props.changePage(end)
    }
  }

  render() {
    return (
      <div>
        <h2>COMPUTER</h2>
        <p>{this.state.compCard}</p>
        <p>{this.state.playerCard}</p>
        <h2>{this.props.name}</h2>
        <button onClick={this.clickNextHandler}>Next</button>

      </div>
    )
  }
}

export default Game