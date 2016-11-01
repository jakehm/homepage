import React from 'react'
import 'react-toolbox/lib/commons.scss'
import BlueAppBar from './BlueAppBar.js'
import {Tab, Tabs} from 'react-toolbox'
import Experiments from './Experiments.js'

class App extends React.Component {
  state={
    index: 1,
  }

  handleTabChange = index => {
    this.setState({index})
  }
  
  render() {
    return (
      <div>
        <BlueAppBar />
        <section style={{ padding: 20 }}>
          <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
            <Tab label='Resume'>
              Please hire me.
            </Tab>
            <Tab label='Experiments'>
              <Experiments />
            </Tab>
          </Tabs>
        </section>
      </div>
    )
  }
}

export default App
