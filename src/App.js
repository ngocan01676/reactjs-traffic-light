import TrafficLight from  './components/TrafficLight';
import React,{ Component } from 'react';

const RED = 0;
const GREEN = 1;
const ORANGE = 2;

class  App extends Component {

  constructor() {
    super();
    this.state = {
      currentColor:RED
    }
    setInterval(() => {
      this.setState({
        currentColor:this.getNextColor(this.state.currentColor)
      })
    }, 1000);
    
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return GREEN;
      case GREEN:
        return ORANGE;
      default:
        return RED;
    }
  }

  render() {

    const {currentColor} = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }
}

export default App;
