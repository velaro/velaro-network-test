import React, { Component } from 'react'
import { hubConnection } from 'signalr-no-jquery'

import Panel from './Panel'

const PanelStatus = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

class PanelList extends Component {
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
      cookies: {
        title: 'Cookies',
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
      bandwidth: {
        title: 'Bandwidth',
        description: 'testing',
        status: PanelStatus.LOADING,
      },
    }
  }

  componentDidMount() {
    this.loadIpAddress()
    this.loadUserAgent()
    this.loadCookies()
    this.loadEngagementApi()
    this.loadMainApi()
    this.loadReportingApi()
    this.loadVisitorApi()
    this.loadCdn()
    this.loadEngagementHub()
    this.loadBandwidth()
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

  loadCookies() {
    const panels = Object.assign({}, this.state.panels)

    if(navigator.cookieEnabled) {
      panels.cookies.description = 'enabled'
      panels.cookies.status = PanelStatus.SUCCESS
    } else {
      panels.cookies.description = 'disabled'
      panels.cookies.status = PanelStatus.FAILURE
    }

    this.setState({ panels: panels })
  }

  loadEngagementApi() {
    const start = Date.now()

    fetch(this.props.engagementApiEndpoint)
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

    fetch(this.props.mainApiEndpoint)
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

    fetch(this.props.reportingApiEndpoint)
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

  loadVisitorApi() {
    const start = Date.now()

    fetch(this.props.visitorApiEndpoint)
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

    fetch(this.props.cdnEndpoint)
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

  async loadEngagementHub() {
    const connection = hubConnection(this.props.engagementHubEndpoint)
    const start = Date.now()

    try {
      await connection.start()
      const proxy = connection.createHubProxy("EngagementHub")
      const result = await proxy.invoke('test')

      if(result !== 'success') {
        throw new Error(`received an unexpected result: ${result}`)
      }

      const end = Date.now()
      const panels = Object.assign({}, this.state.panels)
      panels.engagementHub.description = `success (${end - start} ms)`
      panels.engagementHub.status = PanelStatus.SUCCESS
      this.setState({ panels: panels })
    } catch(err) {
      const panels = Object.assign({}, this.state.panels)
      panels.engagementHub.description = err.toString()
      panels.engagementHub.status = PanelStatus.FAILURE
      this.setState({ panels: panels })
    }
  }

  loadBandwidth() {
    const start = Date.now()

    fetch(`images/test.jpg?v=${Date.now()}`)
      .then(response => response.blob())
      .then(blob => {
          const megabits = blob.size / 125000
          const end = Date.now()
          const milliseconds = end - start
          const seconds = milliseconds / 1000
          const mbps = megabits / seconds
          const panels = Object.assign({}, this.state.panels)
          panels.bandwidth.description = `${mbps.toFixed(2)} Mbps`
          panels.bandwidth.status = PanelStatus.SUCCESS
          this.setState({ panels: panels })
        })
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

export default PanelList
