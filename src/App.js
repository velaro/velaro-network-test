import React, { Component } from 'react'
import PanelList from './components/PanelList'


class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Velaro Network Troubleshooting Tool</h2>
          <main>
            <PanelList />
          </main>
        </div>
      </div>
    )
  }
}

export default App
