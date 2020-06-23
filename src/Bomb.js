// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
       
      const seconds = this.state.secondsLeft - 1
      console.log(seconds);

      this.setState({ 
        secondsLeft: seconds
      });
    }, 1000);
  }



  displayCountdown() {
    if (this.state.secondsLeft === 0 ) {
      clearInterval(this.interval);
      return "Boom!"
    }
    return `${this.state.secondsLeft} seconds left before I go boom!`

  }
  render() {
    return (
    <div>{this.displayCountdown()}
      </div>
    )
  }
}

export default Bomb