import React from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import GithubIcon from './GithubIcon.js'
import carMediaTheme from './CardMedia.scss';

const Project = (props) => (
  <Card 
    raised
    style={{
      width:200,
      margin: 20,
      flex: 'auto'
    }}>
    <CardTitle
      title={props.title}
      subtitle={props.subtitle}
    />
    <CardMedia contentOverlay theme={cardMediaTheme}>
    <img
      src={props.imageSource}
    /> 
  </CardMedia>
    <CardText>{props.cardText}</CardText>
    <CardActions>
      <Button href={props.demoHref} label="Demo" raised primary />
      <Button href={props.codeHref} raised>
        <GithubIcon /> Code
      </Button>
    </CardActions>
  </Card>
)

Project.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  imageSource: React.PropTypes.string.isRequired,
  cardText: React.PropTypes.string.isRequired,
  demoHref: React.PropTypes.string.isRequired,
  codeHref: React.PropTypes.string.isRequired
}

export default Project