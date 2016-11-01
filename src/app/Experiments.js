import React from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import GithubIcon from './GithubIcon.js'

const Experiments = () => (
  <Card raised>
    <CardTitle
      title="Automation Assistant"
      subtitle="An app that automates tasks server side and sends back a screnshot."
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardText>Blah blah blah blah</CardText>
    <CardActions>
      <Button href='#' label="View" raised primary />
      <Button href='#' raised>
        <GithubIcon /> Github
      </Button>
    </CardActions>
  </Card>
)

export default Experiments
