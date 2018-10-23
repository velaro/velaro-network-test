import React, { Component } from 'react';
import EngagementApiTest from './components/EngagementApiTest';
import MainApiTest from './components/MainApiTest';
import ReportingApiTest from './components/ReportingApiTest';
import VisitorApiTest from './components/VisitorApiTest';
import CdnTest from './components/CdnTest';
import EngagementHubTest from './components/EngagementHubTest';
import UserAgentTest from './components/UserAgentTest';
import CookieTest from './components/CookieTest';
import BandwidthTest from './components/BandwidthTest';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/production">Production</Link>
      </li>
      <li>
        <Link to="/enterprisestaging">Enterprise Staging</Link>
      </li>
      <li>
        <Link to="/corestaging">Core Staging</Link>
      </li>
    </ul>
  </div>
);

const Production = () => (
  <div>
    <UserAgentTest />
    <CookieTest />
    <EngagementApiTest endpoint="https://api-engagement-us-east.velaro.com/v1/test/ok" />
    <MainApiTest endpoint="https://api-main-us-east.velaro.com/v1/test/ok" />
    <ReportingApiTest endpoint="https://api-reporting-us-east.velaro.com/v1/test/ok" />
    <VisitorApiTest endpoint="https://api-visitor-us-east.velaro.com/v1/test/ok" />
    <CdnTest endpoint="https://eastprodcdn.azureedge.net/bundles/velaro.inline.js" />
    <EngagementHubTest
      title="Engagement Hub 1"
      endpoint="https://signalr-east-prod-1.velaro.com"
    />
    <EngagementHubTest
      title="Engagement Hub 2"
      endpoint="https://signalr-east-prod-2.velaro.com"
    />
    <EngagementHubTest
      title="Engagement Hub 3"
      endpoint="https://signalr-east-prod-3.velaro.com"
    />
    <EngagementHubTest
      title="Engagement Hub 4"
      endpoint="https://signalr-east-prod-4.velaro.com"
    />
    <BandwidthTest />
  </div>
);

const EnterpriseStaging = () => (
  <div>
    <UserAgentTest />
    <CookieTest />
    <EngagementApiTest endpoint="https://api-engagement-ent-stage.velaro.com/v1/test/ok" />
    <MainApiTest endpoint="https://api-main-ent-stage.velaro.com/v1/test/ok" />
    <ReportingApiTest endpoint="https://api-reporting-ent-stage.velaro.com/v1/test/ok" />
    <VisitorApiTest endpoint="https://api-visitor-ent-stage.velaro.com/v1/test/ok" />
    <CdnTest endpoint="https://cdn-ent-stage.velaro.com/bundles/velaro.inline.js" />
    <EngagementHubTest
      title="Engagement Hub"
      endpoint="https://signalr-engagement-ent-stage.velaro.com"
    />
    <BandwidthTest />
  </div>
);

const CoreStaging = () => (
  <div>
    <UserAgentTest />
    <CookieTest />
    <EngagementApiTest endpoint="https://api-engagement-staging.velaro.com/v1/test/ok" />
    <MainApiTest endpoint="https://api-main-staging.velaro.com/v1/test/ok" />
    <ReportingApiTest endpoint="https://api-reporting-staging.velaro.com/v1/test/ok" />
    <VisitorApiTest endpoint="https://api-visitor-staging.velaro.com/v1/test/ok" />
    <CdnTest endpoint="https://cdn-staging.velaro.com/bundles/velaro.inline.js" />
    <EngagementHubTest
      title="Engagement Hub"
      endpoint="https://signalr-engagement-staging.velaro.com"
    />
    <BandwidthTest />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Velaro Network Troubleshooting Tool</h2>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/production" component={Production} />
              <Route path="/enterprisestaging" component={EnterpriseStaging} />
              <Route path="/corestaging" component={CoreStaging} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
