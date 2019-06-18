import React, {Component} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  state = {
    player: 'sarah',
    balls: 0,
    strikes: 0
  }

  addBall = e => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return {balls: prevState.balls + 1}
      })
    } else {
      this.handleReset(e) 
    }
  }

  addStrike = e => {
    if (this.state.strike < 3) {
      this.setState(prevState => {
        return {ball: prevState.strikes + 1}
      })
    } else {
      this.handleReset(e)
    }
  }

  handleReset = e => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  hitReset = e => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  foulChange = e => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return {strikes: prevState.strikes + 1}
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Display 
          player={this.state.player} 
          balls={this.state.balls} 
          strikes={this.state.strikes}
          handleReset={this.handleReset}
        />
        <Dashboard
          addBall={this.addBall}
          addStrike={this.addStrike}
          foulChange={this.foulChange}
          hitReset={this.hitReset} 
        />
      </div>
    );
  }
}

export default App;
