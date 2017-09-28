import React, { Component } from 'react'
import './App.css'

import Panel from './components/Panel'

const PanelStatus = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

class App extends Component {
  state = {
    panels: {
      ipAddress: {
        title: 'IP Address',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      userAgent: {
        title: 'User Agent',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      engagementApi: {
        title: 'Enagement API',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      mainApi: {
        title: 'Main API',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      reportingApi: {
        title: 'Reporting API',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      routingApi: {
        title: 'Routing API',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      visitorApi: {
        title: 'Visitor API',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      cdn: {
        title: 'CDN',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
      engagementHub: {
        title: 'Engagement Hub',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
    }
  }

  componentDidMount() {
    this.loadIpAddress()
    this.loadUserAgent()
    this.loadEngagementApi()
    this.loadMainApi()
    this.loadReportingApi()
    this.loadRoutingApi()
    this.loadVisitorApi()
    this.loadCdn()
    this.loadEngagementHub()
  }

  loadIpAddress() {
    fetch('https://freegeoip.net/json/')
      .then(response => response.json())
      .then(json => {
        const panels = Object.assign({}, this.state.panels)
        panels.ipAddress.description = json.ip
        panels.ipAddress.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
  }

  loadUserAgent() {
    const panels = Object.assign({}, this.state.panels)
    panels.userAgent.description = navigator.userAgent
    panels.userAgent.status = PanelStatus.SUCCESS
    this.setState({ panels: panels })
  }

  loadEngagementApi() {
    const start = Date.now()

    fetch('http://engagement.api.local.velaro.com/v1/test/ok')
      .then(() => {
        const end = Date.now()
        const panels = Object.assign({}, this.state.panels)
        panels.engagementApi.description = `success (${end - start} ms)`
        panels.engagementApi.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
      .catch(() => {
        const panels = Object.assign({}, this.state.panels)
        panels.engagementApi.description = 'failure'
        panels.engagementApi.status = PanelStatus.FAILURE
        this.setState({ panels: panels })
      })
  }

  loadMainApi() {
    const start = Date.now()

    fetch('http://main.api.local.velaro.com/v1/test/ok')
      .then(() => {
        const end = Date.now()
        const panels = Object.assign({}, this.state.panels)
        panels.mainApi.description = `success (${end - start} ms)`
        panels.mainApi.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
      .catch(() => {
        const panels = Object.assign({}, this.state.panels)
        panels.mainApi.description = 'failure'
        panels.mainApi.status = PanelStatus.FAILURE
        this.setState({ panels: panels })
      })
  }

  loadReportingApi() {
    const start = Date.now()

    fetch('http://reporting.api.local.velaro.com/v1/test/ok')
      .then(() => {
        const end = Date.now()
        const panels = Object.assign({}, this.state.panels)
        panels.reportingApi.description = `success (${end - start} ms)`
        panels.reportingApi.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
      .catch(() => {
        const panels = Object.assign({}, this.state.panels)
        panels.reportingApi.description = 'failure'
        panels.reportingApi.status = PanelStatus.FAILURE
        this.setState({ panels: panels })
      })
  }

  loadRoutingApi() {
    const start = Date.now()

    fetch('http://routing.api.local.velaro.com/v1/test/ok')
      .then(() => {
        const end = Date.now()
        const panels = Object.assign({}, this.state.panels)
        panels.routingApi.description = `success (${end - start} ms)`
        panels.routingApi.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
      .catch(() => {
        const panels = Object.assign({}, this.state.panels)
        panels.routingApi.description = 'failure'
        panels.routingApi.status = PanelStatus.FAILURE
        this.setState({ panels: panels })
      })
  }

  loadVisitorApi() {
    const start = Date.now()

    fetch('http://visitor.api.local.velaro.com/v1/test/ok')
      .then(() => {
        const end = Date.now()
        const panels = Object.assign({}, this.state.panels)
        panels.visitorApi.description = `success (${end - start} ms)`
        panels.visitorApi.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
      .catch(() => {
        const panels = Object.assign({}, this.state.panels)
        panels.visitorApi.description = 'failure'
        panels.visitorApi.status = PanelStatus.FAILURE
        this.setState({ panels: panels })
      })
  }

  loadCdn() {
    const start = Date.now()

    fetch('http://cdn.local.velaro.com/bundles/velaro.inline.js')
      .then(() => {
        const end = Date.now()
        const panels = Object.assign({}, this.state.panels)
        panels.cdn.description = `success (${end - start} ms)`
        panels.cdn.status = PanelStatus.SUCCESS
        this.setState({ panels: panels })
      })
      .catch(() => {
        const panels = Object.assign({}, this.state.panels)
        panels.cdn.description = 'failure'
        panels.cdn.status = PanelStatus.FAILURE
        this.setState({ panels: panels })
      })
  }

  loadEngagementHub() {
    const start = Date.now()

    // todo: signalr stuff

    // fetch('http://engagement.signalr.local.velaro.com/v1/test/ok')
    //   .then(() => {
    //     const end = Date.now()
    //     const panels = Object.assign({}, this.state.panels)
    //     panels.engagementHub.description = `success (${end - start} ms)`
    //     panels.engagementHub.status = PanelStatus.SUCCESS
    //     this.setState({ panels: panels })
    //   })
    //   .catch(() => {
    //     const panels = Object.assign({}, this.state.panels)
    //     panels.engagementHub.description = 'failure'
    //     panels.engagementHub.status = PanelStatus.FAILURE
    //     this.setState({ panels: panels })
    //   })
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.panels).map(key => (
          <Panel
            key={key}
            title={this.state.panels[key].title}
            description={this.state.panels[key].description}
            status={this.state.panels[key].status} />
        ))}
      </div>
    )
  }
}

export default App
