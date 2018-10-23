import React, { Component } from 'react';
import Panel from './Panel';

class CdnTest extends Component {
  state = {
    description: '',
    status: 'loading'
  };

  componentDidMount() {
    const start = Date.now();

    fetch(this.props.endpoint)
      .then(() => {
        const end = Date.now();
        this.setState({
          description: `success (${end - start} ms)`,
          status: 'success'
        });
      })
      .catch(() => {
        this.setState({ description: 'failure', status: 'failure' });
      });
  }

  render() {
    return (
      <Panel
        title="CDN"
        description={this.state.description}
        status={this.state.status}
      />
    );
  }
}

export default CdnTest;
