import React, { Component } from 'react';
import Panel from './Panel';

class CookieTest extends Component {
  state = {
    description: '',
    status: 'loading'
  };

  componentDidMount() {
    const start = Date.now();

    fetch(`images/test.jpg?v=${Date.now()}`)
      .then(response => response.blob())
      .then(blob => {
        const megabits = blob.size / 125000;
        const end = Date.now();
        const milliseconds = end - start;
        const seconds = milliseconds / 1000;
        const mbps = megabits / seconds;

        this.setState({
          description: `${mbps.toFixed(2)} Mbps`,
          status: 'success'
        });
      });
  }

  render() {
    return (
      <Panel
        title="Bandwidth"
        description={this.state.description}
        status={this.state.status}
      />
    );
  }
}

export default CookieTest;
