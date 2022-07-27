import './App.css';
import Start from './components/Start';
import Game from './components/Game';
import End from './components/End';
import React from 'react';
import { start } from './utils/constants';
import { game } from './utils/constants';
import { end } from './utils/constants';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: start,
      name: 'You',
      gameResult: ''
    }
  }

  changePage = currentPage => {
    this.setState({ currentPage });
  }

  changeName = name => {
    this.setState({ name });
  }

  getResult = gameResult => {
    this.setState({ gameResult })
  }

  render() {
    switch (this.state.currentPage) {
      case game: return <Game changePage={this.changePage} getResult={this.getResult} name={this.state.name} />;
      case end: return <End changePage={this.changePage}  gameResult={this.state.gameResult}/>;
      default: return <Start changePage={this.changePage} changeName={this.changeName} />;
    }
  }
}

export default App;
