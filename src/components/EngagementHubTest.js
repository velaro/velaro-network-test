import $ from 'jquery/src/jquery';
import 'signalr';
import React, { Component } from 'react';
import Panel from './Panel';

class EngagementHubTest extends Component {
  state = {
    description: '',
    status: 'loading'
  };

  async componentDidMount() {
    const connection = $.hubConnection(this.props.endpoint);
    const start = Date.now();

    try {
      await connection.start();
      const proxy = connection.createHubProxy('EngagementHub');
      const result = await proxy.invoke('test');

      if (result !== 'success') {
        throw new Error(`received an unexpected result: ${result}`);
      }

      const end = Date.now();
      this.setState({
        description: `success (${end - start} ms)`,
        status: 'success'
      });
    } catch (err) {
      this.setState({ description: err.toString(), status: 'failure' });
    }
  }

  render() {
    return (
      <Panel
        title={this.props.title}
        description={this.state.description}
        status={this.state.status}
      />
    );
  }
}

export default EngagementHubTest;
