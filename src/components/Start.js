import React from 'react'
import { game } from '../utils/constants'

class Start extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  handleClickStart = () => {
    this.props.changeName(this.state.name);
    this.props.changePage(game);
  }

  handleChange = e => {
    this.setState({ name: e.target.value.toUpperCase().trim() })
  }

  render() {
    return (
      <div>
        <h1>Ready for WAR</h1>
        <input onChange={this.handleChange} type='text' placeholder='Enter your name' value={this.state.name} />
        <button onClick={this.handleClickStart}>Start</button>
      </div>
    )
  }
}

export default Start