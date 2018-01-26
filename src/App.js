import React, { Component } from 'react'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PanelList from './components/PanelList'

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
)

const Production = () => (
  <div>
    <PanelList
      engagementApiEndpoint="https://api-engagement-us-east.velaro.com/v1/test/ok"
      mainApiEndpoint="https://api-main-us-east.velaro.com/v1/test/ok"
      reportingApiEndpoint="https://api-reporting-us-east.velaro.com/v1/test/ok"
      visitorApiEndpoint="https://api-visitor-us-east.velaro.com/v1/test/ok"
      cdnEndpoint="https://eastprodcdn.azureedge.net/bundles/velaro.inline.js"
      engagementHubEndpoint="https://signalr-engagement-us-east.velaro.com" />
  </div>
)

const EnterpriseStaging = () => (
  <div>
    <PanelList
      engagementApiEndpoint="https://api-engagement-ent-stage.velaro.com/v1/test/ok"
      mainApiEndpoint="https://api-main-ent-stage.velaro.com/v1/test/ok"
      reportingApiEndpoint="https://api-reporting-ent-stage.velaro.com/v1/test/ok"
      visitorApiEndpoint="https://api-visitor-ent-stage.velaro.com/v1/test/ok"
      cdnEndpoint="https://cdn-ent-stage.velaro.com/bundles/velaro.inline.js"
      engagementHubEndpoint="https://signalr-engagement-ent-stage.velaro.com" />
  </div>
)

const CoreStaging = () => (
  <div>
    <PanelList
      engagementApiEndpoint="https://api-engagement-staging.velaro.com/v1/test/ok"
      mainApiEndpoint="https://api-main-staging.velaro.com/v1/test/ok"
      reportingApiEndpoint="https://api-reporting-staging.velaro.com/v1/test/ok"
      visitorApiEndpoint="https://api-visitor-staging.velaro.com/v1/test/ok"
      cdnEndpoint="https://cdn-staging.velaro.com/bundles/velaro.inline.js"
      engagementHubEndpoint="https://signalr-engagement-staging.velaro.com" />
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Velaro Network Troubleshooting Tool</h2>
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/production" component={Production}/>
              <Route path="/enterprisestaging" component={EnterpriseStaging}/>
			  <Route path="/corestaging" component={CoreStaging}/>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
