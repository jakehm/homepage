import React from 'react'
import 'react-toolbox/lib/commons.scss'
import BlueAppBar from './BlueAppBar.js'
import {Tab, Tabs} from 'react-toolbox'
import Projects from './Projects.js'

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
            <Tab label='Personal Projects'>
              <Projects />
            </Tab>
          </Tabs>
        </section>
      </div>
    )
  }
}

export default App
