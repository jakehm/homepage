import React from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import GithubIcon from './GithubIcon.js'
import theme from './Projects.scss';

const Projects = () => (
  <Card raised>
    <CardTitle
      title="Automation Assistant"
      subtitle="An app that automates tasks server side and sends back a screnshot."
    />
    <CardMedia contentOverlay theme={theme}>
    <img
      src="/automation-assistant.png" 
    /> 
  </CardMedia>
    <CardText>Built with React, PhantomJS</CardText>
    <CardActions>
      <Button href='#' label="Demo" raised primary />
      <Button href='#' raised>
        <GithubIcon /> Code
      </Button>
    </CardActions>
  </Card>
)

export default Projects
