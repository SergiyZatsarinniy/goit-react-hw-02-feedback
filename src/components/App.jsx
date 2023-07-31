import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    return (
      <div>
        <section>
          <p>Please leave feedback</p>;
          <button type="button" onClick={() => this.handleIncrement('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.handleIncrement('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.handleIncrement('bad')}>
            Bad
          </button>
        </section>
        <section>
          <p>Statistics</p>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </section>
      </div>
    );
  }
}

export default App;
