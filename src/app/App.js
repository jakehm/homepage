import React from 'react'
import 'react-toolbox/lib/commons.scss'
import BlueAppBar from './BlueAppBar.js'
import {Tab, Tabs} from 'react-toolbox'
import Project from './Project.js'

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
            	<div
            		className="container"
            		style={{ 
            			display: 'flex',
            			justifyContent: 'space-around',
            			flexWrap: 'wrap'
            		}}>
            	<Project
            		title="Automation Assistant"
            		subtitle="Automates tasks server side and sends back a screnshot."
            		imageSource="/automation-assistant.png"
            		cardText="Built with React, PhantomJS"
            		demoHref="#"
            		codeHref="#"
            	/>
            	<Project
            		title="Map Game"
            		subtitle="Persistant, multiplayer, realtime game played on a map.  WIP"
            		imageSource="/map-game.png"
            		cardText="Built with Express, Socket.io, MongoDB, Google Maps API"
            		demoHref="#"
            		codeHref="#"
            	/>
            	 <Project
            		title="Restaurant Finder"
            		subtitle="Find restaurants near you, filtered by distance."
            		imageSource="/restaurant-finder.png"
            		cardText="Built with React, Google Maps API"
            		demoHref="#"
            		codeHref="#"
            	/>
            	</div>
            </Tab>
          </Tabs>
        </section>
      </div>
    )
  }
}

export default App