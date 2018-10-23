import React, { Component } from 'react';
import Panel from './Panel';

class UserAgentTest extends Component {
  render() {
    return (
      <Panel
        title="User Agent"
        description={navigator.userAgent}
        status="success"
      />
    );
  }
}

export default UserAgentTest;
