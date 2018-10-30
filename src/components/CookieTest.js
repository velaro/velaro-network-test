import React, { Component } from 'react';
import Panel from './Panel';

class CookieTest extends Component {
  state = {
    description: '',
    status: 'loading'
  };

  componentDidMount() {
    if (navigator.cookieEnabled) {
      this.setState({ description: 'enabled', status: 'success' });
    } else {
      this.setState({ description: 'disabled', status: 'failure' });
    }
  }

  render() {
    return (
      <Panel
        title="Cookies"
        description={this.state.description}
        status="success"
      />
    );
  }
}

export default CookieTest;
